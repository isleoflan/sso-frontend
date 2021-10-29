SsoFrontend
===========
![Maintainer](https://img.shields.io/badge/maintainer-YourBrainEatsYou-blue)

This repository should be used in conjunction with
the [IOL SSO Server Repository](https://github.com/isleoflan/sso-server.git). It creates the UI and the logic to login
to the different IOL Applications.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.10.

# Prerequisites / Dependencies

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
provider section of the app.module.ts

```ts
import {MockAuthApiService} from './api/mock-auth-api.service';
import {MockRegisterApiService} from './api/mock-register-api.service';
import {MockResetApiService} from './api/mock-reset-api.service';

providers: [
  {provide: AbstractAuthApiService, useClass: MockAuthApiService},
  {provide: AbstractRegisterApiService, useClass: MockRegisterApiService},
  {provide: AbstractResetApiService, useClass: MockResetApiService},
]
```

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change
any of the source files.

# Frontend

The frontend consists of seven pages. The table below shows the available routes and their purpose.

## Accessible Routes

| Route                         | LRID     | GSID     | Hash | Description                                                                    |
| ----------------------------- | -------- | -------- | ---- | ------------------------------------------------------------------------------ |
| /request/:loginRequestId      | no       | no       | no   | Init the Login flow for a specific Application                                 |
| /login                        | no / yes | no       | no   | Show the login form. If LRID is set, show Appiacation informations             |
| /register                     | no       | no       | no   | Show the register form.                                                        |
| /reset-password               | no       | no       | no   | Show the password reset form                                                   |
| /set-password                 | no       | no       | yes  | Show the password set form                                                     |
| /continue                     | yes      | yes      | no   | Show information about the application and the currently logged in user. Display button to continue to the requested site. |
| /logout                       | no       | yes      | no   | Logs the current user out. (Removes the GSID)                                  |

| Short  | Description                      |
| ------ | -------------------------------- |
| LRID   | Login Request ID                 |
| GSID   | Global Session Id                |
| Hash   | Hash to reset the Users Password |
