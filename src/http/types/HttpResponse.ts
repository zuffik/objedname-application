export interface HttpResponse<T> {
  Status: string; // OK
  Message: string; // OK
  Data: T;
}
