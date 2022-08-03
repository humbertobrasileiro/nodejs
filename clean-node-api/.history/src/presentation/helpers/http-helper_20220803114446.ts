import { MissingParamError } from '../errors/missing-param-error';

export const badRequest {
  return {
    statusCode: 400,
    body: new MissingParamError('name')
  }
} 