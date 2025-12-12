import { SignInPayload } from './sign-in.payload';

export interface SignUpPayload extends SignInPayload{
  mail: string;
}
