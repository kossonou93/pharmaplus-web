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
import { DataTablesModule } from 'angular-datatables';
import { AddarticleComponent } from './modules/general/articles/addarticle/addarticle.component';
import { UpdatearticleComponent } from './modules/general/articles/updatearticle/updatearticle.component';
import { FournisseurComponent } from './modules/general/fournisseurs/fournisseur/fournisseur.component';
import { AddfournisseurComponent } from './modules/general/fournisseurs/addfournisseur/addfournisseur.component';
import { UpdatefournisseurComponent } from './modules/general/fournisseurs/updatefournisseur/updatefournisseur.component';
import { NavComponent } from './parts/nav/nav.component';
import { AssuranceComponent } from './modules/general/client/assurance/assurance.component';
import { ParticulierComponent } from './modules/general/client/particulier/particulier.component';
import { EntrepriseComponent } from './modules/general/client/entreprise/entreprise.component';
import { ClientComponent } from './modules/general/client/client.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { FamilleComponent } from './modules/general/articles/familles/famille/famille.component';
import { PrincipeActifComponent } from './modules/general/articles/principe-actifs/principe-actif/principe-actif.component';
import { CodeGeographiqueComponent } from './modules/general/articles/code-geographiques/code-geographique/code-geographique.component';
import { VenteDirecteComponent } from './modules/pharmaplus/ventes/vente-directe/vente-directe/vente-directe.component';
import { CommandeArticleComponent } from './modules/pharmaplus/commandes/commande-article/commande-article/commande-article.component';
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
    AddarticleComponent,
    UpdatearticleComponent,
    FournisseurComponent,
    AddfournisseurComponent,
    UpdatefournisseurComponent,
    NavComponent,
    AssuranceComponent,
    ParticulierComponent,
    EntrepriseComponent,
    ClientComponent,
    DashboardComponent,
    FamilleComponent,
    PrincipeActifComponent,
    CodeGeographiqueComponent,
    VenteDirecteComponent,
    CommandeArticleComponent
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
