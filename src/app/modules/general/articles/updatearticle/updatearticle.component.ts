import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/model/Article';
import { Categorie } from 'src/app/model/Categorie';
import { Fournisseur } from 'src/app/model/Fournisseur';
import { ArticleService } from 'src/app/service/articles/article.service';
import { CategoriesService } from 'src/app/service/categories/categories.service';
import { FournisseursService } from 'src/app/service/fournisseurs/fournisseurs.service';

@Component({
  selector: 'app-updatearticle',
  templateUrl: './updatearticle.component.html',
  styleUrls: ['./updatearticle.component.scss']
})
export class UpdatearticleComponent implements OnInit{

  currentArticle = new Article();
  categories!: Categorie[];
  updateIdCat!: any;
  newCategorie!: Categorie;
  fournisseurs!: Fournisseur[];
  updateIdFour!: any;
  newFournisseur!: Fournisseur;

  constructor(private articleService: ArticleService, private activetedRoute: ActivatedRoute, private router: Router, private categoriesService: CategoriesService, private fournisseurService: FournisseursService){
    //this.currentArticle = Article;
  }

  ngOnInit(): void {
    this.categoriesService.getAll().subscribe(categorie =>{
      this.categories = categorie.data;
    });

    this.fournisseurService.getAll().subscribe(fournisseur =>{
      this.fournisseurs = fournisseur.data;
    });

    this.articleService.find(this.articleService.articleId).subscribe(article =>{
      this.currentArticle = article.data;
      this.updateIdFour = this.currentArticle.fournisseur.id;
      this.updateIdCat = this.currentArticle.categorie.id;
    });

  }

  updateArticle(){
    this.categoriesService.find(this.updateIdCat).subscribe(categorie =>{
      this.currentArticle.categorie = categorie.data;
    });

    this.fournisseurService.find(this.updateIdFour).subscribe(fournisseur =>{
      this.currentArticle.fournisseur = fournisseur.data;
    });
    //this.currentArticle.categorie.id = this.updateIdCat;
    //this.currentArticle.fournisseur.id = this.updateIdFour;
    console.log("New Article ==>  ", this.currentArticle);
    this.articleService.update(this.currentArticle, this.currentArticle.id);
    //this.router.navigate(['articles']);
  }

}
