import { Categorie } from '../entity/categorie';
import {SOUSCATEGORIE} from './mock-souscategorie';
import {MOTCLES} from './mock-motcles';

export const CATEGORIES : Categorie[] = [
    { 
        id: 11, 
        name: 'Macron', 
        indiceConfiance :10,
        nbArticle:10,
        topic:"toto" ,
        sousCategories :SOUSCATEGORIE,
        motcles : MOTCLES
    },
     { 
        id: 11, 
        name: 'sddd', 
        indiceConfiance :10,
        nbArticle:10,
        topic:"toto" ,
        sousCategories :SOUSCATEGORIE,
        motcles :MOTCLES
    }
 ];