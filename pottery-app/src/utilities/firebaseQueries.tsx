import db from '../firebase';
import { artworkType, searchStateType } from '../types';
import {
  ARTWORK_TABLE,
  FIREBASE_GENERAL_INFO_TABLE,
} from './firebaseQueryConfig';
import Firebase from 'firebase';
import { ART_MATERIALS } from '../configuration/staticVariableNames/databaseTableAndFieldNames';

export const fetchGeneralInfoTableByDocumentId = async (documentId: string) => {
  return await db.collection(FIREBASE_GENERAL_INFO_TABLE).doc(documentId).get();
};

export const addArtworkToArtworkDatabaseTable = async (
  artwork: artworkType
) => {
  return await db.collection(ARTWORK_TABLE).add(artwork);
};

export const fetchArtworkByArtworkId = async (artworkId: string) => {
  return await db.collection(ARTWORK_TABLE).doc(artworkId).get();
};

export const addViewToArtworkWhenLoaded = (artworkId: string) => {
  db.collection(ARTWORK_TABLE)
    .doc(artworkId)
    .update({ views: Firebase.firestore.FieldValue.increment(1) })
    .catch((err) => console.log(err));
};

export const createCustomArtQuery = async (searchFilters: searchStateType) => {
  let dbQuery = db.collection(ARTWORK_TABLE);
  if (searchFilters.materialSelection) {
    dbQuery = addArtMaterialFilter(dbQuery, searchFilters.materialSelection);
  }
  if (searchFilters.sizeSelection) {
    dbQuery = addSizeFilter(dbQuery, searchFilters.sizeSelection);
  }
  if (searchFilters.artType) {
    dbQuery = addArtTypeFilter(dbQuery, searchFilters.artType);
  }
  // ... add more queries here

  return await dbQuery.limit(20).get();
};

const addArtMaterialFilter = (query: any, artMaterial: string) => {
  return query.where(ART_MATERIALS, 'array-contains', artMaterial);
};

const addSizeFilter = (query: any, size: string) => {
  return query.where('size', '==', size);
};

const addArtTypeFilter = (query: any, artType: string) => {
  return query.where('artCategory', '==', artType);
};
