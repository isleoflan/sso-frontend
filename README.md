# SsoFrontend

## Accessible Routes

| Short  | Description                      |
| ------ | -------------------------------- |
| LRID   | Login Request ID                 |
| GSID   | Global Session Id                |
| Hash   | Hash to reset the Users Password |

| Route                         | LRID     | GSID     | Hash | Description                                                                    |
| ----------------------------- | -------- | -------- | ---- | ------------------------------------------------------------------------------ |
| /request/:loginRequestId      | no       | no       | no   | Init the Login flow for a specific Application                                 |
| /login                        | no / yes | no       | no   | Show the login form. If LRID is set, show Appiacation informations             |
| /register                     | no       | no       | no   | Show the register form.                                                        |
| /reset-password               | no       | no       | no   | Show the password reset form                                                   |
| /set-password                 | no       | no       | yes  | Show the password set form                                                     |
| /continue                     | yes      | yes      | no   | Show information about the application and the currently logged in user. Display button to continue to the requested site. |

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change
any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also
use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a
package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out
the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
