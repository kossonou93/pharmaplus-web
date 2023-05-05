import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/model/Article';
import { Categorie } from 'src/app/model/Categorie';
import { Fournisseur } from 'src/app/model/Fournisseur';
import { ArticleService } from 'src/app/service/articles/article.service';
import { CategoriesService } from 'src/app/service/categories/categories.service';
import { FournisseursService } from 'src/app/service/fournisseurs/fournisseurs.service';

@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.scss']
})
export class AddarticleComponent implements OnInit {

  newArticle = new Article();
  categories!: Categorie[];
  newIdCat!: string;
  newCategorie!: Categorie;
  fournisseurs!: Fournisseur[];
  newIdFour!: string;
  newFournisseur!: Fournisseur;


  constructor(private categoriesService: CategoriesService, private articleService: ArticleService, private router: Router, private fournisseurService: FournisseursService) {
    this.categories = [];
    this.fournisseurs = [];
  }

  ngOnInit(): void{
    this.categoriesService.getAll().subscribe(categorie =>{
      this.categories = categorie.data;
    });

    this.fournisseurService.getAll().subscribe(fournisseur =>{
      this.fournisseurs = fournisseur.data;
    });
  }

  addArticle(){
    this.newArticle.categorie.id = this.newIdCat;
    this.newArticle.fournisseur.id = this.newIdFour;
    this.articleService.add(this.newArticle).subscribe(article => {
      console.log(article);
      this.router.navigate(['articles']);
    });
  }

}
