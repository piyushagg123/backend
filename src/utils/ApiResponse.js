class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
    //STATUS CODE : https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
  }
}
