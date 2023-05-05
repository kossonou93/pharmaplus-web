import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpService } from 'src/app/service/users/signup.service';
//import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  newUser = new User();

  constructor(private signupService: SignUpService, private router: Router) {
  }

  addUser(){
    this.signupService.registerUser(this.newUser)
    .subscribe(user => {
      console.log(user);
      this.router.navigate(['']);
    });
  }


}
