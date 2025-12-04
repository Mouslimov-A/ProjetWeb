export enum ApiCodeResponse {
  TEST = 'api.result.test',

  // Security
  CREDENTIAL_DELETE_ERROR = 'api.security.credential-delete.error',
  CREDENTIAL_DELETE_SUCCESS = 'api.security.credential-delete.success',
  USER_NOT_FOUND = 'api.security.user-not-found',
  NO_TOKEN_FOUNDED = 'api.security.no-token-found',
  TOKEN_EXPIRED = 'api.security.token-expired',
  SIGNUP_ERROR = 'api.security.signup.error',
  SIGNUP_SUCCESS = 'api.security.signup.success',
  USER_ALREADY_EXIST = 'api.security.user-already-exist',
  TOKEN_GEN_ERROR = 'api.security.token-generation-error',
  USERNAME_IS_NOT_EMPTY = 'api.signin-param-username-is-missing',
  PASSWORD_IS_NOT_EMPTY = 'api.signin-param-password-is-missing',

  // Validation
  PAYLOAD_IS_NOT_VALID = 'api.common.param-is-missing',

  // Common
  COMMON_SUCCESS = 'api.success.common',
}