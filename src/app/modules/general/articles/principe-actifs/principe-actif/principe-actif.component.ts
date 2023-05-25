import { Subject } from 'rxjs';
import { Component } from '@angular/core';
import { PrincipeActif } from 'src/app/model/PrincipeActif';
import { Router } from '@angular/router';
import { PrincipeActifService } from 'src/app/service/articles/principe-actif/principe-actif.service';
import { ApiConfig } from 'src/app/config/ApiConfig';

@Component({
  selector: 'app-principe-actif',
  templateUrl: './principe-actif.component.html',
  styleUrls: ['./principe-actif.component.scss']
})
export class PrincipeActifComponent {

  principeActifs: PrincipeActif[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>=new Subject<any>();
  selectedRowValues: string[] = [];

  constructor(private router: Router, private principeActifService: PrincipeActifService){
    this.principeActifs = [];
  }

  ngOnInit(): void {
      this.chargerPrincipeActifs();
      const self = this;
      $('#datatablePrincipeActif').on('click', '.checkbox', function(){
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

  chargerPrincipeActifs(){
    this.principeActifService.all().subscribe(principeActif => {
      console.log(principeActif);
      this.principeActifs = principeActif.data;
      setTimeout(()=>{
        $('#datatablePrincipeActif').DataTable({
          ajax: {
            url:`${ApiConfig.principe_actifs}/all`,
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
              title: "Libelle", data: "libelle"
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
