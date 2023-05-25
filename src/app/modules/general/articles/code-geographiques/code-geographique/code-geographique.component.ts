import { Subject } from 'rxjs';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiConfig } from 'src/app/config/ApiConfig';
import { CodeGeographique } from 'src/app/model/CodeGeographique';
import { CodeGeographiqueService } from 'src/app/service/articles/code-geographique/code-geographique.service';

@Component({
  selector: 'app-code-geographique',
  templateUrl: './code-geographique.component.html',
  styleUrls: ['./code-geographique.component.scss']
})
export class CodeGeographiqueComponent {

  codeGeographiques: CodeGeographique[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>=new Subject<any>();
  selectedRowValues: string[] = [];

  constructor(private router: Router, private codeGeographiqueService: CodeGeographiqueService){
    this.codeGeographiques = [];
  }

  ngOnInit(): void {
      this.chargerCodeGeographiques();
      const self = this;
      $('#datatableCodeGeographique').on('click', '.checkbox', function(){
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

  chargerCodeGeographiques(){
    this.codeGeographiqueService.all().subscribe(codeGeographique => {
      console.log(codeGeographique);
      this.codeGeographiques = codeGeographique.data;
      setTimeout(()=>{
        $('#datatableCodeGeographique').DataTable({
          ajax: {
            url:`${ApiConfig.code_geographiques}/all`,
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
