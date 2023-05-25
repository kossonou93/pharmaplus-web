import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ApiConfig } from 'src/app/config/ApiConfig';
import { Fournisseur } from 'src/app/model/Fournisseur';
import { FournisseursService } from 'src/app/service/articles/fournisseurs/fournisseurs.service';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.scss']
})
export class FournisseurComponent implements OnInit{

  fournisseurs: Fournisseur[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>=new Subject<any>();
  selectedRowValues: string[] = [];

  constructor(private router: Router, private fournisseurService: FournisseursService){
    this.fournisseurs = [];
  }

  ngOnInit(): void {
      this.chargerFournisseurs();
      const self = this;
      $('#datatableFournisseur').on('click', '.checkbox', function(){
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

  chargerFournisseurs(){
    this.fournisseurService.all().subscribe(fournisseur => {
      console.log(fournisseur);
      this.fournisseurs = fournisseur.data;
      setTimeout(()=>{
        $('#datatableFournisseur').DataTable({
          ajax: {
            url:`${ApiConfig.fournisseurs}/all`,
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
              title: "Identifiant", data: "identifiant"
            },
            {
              title: "Code", data: "code"
            },
            {
              title: "Code Cip", data: "codeCip"
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
