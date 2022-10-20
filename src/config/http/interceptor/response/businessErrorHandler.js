import ServiceError from '../../../error/ServiceError';

export default function businessErrorHandler(response) {
  // ContentType为application/json的场合
  if (response && response.headers
    && response.headers['content-type'].indexOf('application/json') !== -1) {
    const {
      code, message, success,
    } = response.data;
    // when got business exception
    if (typeof success === 'boolean' && !success) {
      throw new ServiceError(code, message, null, null);
    }
  }
  return response;
}
