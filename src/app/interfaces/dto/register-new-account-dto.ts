import {Gender} from '../enum/gender';

export interface RegisterNewAccountDto {
  loginRequestId: string;

  username: string;
  password: string;

  gender: Gender;
  forename: string;
  lastname: string;

  address: string;
  zipCode: string;
  city: string;

  birthDate: Date;
}
