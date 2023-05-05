import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/general/home/home.component';
import { LoginComponent } from './modules/general/login/login.component';
import { SignupComponent } from './modules/general/signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './modules/general/users/users.component';
import { HeadComponent } from './parts/head/head.component';
import { NavbarComponent } from './parts/navbar/navbar.component';
import { FooterComponent } from './parts/footer/footer.component';
import { ArticleComponent } from './modules/general/articles/article/article.component';
import { PaiementComponent } from './modules/general/paiement/paiement.component';
import { DataTablesModule } from 'angular-datatables';
import { AddarticleComponent } from './modules/general/articles/addarticle/addarticle.component';
import { UpdatearticleComponent } from './modules/general/articles/updatearticle/updatearticle.component';
import { AddcategorieComponent } from './modules/general/categories/addcategorie/addcategorie.component';
import { UpdatecategorieComponent } from './modules/general/categories/updatecategorie/updatecategorie.component';
import { CategorieComponent } from './modules/general/categories/categorie/categorie.component';
import { FournisseurComponent } from './modules/general/fournisseurs/fournisseur/fournisseur.component';
import { AddfournisseurComponent } from './modules/general/fournisseurs/addfournisseur/addfournisseur.component';
import { UpdatefournisseurComponent } from './modules/general/fournisseurs/updatefournisseur/updatefournisseur.component';
import { NavComponent } from './parts/nav/nav.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    UsersComponent,
    HeadComponent,
    NavbarComponent,
    FooterComponent,
    ArticleComponent,
    PaiementComponent,
    AddarticleComponent,
    UpdatearticleComponent,
    AddcategorieComponent,
    UpdatecategorieComponent,
    CategorieComponent,
    FournisseurComponent,
    AddfournisseurComponent,
    UpdatefournisseurComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
