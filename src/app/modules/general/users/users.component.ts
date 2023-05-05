import { Component } from '@angular/core';
import { User } from 'src/app/model/User';
import { UsersService } from '../../../service/users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  users : User[];

  constructor(private userService: UsersService, private router: Router) {
    this.users = [];
  }

  ngOnInit(): void {
    this.chargerUsers();
  }

  chargerUsers(){
    this.userService.getUsers().subscribe(user => {
      console.log(user);
      this.users = user.data;
    });
  }

  supprimerUsers(u: User){
    let conf = confirm('Etes-vous sur ?');
    if (conf) {
      this.userService.deleteUser("" + u.id).subscribe(() => {
        console.log("user deleted");
        this.chargerUsers();
        this.router.navigate(['']);
      });
    }
  }
}
