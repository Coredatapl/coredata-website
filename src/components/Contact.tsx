import { AppComponents } from "./App";
import Form, {
  FormField,
  FormFieldType,
  HtmlElementType,
  SubmitResult,
} from "./ui/Form";
import Header, { HeaderTheme } from "./ui/Header";
import Section from "./ui/Section";
import SubHeader from "./ui/SubHeader";
import { sendEmail } from "../utils/api.service";

export default function Contact() {
  const fields: FormField[] = [
    {
      field: FormFieldType.INPUT,
      name: "contactName",
      placeholder: "Name",
      type: HtmlElementType.TEXT,
      required: true,
      minLength: 3,
    },
    {
      field: FormFieldType.INPUT,
      name: "contactEmail",
      placeholder: "Email",
      type: HtmlElementType.EMAIL,
      required: true,
      minLength: 5,
    },
    {
      field: FormFieldType.INPUT,
      name: "contactSubject",
      placeholder: "Subject",
      type: HtmlElementType.TEXT,
      required: true,
      minLength: 3,
    },
    {
      field: FormFieldType.TEXTAREA,
      name: "contactMessage",
      placeholder: "Message",
      type: HtmlElementType.TEXT,
      required: true,
    },
  ];

  async function handleSubmit(data: FormData) {
    const name = data.get("contactName");
    const email = data.get("contactEmail");
    const subject = data.get("contactSubject");
    const message = data.get("contactMessage");

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof subject !== "string" ||
      typeof message !== "string"
    ) {
      return {
        type: "error",
        message: "Form data is invalid",
      } as SubmitResult;
    }
    if (name.length < 3 || email.length < 5 || message.length === 0) {
      return {
        type: "error",
        message: "Form data is too short",
      } as SubmitResult;
    }

    const response = await sendEmail(name, email, subject, message);

    if (!response.success) {
      return {
        type: "error",
        message: `Form submission error: ${response.result}`,
      } as SubmitResult;
    }
    return {
      type: "success",
      message: "Form submitted successfully",
    } as SubmitResult;
  }

  return (
    <Section id={AppComponents.contact} bgColor="bg-slate-100">
      <div className="relative flex flex-wrap -mb-10 z-10 justify-center text-left bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="relative z-0 hidden lg:flex flex-col w-1/2 xl:w-2/3 px-6 md:px-8 py-4 lg:py-8 bg-coredataViolet text-white">
          <Header message="Contact information" theme={HeaderTheme.Light} />
          <div>
            <p className="leading-relaxed mt-4 mb-4">
              If you&apos;d like to collaborate with us, send us an email and
              let us know how we can help. Below you&apos;ll find all our
              contact details and a contact form. We also invite you to visit
              our{" "}
              <a
                href="https://www.linkedin.com/company/coredatapl/"
                target="_blank"
                rel="noreferrer"
                title="Go to our LinkedIn page"
              >
                LinkedIn
              </a>{" "}
              profile.
            </p>
          </div>
          <div className="flex flex-col my-4">
            <div className="flex flex-row items-center justify-start align-middle">
              <div className="h-10 w-10 mr-2 p-2 text-xl text-white font-normal outline-none focus:outline-none">
                <i className={`fi fi-sr-envelope inline-block ml-1`}></i>
              </div>
              <a href="mailto:hello@coredata.pl" className="pl-2">
                hello@coredata.pl
              </a>
            </div>
            <div className="flex flex-row items-center justify-start align-middle mt-4">
              <div className="h-10 w-10 mr-2 p-2 text-xl text-white font-normal rounded-full outline-none focus:outline-none">
                <i className={`fi fi-sr-address-book inline-block ml-1`}></i>
              </div>
              <p className="pl-2">Warsaw, Poland</p>
            </div>
          </div>
        </div>
        <div className="relative z-0 flex flex-col w-full lg:w-1/2 xl:w-1/3 px-6 md:px-8 py-4 lg:py-8">
          <div className="flex lg:hidden flex-col">
            <SubHeader message="Contact form" />
            <p className="leading-relaxed mt-4 mb-4">
              If you want to cooperate with us, please contact us, send an
              e-mail and describe what we can help you with.
            </p>
          </div>
          <Form
            fields={fields}
            onSubmit={handleSubmit}
            submitLabel="Send message"
          />
        </div>
      </div>
    </Section>
  );
}
