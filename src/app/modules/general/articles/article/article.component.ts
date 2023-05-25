import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras  } from '@angular/router';
import { Subject } from 'rxjs';
import { Article } from 'src/app/model/Article';
import { ArticleService } from 'src/app/service/articles/article.service';
import { UpdatearticleComponent } from '../updatearticle/updatearticle.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit{

  articles: Article[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>=new Subject<any>();
  selectedRowValues: string[] = [];
  newArticle!: Article;
  //table = $('#datatableArticle').DataTable();

  constructor(private articleService: ArticleService, private router: Router) {
    this.articles = [];
  }

  ngOnInit(): void {
    this.chargerArticles();
    const self = this;
    $('#datatableArticle').on('click', '.checkbox', function(){
      if(this.checked){
        const selectedRowValue: string[] = [];
        $(this).closest('tr').find('td').each(function(){
          selectedRowValue.push($(this).text());
        });
        self.selectedRowValues = selectedRowValue;
        //console.log("selectedRowValues ==> ", selectedRowValue);
      } else {
        var index = this.selectedRows.indexOf($(this).val());
        if(index !== -1){
          this.selectedRows.splice(index, 1);
        }
      }
    });
  }

  chargerArticles() {
    this.articleService.all().subscribe(article => {
      console.log(article);
      this.articles = article.data;
      setTimeout(()=>{
        $('#datatableArticle').DataTable({
          ajax: {
            url:"http://localhost:8082/pharmaplus/article/undelete/all",
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
              title: "Désignation", data: "designation"
            },
            {
              title: "Code 1", data: "code1"
            },
            {
              title: "Code 2", data: "code2"
            },
            {
              title: "Prix Achat HT Entier", data: "prixAchatHtEntier"
            },
            {
              title: "Prix Achat TTC Entier", data: "prixAchatTtcEntier"
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

  deleteArticle(){
    this.articleService.softDelete(this.selectedRowValues[1]).subscribe(article =>{
      console.log(article);
      $('#datatableArticle').DataTable().destroy();
      this.chargerArticles();
    });
  }

 updateArticle(){
      this.articleService.articleId = this.selectedRowValues[1];
      this.router.navigate(['update-article']);
  };


}
