
// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** Query list GET /api/v1/parameters */
export async function fetchParameter(params: API.PaginationParam, options?: { [key: string]: any }) {
  return request<API.ResponseResult<API.Parameter[]>>('/api/v1/parameters', {
    method: 'GET',
    params: {
      current: '1',
      pageSize: '10',
      ...params,
    },
    ...(options || {}),
  });
}

/** Create record POST /api/v1/parameters */
export async function addParameter(body: API.Parameter, options?: { [key: string]: any }) {
  return request<API.ResponseResult<API.Parameter>>('/api/v1/parameters', {
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** Get record by ID GET /api/v1/parameters/${id} */
export async function getParameter(id: string, options?: { [key: string]: any }) {
  return request<API.ResponseResult<API.Parameter>>(`/api/v1/parameters/${id}`, {
    method: 'GET',
    ...(options || {}),
  });
}

/** Update record by ID PUT /api/v1/parameters/${id} */
export async function updateParameter(id: string, body: API.Parameter, options?: { [key: string]: any }) {
  return request<API.ResponseResult<any>>(`/api/v1/parameters/${id}`, {
    method: 'PUT',
    data: body,
    ...(options || {}),
  });
}

/** Delete record by ID DELETE /api/v1/parameters/${id} */
export async function delParameter(id: string, options?: { [key: string]: any }) {
  return request<API.ResponseResult<any>>(`/api/v1/parameters/${id}`, {
    method: 'DELETE',
    ...(options || {}),
  });
}
