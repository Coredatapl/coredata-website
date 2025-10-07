import { useEffect, useState } from "react";
import { HtmlElementType } from "../../utils/common";

interface InputProps {
  name: string;
  type?: HtmlElementType;
  id?: string;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
  readonly?: boolean;
  error?: boolean;
  onChange?: (value: string) => void;
  autocomplete?: string;
  disabled?: boolean;
  minLength?: number;
}

export default function Input({
  name,
  type = HtmlElementType.TEXT,
  id,
  defaultValue,
  placeholder,
  required,
  readonly,
  error,
  onChange,
  autocomplete,
  disabled,
  minLength,
}: InputProps) {
  const isError = error ?? false;
  const [valid, setValid] = useState(!isError);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const style = !valid
    ? "border-b-red-700 focus:border-b-red-600"
    : "border-b-gray-200 focus:border-b-brand-violet";

  function handleOnChange(value: string) {
    validate(value);
    if (!valid) {
      return;
    }

    if (onChange) {
      onChange(value);
    }
  }

  function validate(value: string) {
    setErrorMessage(undefined);
    setValid(true);
    if (required && !value.trim().length) {
      setErrorMessage(`Field ${placeholder} is required`);
      setValid(false);
    } else if (minLength && value.length < minLength) {
      setErrorMessage(
        `Field ${placeholder} must be at least ${minLength} characters long`
      );
      setValid(false);
    } else if (type === HtmlElementType.EMAIL) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(value)) {
        setErrorMessage(`Field ${placeholder} must be a valid email address`);
        setValid(false);
      }
    }
  }

  useEffect(() => {
    const isError = error ?? false;
    setValid(!isError);
  }, [error]);

  return (
    <>
      {errorMessage && (
        <div className="flex align-middle text-xs text-red-800">
          <i className={`fi fi-sr-info w-4 h-4 mt-1 mr-1`}></i> {errorMessage}
        </div>
      )}
      <input
        className={`form-input inline-block w-full mt-1 mb-4 py-2 px-1 text-xs md:text-sm outline-none border-t-transparent border-b border-x-transparent focus:border-t-transparent focus:border-x-transparent ${style}`}
        name={name}
        type={type}
        id={id}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required={required}
        readOnly={readonly}
        onChange={(e) => handleOnChange(e.target.value)}
        autoComplete={autocomplete}
        disabled={disabled}
      />
    </>
  );
}
