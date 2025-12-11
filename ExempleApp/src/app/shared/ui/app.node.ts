export enum AppNode {
  AUTHENTICATED = 'dashboard',
  PUBLIC = 'public',
  REDIRECT_TO_PUBLIC = AppNode.PUBLIC,
  REDIRECT_TO_AUTHENTICATED = AppNode.AUTHENTICATED,
  MEMBER = 'member',
  DETAIL = 'detail/:id',
  SIGN_IN = 'sign-in',
  FALL_BACK = '**'
}
