import { Subject } from 'rxjs';
import { Component } from '@angular/core';
import { Entreprise } from 'src/app/model/Entreprise';
import { Router } from '@angular/router';
import { EntrepriseService } from 'src/app/service/clients/entreprises/entreprise.service';
import { ApiConfig } from 'src/app/config/ApiConfig';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.scss']
})
export class EntrepriseComponent {

  entreprises: Entreprise[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>=new Subject<any>();
  selectedRowValues: string[] = [];

  constructor(private router: Router, private entrepriseService: EntrepriseService){
    this.entreprises = [];
  }

  ngOnInit(): void {
      this.chargerEntreprises();
      const self = this;
      $('#datatableEntreprise').on('click', '.checkbox', function(){
        if(this.checked){
          const selectedRowValue: string[] = [];
          $(this).closest('tr').find('td').each(function(){
            selectedRowValue.push($(this).text());
          });
          self.selectedRowValues = selectedRowValue;
          console.log("selectedRowValues ==> ", selectedRowValue);
        } else {
          var index = this.selectedRows.indexOf($(this).val());
          if(index !== -1){
            this.selectedRows.splice(index, 1);
          }
        }
      });
  }

  chargerEntreprises(){
    this.entrepriseService.all().subscribe(entreprise => {
      console.log(entreprise);
      this.entreprises = entreprise.data;
      setTimeout(()=>{
        $('#datatableEntreprise').DataTable({
          ajax: {
            url:`${ApiConfig.entreprises}/all`,
            dataSrc: "data"
          },
          columns:[
            {
              title: "Checkbox",
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

}
