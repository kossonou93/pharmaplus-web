import { Categorie } from "./Categorie";
import { Fournisseur } from "./Fournisseur";

export class Article{
  id!: string;
	name!: string;
	description?: string;
	price!: number;
	quantity!: number;
  categorie!: Categorie;
  fournisseur!: Fournisseur;
}
