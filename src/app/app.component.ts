import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './service/users/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'pharmaplus-web';

  constructor(private router: Router, public loginService: LoginService){

  }

  ngOnInit(): void {
    this.loginService.loadToken();
    if (this.loginService.getToken() == null ||
      this.loginService.isTokenExpired())
      this.router.navigate(['/login']);

  }
}
