import { ApiCodeResponse, ApiException } from '@common/api';
import { HttpException } from '@nestjs/common';

export class TestException extends HttpException {
  constructor() {
    super(ApiCodeResponse.TEST, 200);
  }
}
