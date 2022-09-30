export type IApiResponse<T> = IApiSuccessResponse<T> | IApiErrorResponse;

export interface IApiSuccessResponse<T> {
  code: 0;
  data: T;
}

export interface IApiErrorResponse {
  code: number;
  data: string;
}
