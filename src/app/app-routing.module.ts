import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/general/home/home.component';
import { LoginComponent } from './modules/general/login/login.component';
import { SignupComponent } from './modules/general/signup/signup.component';
import { UsersComponent } from './modules/general/users/users.component';
import { ArticleComponent } from './modules/general/articles/article/article.component';
import { AddarticleComponent } from './modules/general/articles/addarticle/addarticle.component';
import { UpdatearticleComponent } from './modules/general/articles/updatearticle/updatearticle.component';
import { AddfournisseurComponent } from './modules/general/fournisseurs/addfournisseur/addfournisseur.component';
import { UpdatefournisseurComponent } from './modules/general/fournisseurs/updatefournisseur/updatefournisseur.component';
import { AddcategorieComponent } from './modules/general/categories/addcategorie/addcategorie.component';
import { FournisseurComponent } from './modules/general/fournisseurs/fournisseur/fournisseur.component';
import { UpdatecategorieComponent } from './modules/general/categories/updatecategorie/updatecategorie.component';
import { CategorieComponent } from './modules/general/categories/categorie/categorie.component';
import { ClientComponent } from './modules/general/client/client.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'users', component: UsersComponent},
  { path: 'add-article', component: AddarticleComponent},
  { path: 'update-article', component: UpdatearticleComponent},
  { path: 'articles', component: ArticleComponent},
  { path: 'add-fournisseur', component: AddfournisseurComponent},
  { path: 'update-fournisseur', component: UpdatefournisseurComponent},
  { path: 'fournisseurs', component: FournisseurComponent},
  { path: 'add-categorie', component: AddcategorieComponent},
  { path: 'update-categorie', component: UpdatecategorieComponent},
  { path: 'categories', component: CategorieComponent},
  { path: 'clients', component: ClientComponent}
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
