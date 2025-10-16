import JWT, { SupportedAlgorithms } from "expo-jwt";
import {
  MethodWithBody,
  MethodWithoutBody,
  TypedHeaders,
  TypedRequestInit,
  TypedResponse,
} from "./definitions";

declare function fetch<ResponseType = any>(
  input: string | URL | globalThis.Request,
  init?: TypedRequestInit
): Promise<TypedResponse<ResponseType>>;

interface ApiResponse {
  success: boolean;
  result: any;
  status: number;
}

interface ApiError {
  status: string;
  details?: any;
}

const generateToken = async (url: string) => {
  const payload = {
    route: new URL(url).pathname,
    stoken: `${import.meta.env.VITE_APP_API_SECRET}`,
    ttoken: `${Date.now()}`,
  };
  const token = JWT.encode(
    {
      sub: JSON.stringify(payload),
      iss: "Coredata",
      exp: Math.floor(Date.now() / 1000) + 5 * 60, // 5 minutes expiration
    },
    `${import.meta.env.VITE_APP_API_SECRET}`,
    {
      alg: SupportedAlgorithms.HS256,
    }
  );

  return token;
};

const apiService = {
  async send(
    method: MethodWithBody | MethodWithoutBody,
    url: string,
    body?: string
  ): Promise<ApiResponse> {
    const token = await generateToken(url);
    const headers: TypedHeaders = {
      "Content-type": "application/json",
      "X-Coredata-Token": `${token}`,
    };

    const options = {
      method,
      mode: "cors",
      cache: "no-cache",
      headers,
      body,
    } as TypedRequestInit;

    try {
      const response = await fetch<ApiResponse>(url, options);

      if (!response.ok) {
        const errorMessage = await getErrorMessage(response);

        return {
          success: false,
          result: errorMessage,
          status: response.status,
        };
      }

      const result = response.status !== 204 ? await response.json() : null;

      return { success: true, result, status: response.status };
    } catch (error) {
      const errorMessage = getApiErrorMessage(error);
      return {
        success: false,
        result: `Api error: ${errorMessage}`,
        status: 500,
      };
    }
  },
};

const getErrorMessage = async (response: Response): Promise<string> => {
  const status = response.status;

  try {
    const error: ApiError = await response.json();
    let errorMessage = "";

    if (status === 401) {
      errorMessage = `Authentication error ${status}: ${
        error.status ?? "Credentials incorrect"
      }`;
    } else if (status === 403) {
      errorMessage = `Authorisation error: No permissions for the resource`;
    } else if (status === 500) {
      errorMessage = `Service internal error`;
    } else if (status === 502) {
      errorMessage = `Service unavailable`;
    } else {
      errorMessage = `Status ${status}: Request incorrect`;
    }
    console.error("Api error: " + error.status, error.details);

    return errorMessage;
  } catch (error) {
    console.error("Api response parse error:", error);
    return `Api error ${status}: Request incorrect`;
  }
};

const getApiErrorMessage = (error: any): string => {
  let message = "server error";
  let errorMessage = "";

  if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  }
  console.error("Api error: " + errorMessage);

  if (errorMessage.length && errorMessage.indexOf("Failed to fetch") !== -1) {
    message = "resource unavailable";
  }
  return message;
};

const sendEmail = async (
  name: string,
  email: string,
  subject: string,
  message: string
): Promise<ApiResponse> => {
  const url = `${import.meta.env.VITE_APP_API_URL}/email/send`;
  const body = JSON.stringify({
    recipient: `${import.meta.env.VITE_APP_API_RECIPIENT}`,
    subject: `Message from ${name} ${email} via Coredata website`,
    message: `Name: ${name}\nEmail: ${email}\n\nSubject: ${subject}\n\n${message}`,
  });

  return apiService.send("POST", url, body);
};

export { sendEmail };
export type { ApiResponse };
