import fetch, { RequestInit, Response } from 'node-fetch';
import { getAPIAccessToken } from './getAPIAccessToken';

export interface RequestOptions extends RequestInit {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
}

export const callApi = async (
  url: string,
  options: RequestOptions = {},
  parentRequest?: RequestInit
): Promise<Response> => {
  const accessToken = (await getAPIAccessToken()) || '';

  const requestOptions: RequestOptions = {
    method: 'GET',
    ...options,
  };

  let headers: HeadersInit & {
    Authorization?: string;
    Accept?: string;
    'Content-Type'?: string;
  };

  if (parentRequest) {
    headers = {
      Authorization: accessToken,
      ...parentRequest.headers,
      ...requestOptions.headers,
    };
  } else {
    headers = {
      Authorization: accessToken,
      ...requestOptions.headers,
    };
  }

  if (!headers.Accept) {
    headers.Accept = 'application/json';
  }

  if (!headers['Content-Type']) {
    headers['Content-Type'] = 'application/json';
  }

  requestOptions.headers = headers;

  const result = await fetch(url, requestOptions);

  return result;
};
