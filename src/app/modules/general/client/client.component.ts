import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/service/clients/client.service';
import { Router } from '@angular/router';
import { Client } from 'src/app/model/Client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit{

  clients: Client[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>=new Subject<any>();
  selectedRowValues: string[] = [];

  constructor(private clientService: ClientService, private router: Router){
    this.clients = [];
  }

  ngOnInit(): void {
    this.chargerClients();
  }

  chargerClients(){
    this.clientService.all().subscribe(client =>{
      this.clients = client.data;
      setTimeout(()=>{
        $('#datatableClient').DataTable({
          ajax: {
            url:"http://localhost:8083/pharmaplus/client/all",
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
              title: "Nom", data: "nom"
            },
            {
              title: "Prénom", data: "prenom"
            },
            {
              title: "User Créa", data: "userCrea"
            },
            {
              title: "Caution", data: "caution"
            },
            {
              title: "Catégorie", data: "categorie"
            }
          ],
          pagingType: 'full_numbers',
          pageLength: 50,
          processing: true,
          lengthMenu : [5, 10, 25, 50, 100, 1000],
          scrollY: 300,
          scrollCollapse: true,
          paging: true
        });
      }, 1);
    });
  }

}
