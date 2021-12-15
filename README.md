SsoFrontend
===========
![Maintainer](https://img.shields.io/badge/maintainer-YourBrainEatsYou-blue)

This repository should be used in conjunction with
the [IOL SSO Server Repository](https://github.com/isleoflan/sso-server.git). It creates the UI and the logic to login
to the different IOL Applications.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.10.

## Development

Things that have to be installed on your development environment.

| Product     | Version | Resources                                                     |
| ----------- | ------- | ------------------------------------------------------------- |
| Node.js     | ^14.x.x | https://nodejs.org/en/                                        |
| Angular CLI | ^12.x.x | https://angular.io/guide/setup-local#install-the-angular-cli  |

### Frameworks used

- [Angular v12](https://v12.angular.io/docs)
- [NgRx](https://v12.ngrx.io/docs)

### API Mocking

For development purposes, every API Endpoint is mocked. To enable the mocking API, add the following code to the
provider section of the app.module.ts.

```ts
import {AbstractAuthApiService} from './api/abstract-auth-api.service';
import {AbstractRegisterApiService} from './api/abstract-register-api.service';
import {AbstractResetApiService} from './api/abstract-reset-api.service';

import {MockAuthApiService} from './api/mock-auth-api.service';
import {MockRegisterApiService} from './api/mock-register-api.service';
import {MockResetApiService} from './api/mock-reset-api.service';

providers: [
  // ...
  {provide: AbstractAuthApiService, useClass: MockAuthApiService},
  {provide: AbstractRegisterApiService, useClass: MockRegisterApiService},
  {provide: AbstractResetApiService, useClass: MockResetApiService},
]
```

To be complete, here are the live ApiServices:

```ts
import {AbstractAuthApiService} from './api/abstract-auth-api.service';
import {AbstractRegisterApiService} from './api/abstract-register-api.service';
import {AbstractResetApiService} from './api/abstract-reset-api.service';

import {AuthApiService} from './api/auth-api.service';
import {RegisterApiService} from './api/register-api.service';
import {ResetApiService} from './api/reset-api.service';

providers: [
  // ...
  {provide: AbstractAuthApiService, useClass: AuthApiService},
  {provide: AbstractRegisterApiService, useClass: RegisterApiService},
  {provide: AbstractResetApiService, useClass: ResetApiService},
]
```

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change
any of the source files.

## Frontend

The frontend consists of seven pages. The table below shows the available routes and their purpose.

### Accessible Routes

| Route                         | LRID     | GSID     | Hash | Referer | Description                                                                    |
| ----------------------------- | -------- | -------- | ---- | ------- | ------------------------------------------------------------------------------ |
| /request/:loginRequestId      | no       | no       | no   | no      | Init the Login flow for a specific Application                                 |
| /login                        | no / yes | no       | no   | no      | Show the login form. If LRID is set, show Appiacation informations             |
| /register                     | no / yes | no       | no   | no      | Show the register form.                                                        |
| /register/success             | no       | no       | no   | yes     | Register success page, referer has to be `/register`                           |
| /doi/verify/:hash             | no       | no       | yes  | no      | Show the DOI Button                                                            |
| /doi/success                  | no       | no       | no   | yes     | DOI success page, referer has to be `/doi/verify/*`                            |
| /reset-password               | no / yes | no       | no   | no      | Show the password reset form                                                   |
| /reset-password/success       | no       | no       | no   | yes     | Reset password success page, referer has to be `/reset-password`               |
| /set-password/:hash           | no       | no       | yes  | no      | Show the password set form                                                     |
| /set-password/success         | no       | no       | no   | yes     | Set new password success Page, referer has to be `/set-password`               |
| /continue                     | yes      | yes      | no   | no      | Show information about the application and the currently logged in user. Display button to continue to the requested site. |
| /logout                       | no       | yes      | no   | no      | Logs the current user out. (Removes the GSID)                                  |

| Short  | Description                      |
| ------ | -------------------------------- |
| LRID   | Login Request ID                 |
| GSID   | Global Session Id                |
| Hash   | Hash to reset the Users Password |
