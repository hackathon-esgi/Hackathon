import { SousCategorie } from '../entity/sousCategories';
import {MOTCLES} from './mock-motcles';

export const SOUSCATEGORIE : SousCategorie[]  = [
                        { 
                            id: 1, 
                            name: 'FootBall', 
                            score :49490,
                            nbArticle:500,
                            motcles :MOTCLES
                        },
                        { 
                            id: 2, 
                            name: 'Basket', 
                            score :26490,
                            nbArticle:246,
                            motcles :MOTCLES
                        },
                        { 
                            id: 3, 
                            name: 'Tennis', 
                            score :6490,
                            nbArticle:167,
                            motcles :MOTCLES
                        }
                     ];