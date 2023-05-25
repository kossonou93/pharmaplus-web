import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/model/Article';
import { Fournisseur } from 'src/app/model/Fournisseur';
import { ArticleService } from 'src/app/service/articles/article.service';
import { FournisseursService } from 'src/app/service/articles/fournisseurs/fournisseurs.service';

@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.scss']
})
export class AddarticleComponent implements OnInit {

  newArticle = new Article();
  newIdCat!: string;
  fournisseurs!: Fournisseur[];
  newIdFour!: string;
  newFournisseur!: Fournisseur;


  constructor(private articleService: ArticleService, private router: Router, private fournisseurService: FournisseursService) {
    this.fournisseurs = [];
  }

  ngOnInit(): void{
    this.fournisseurService.all().subscribe(fournisseur =>{
      this.fournisseurs = fournisseur.data;
    });
  }

  addArticle(){
    //this.newArticle.categorie.id = this.newIdCat;
    //this.newArticle.fournisseur.id = this.newIdFour;
    this.articleService.add(this.newArticle).subscribe(article => {
      console.log(article);
      this.router.navigate(['articles']);
    });
  }

}
