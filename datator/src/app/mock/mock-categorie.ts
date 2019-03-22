import { Categorie } from '../entity/categorie';
import {SOUSCATEGORIEECONOMIE,SOUSCATEGORIESPORT } from './mock-souscategorie';
import {MOTCLES} from './mock-motcles';

export const CATEGORIES : Categorie[] = [
    { 
        id: 1, 
        name: 'Economie ', 
        indiceConfiance :0,
        nbArticle:0,
        topic:"b" ,
        sousCategories :SOUSCATEGORIEECONOMIE,
        motcles : MOTCLES
    },
     { 
        id: 2, 
        name: 'Sports ', 
        indiceConfiance :0,
        nbArticle:0,
        topic:"s" ,
        sousCategories :SOUSCATEGORIESPORT,
        motcles :MOTCLES
    }
];