/* eslint-disable @typescript-eslint/no-explicit-any */
import JWT, { SupportedAlgorithms } from "expo-jwt";

type TypedHeaders = RequestInit["headers"] & PreparedHeaders;

type PreparedHeaders = Partial<{
  "Content-Type": string;
  Accept: string;
  Authorization: `Bearer ${string}`;
}>;

type HTTPMethod =
  | "CONNECT"
  | "HEAD"
  | "OPTIONS"
  | "GET"
  | "POST"
  | "PUT"
  | "UPDATE"
  | "DELETE";
type WithBody = Extract<HTTPMethod, "POST" | "PUT" | "UPDATE" | "DELETE">;
type NoBody = Exclude<HTTPMethod, WithBody>;
type MethodBodyCombination =
  | { method?: WithBody; body?: RequestInit["body"] }
  | { method?: NoBody; body?: undefined };
type TypedRequestInit = RequestInit &
  MethodBodyCombination & { headers?: TypedHeaders };

interface TypedResponse<T> extends Response {
  json(): Promise<T>;
}

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
  message: string;
  statusCode: number;
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
    method: WithBody | NoBody,
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
        console.error(errorMessage);

        return {
          success: false,
          result: errorMessage,
          status: response.status,
        };
      }

      const result = response.status !== 204 ? await response.json() : null;

      return { success: true, result, status: response.status };
    } catch (error) {
      console.error("Api error:", error);
      return { success: false, result: `Api error: ${error}`, status: 500 };
    }
  },
};

const getErrorMessage = async (response: Response): Promise<string> => {
  const status = response.status;

  try {
    const result: ApiError = await response.json();
    let errorMessage = "";

    if (status === 401) {
      errorMessage = `Authentication error ${status}: ${
        result.message ?? "Credentials incorrect"
      }`;
    } else if (status === 403) {
      errorMessage = `Authorisation error ${status}: No permissions for the resource`;
    } else if (status === 502) {
      errorMessage = `Gateway error ${status}: Service unavailable`;
    } else {
      errorMessage = `Api error ${status}: Request incorrect`;
    }
    return errorMessage;
  } catch (error) {
    console.error("Api error message parse error:", error);
    return `Api error ${status}: Request incorrect`;
  }
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
    message: `Name: ${name}\nEmail: ${email}\n\nSubject: ${subject}\nMessage: ${message}`,
  });

  return apiService.send("POST", url, body);
};

export { sendEmail };
export type { ApiResponse };
