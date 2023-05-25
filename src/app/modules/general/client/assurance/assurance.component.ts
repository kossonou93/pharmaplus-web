import { Subject } from 'rxjs';
import { Component } from '@angular/core';
import { Assurance } from 'src/app/model/Assurance';
import { Router } from '@angular/router';
import { AssuranceService } from 'src/app/service/clients/assurances/assurance.service';
import { ApiConfig } from 'src/app/config/ApiConfig';

@Component({
  selector: 'app-assurance',
  templateUrl: './assurance.component.html',
  styleUrls: ['./assurance.component.scss']
})
export class AssuranceComponent {

  assurances: Assurance[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>=new Subject<any>();
  selectedRowValues: string[] = [];

  constructor(private router: Router, private assuranceService: AssuranceService){
    this.assurances = [];
  }

  ngOnInit(): void {
      this.chargerAssurances();
      const self = this;
      $('#datatableAssurance').on('click', '.checkbox', function(){
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

  chargerAssurances(){
    this.assuranceService.all().subscribe(assurance => {
      console.log(assurance);
      this.assurances = assurance.data;
      setTimeout(()=>{
        $('#datatableAssurance').DataTable({
          ajax: {
            url:`${ApiConfig.assurances}/all`,
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
