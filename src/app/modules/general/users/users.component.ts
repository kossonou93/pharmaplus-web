import { Component } from '@angular/core';
import { User } from 'src/app/model/User';
import { UsersService } from '../../../service/users/users.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  users : User[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>=new Subject<any>();
  selectedRowValues: string[] = [];

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
      setTimeout(()=>{
        $('#datatableUser').DataTable({
          ajax: {
            url:"http://localhost:8082/pharmaplus/user/all",
            dataSrc: "data"
          },
          columns:[
            {
              title: "Select",
              data: "id",
              render: function(data, type, full, meta) {
                return '<input type="checkbox" class="checkbox" value="' + full.id + '"/>';
              }
            },
            {
              title: "Id", data: "id"
              //, visible: false
            },
            {
              title: "Nom", data: "lastName"
            },
            {
              title: "Prenom", data: "firstName"
            },
            {
              title: "Email", data: "email"
            },
            {
              title: "Civi", data: "civi"
            },
            {
              title: "Fonction", data: "fonction"
            }
          ],
          pagingType: 'full_numbers',
          pageLength: 50,
          processing: true,
          lengthMenu : [5, 10, 25, 50, 100, 1000]
        });
      }, 1);
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
