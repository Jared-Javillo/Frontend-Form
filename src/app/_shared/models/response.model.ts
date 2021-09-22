export interface Response<T> {
  data?: T;
  errorCode: string;
  message: string;
}
