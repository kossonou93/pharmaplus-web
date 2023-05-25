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
import { FournisseurComponent } from './modules/general/fournisseurs/fournisseur/fournisseur.component';
import { ClientComponent } from './modules/general/client/client.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { FamilleComponent } from './modules/general/articles/familles/famille/famille.component';
import { CodeGeographiqueComponent } from './modules/general/articles/code-geographiques/code-geographique/code-geographique.component';
import { PrincipeActifComponent } from './modules/general/articles/principe-actifs/principe-actif/principe-actif.component';
import { AssuranceComponent } from './modules/general/client/assurance/assurance.component';
import { EntrepriseComponent } from './modules/general/client/entreprise/entreprise.component';
import { ParticulierComponent } from './modules/general/client/particulier/particulier.component';
import { VenteDirecteComponent } from './modules/pharmaplus/ventes/vente-directe/vente-directe/vente-directe.component';

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
  { path: 'familles', component: FamilleComponent},
  { path: 'code-geographiques', component: CodeGeographiqueComponent},
  { path: 'principe-actifs', component: PrincipeActifComponent},
  { path: 'clients', component: ClientComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'assurances', component: AssuranceComponent},
  { path: 'entreprises', component: EntrepriseComponent},
  { path: 'particuliers', component: ParticulierComponent},
  { path: 'vente-directe', component: VenteDirecteComponent}
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
