import {Gender} from '../enum/gender';

export interface RegisterNewAccountDto {
  loginRequestId: string | null;

  username: string;
  password: string;

  gender: Gender;
  forename: string;
  lastname: string;

  address: string;
  zipCode: number;
  city: string;

  birthDate: Date;

  email: string;
  phone: string;
}
