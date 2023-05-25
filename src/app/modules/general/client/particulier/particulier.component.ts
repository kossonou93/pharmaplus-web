import { Subject } from 'rxjs';
import { Component } from '@angular/core';
import { Particulier } from 'src/app/model/Particulier';
import { Router } from '@angular/router';
import { ParticulierService } from 'src/app/service/clients/particuliers/particulier.service';
import { ApiConfig } from 'src/app/config/ApiConfig';

@Component({
  selector: 'app-particulier',
  templateUrl: './particulier.component.html',
  styleUrls: ['./particulier.component.scss']
})
export class ParticulierComponent {

  particuliers: Particulier[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>=new Subject<any>();
  selectedRowValues: string[] = [];

  constructor(private router: Router, private particulierService: ParticulierService){
    this.particuliers = [];
  }

  ngOnInit(): void {
      this.chargerParticuliers();
      const self = this;
      $('#datatableParticulier').on('click', '.checkbox', function(){
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

  chargerParticuliers(){
    this.particulierService.all().subscribe(particulier => {
      console.log(particulier);
      this.particuliers = particulier.data;
      setTimeout(()=>{
        $('#datatableParticulier').DataTable({
          ajax: {
            url:`${ApiConfig.particuliers}/all`,
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
            },
            {
              title: "Prénom", data: "prenom"
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
