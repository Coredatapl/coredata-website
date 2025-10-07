import { FormEvent, useEffect, useState } from "react";
import Input from "./Input";
import ActionIndicator from "./ActionIndicator";
import Button from "./Button";
import TextArea from "./TextArea";
import { FormFieldType, HtmlElementType } from "../../utils/common";

export interface FormField {
  field: FormFieldType;
  name: string;
  type: HtmlElementType;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
  matchingField?: string;
  valid?: boolean;
  autocomplete?: string;
  disabled?: boolean;
  minLength?: number;
}

export interface SubmitResult {
  type: "error" | "success" | "info";
  message: string;
}

interface FormProps {
  fields: FormField[];
  onSubmit(data: FormData): Promise<SubmitResult>;
  className?: string;
  submitLabel?: string;
}

/**
 * qlty-ignore: qlty:function-complexity
 * qlty-ignore: qlty:return-statements
 */
export default function Form({
  className,
  fields,
  onSubmit,
  submitLabel,
}: FormProps) {
  const [processing, setProcessing] = useState(false);
  const [formFields, setFormFields] = useState(fields);
  const [result, setResult] = useState<SubmitResult>();

  function validate(data: FormData) {
    let errorMessage = "";
    for (const field of formFields) {
      const value = data.get(field.name);
      const matchingValue = field.matchingField
        ? data.get(field.matchingField)
        : null;
      errorMessage = validateField(field, value, matchingValue);
      const valid = errorMessage.length === 0;

      updateField(field.name, { ...field, valid });
    }
    if (errorMessage.length !== 0) {
      console.warn("Form invalid: " + errorMessage);
    }
    setResult({ type: "error", message: errorMessage });

    return errorMessage.length === 0;
  }

  function validateField(
    field: FormField,
    value: FormDataEntryValue | null,
    matchingValue: FormDataEntryValue | null
  ) {
    let errorMessage = "";
    if (field.required && (!value || !value.toString().length)) {
      errorMessage += `Field ${field.name} is required. `;
    }
    if (!field.matchingField) {
      return errorMessage;
    }

    const matchingField = formFields.filter(
      (f) => f.name === field.matchingField
    )[0];
    if (matchingField && value !== matchingValue) {
      errorMessage += `Fields ${matchingField ? matchingField.placeholder : field.matchingField} and ${field.placeholder} must match. `;
      updateField(matchingField.name, { ...matchingField, valid: false });
    }
    return errorMessage;
  }

  function updateField(name: string, data: FormField) {
    setFormFields(
      formFields.map((field) => {
        if (field.name === name) {
          return { ...data };
        }
        return field;
      })
    );
  }

  function isValidField(field: FormField) {
    return typeof field.valid !== "undefined" && !field.valid ? false : true;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setProcessing(true);
    setResult(undefined);

    const data = new FormData(event.currentTarget);
    const valid = validate(data);
    if (!valid) {
      setProcessing(false);
      return;
    }

    const result = await onSubmit(data);
    setProcessing(false);
    setResult(result);
  }

  function renderResult() {
    if (!result) {
      return null;
    }

    let color = "text-gray-500";
    let icon = "fi-sr-info";
    if (result.type === "error") {
      color = "text-red-800";
      icon = "fi-sr-exclamation";
    } else if (result.type === "success") {
      color = "text-emerald-600";
      icon = "fi-sr-check-circle";
    }

    return (
      <div className={`flex items-start ${color}`}>
        <i className={`fi ${icon} w-5 h-5 mt-1 mr-2`}></i> {result.message}
      </div>
    );
  }

  useEffect(() => {}, [formFields, result]);

  return (
    <form className={className} onSubmit={handleSubmit}>
      <div className="flex flex-col w-full items-start justify-center">
        {formFields &&
          formFields.map((field, idx) => {
            if (field.field === FormFieldType.INPUT) {
              const valid = isValidField(field);
              return (
                <Input
                  name={field.name}
                  type={field.type}
                  defaultValue={field.defaultValue}
                  placeholder={field.placeholder}
                  required={field.required ?? false}
                  error={!valid}
                  autocomplete={field.autocomplete}
                  disabled={field.disabled ?? false}
                  minLength={field.minLength}
                  key={idx}
                />
              );
            } else if (field.field === FormFieldType.TEXTAREA) {
              const valid = isValidField(field);
              return (
                <TextArea
                  name={field.name}
                  placeholder={field.placeholder}
                  required={field.required ?? false}
                  error={!valid}
                  disabled={field.disabled ?? false}
                  key={idx}
                />
              );
            }
          })}

        {processing && <ActionIndicator name="Sending" />}
        {!processing && result && renderResult()}
        {!processing && !result && (
          <Button label={submitLabel ? submitLabel : "Submit"} type="submit" />
        )}
      </div>
    </form>
  );
}
