import { LoginService } from './../../../service/users/login.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service/users/users.service';
import { User } from 'src/app/model/User';
import { FormBuilder, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user = new User();
  err:number = 0;
  erreur = 0;

  constructor(private router: Router, private usersService: UsersService, private loginService: LoginService){
    //this.user = null;
  }

  ngOnInit(): void{
    
  }

  onLoggedin() {
    this.loginService.login(this.user).subscribe({
      next: (data) => {
        let jwToken = data.body?.data.token!;
        let user = data.body?.data.user!;
        this.loginService.saveToken(jwToken, user);
        this.router.navigate(['/']);
      },
      error: (err: any) => {
        this.err = 1;
      }
    });
  }


}
