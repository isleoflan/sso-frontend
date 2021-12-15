import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {first, tap} from 'rxjs/operators';
import {AbstractResetApiService} from '../../api/abstract-reset-api.service';
import {ExecuteResetDto} from '../../interfaces/dto/execute-reset-dto';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss']
})
export class SetPasswordComponent implements OnInit {

  setPasswordForm: FormGroup = new FormGroup({});

  constructor(
    private resetApiService: AbstractResetApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.setPasswordForm = new FormGroup({
      password: new FormControl('', [Validators.required]),
      passwordConfirm: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(): void {
    const executeResetDto: ExecuteResetDto = {
      resetId: 'asdf', // ToDo: to be defined
      password: this.setPasswordForm.value.password,
    }
    this.resetApiService.executeReset(executeResetDto).pipe(
      first(),
      tap(() => this.router.navigate(['success'], {relativeTo: this.activatedRoute})),
    ).subscribe();
  }

}
