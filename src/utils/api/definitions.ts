type PreparedHeaders = Partial<{
  "Content-Type": string;
  Accept: string;
  Authorization: `Bearer ${string}`;
  "X-Coredata-Token": string;
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

export type TypedHeaders = RequestInit["headers"] & PreparedHeaders;

export type MethodWithBody = Extract<
  HTTPMethod,
  "POST" | "PUT" | "UPDATE" | "DELETE"
>;

export type MethodWithoutBody = Exclude<HTTPMethod, MethodWithBody>;

type MethodBodyCombination =
  | { method: MethodWithBody; body: RequestInit["body"] }
  | { method: MethodWithoutBody; body: undefined };

export type TypedRequestInit = RequestInit &
  MethodBodyCombination & { headers?: TypedHeaders };

export interface TypedResponse<T> extends Response {
  json(): Promise<T>;
}
