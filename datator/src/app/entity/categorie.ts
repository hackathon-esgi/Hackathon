import {SousCategorie} from './sousCategories';

export class Categorie {
  id: number;
  name: string;
  nbArticle: number;
  indiceConfiance: number;
  topic: string;
  sousCategories : SousCategorie[];
}