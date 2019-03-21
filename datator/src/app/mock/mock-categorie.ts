import { Categorie } from '../entity/categorie';
import {SOUSCATEGORIE} from './mock-souscategorie'

export const CATEGORIES : Categorie[] = [
    { 
        id: 11, 
        name: 'Macron', 
        indiceConfiance :10,
        nbArticle:10,
        topic:"toto" ,
        sousCategories :SOUSCATEGORIE
    }
 ];