import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Categorie } from 'src/app/model/Categorie';
import { CategoriesService } from 'src/app/service/categories/categories.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {

  categories: Categorie[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>=new Subject<any>();
  selectedRowValues: string[] = [];

  constructor(private categoriesService: CategoriesService, private router: Router){
    this.categories = [];
  }

  ngOnInit(): void {
    this.chargerCategories();
    const self = this;
    $('#datatableCategorie').on('click', '.checkbox', function(){
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

  chargerCategories(){
    this.categoriesService.getAll().subscribe(categorie => {
      console.log(this.categories);
      this.categories = categorie.data;
      setTimeout(()=>{
        $('#datatableCategorie').DataTable({
          ajax: {
            url:"http://localhost:8082/pharmaplus/categorie/all",
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
              title: "Name", data: "name"
            }
          ],
          pagingType: 'full_numbers',
          pageLength: 5,
          processing: true,
          lengthMenu : [5, 10, 25]
        });
      }, 1);
    });
  }

}
