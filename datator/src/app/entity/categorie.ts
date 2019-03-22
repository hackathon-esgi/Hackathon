import {SousCategorie} from './sousCategories';
import {Motcle} from './motcle';

export class Categorie {
  id: number;
  name: string;
  nbArticle: number;
  indiceConfiance: number;
  topic: string;
  sousCategories : SousCategorie[];
  motcles : Motcle[];
}