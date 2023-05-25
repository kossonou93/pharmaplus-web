import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ApiConfig } from 'src/app/config/ApiConfig';
import { Famille } from 'src/app/model/Famille';
import { FamilleService } from 'src/app/service/articles/famille/famille.service';

@Component({
  selector: 'app-famille',
  templateUrl: './famille.component.html',
  styleUrls: ['./famille.component.scss']
})
export class FamilleComponent implements OnInit{

  familles: Famille[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>=new Subject<any>();
  selectedRowValues: string[] = [];

  constructor(private router: Router, private familleService: FamilleService){
    this.familles = [];
  }

  ngOnInit(): void {
      this.chargerFamilles();
      const self = this;
      $('#datatableFamille').on('click', '.checkbox', function(){
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

  chargerFamilles(){
    this.familleService.all().subscribe(famille => {
      console.log(famille);
      this.familles = famille.data;
      setTimeout(()=>{
        $('#datatableFamille').DataTable({
          ajax: {
            url:`${ApiConfig.familles}/all`,
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
