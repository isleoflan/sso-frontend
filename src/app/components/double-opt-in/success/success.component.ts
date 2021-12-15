import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

  redirectUrl: string = atob(this.activatedRoute.snapshot.paramMap.get('base64redirectUrl')!);

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {

  }

  onContinue() {
    this.router.navigate(['/redirect', {externalUrl: this.redirectUrl}])
  }

}
