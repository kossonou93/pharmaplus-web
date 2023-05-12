import { Client } from "./Client";
import { Entreprise } from "./Entreprise";

export class Assurance extends Client{

  ncc!: string;
	code!: string;
	codeFourClt!: string;
	nomRepresentant!: string;
	entreprises!: Entreprise[];

}
