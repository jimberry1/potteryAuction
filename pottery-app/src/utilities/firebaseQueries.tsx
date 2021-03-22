import db from '../firebase';
import { artworkType } from '../types';
import {
  ARTWORK_TABLE,
  FIREBASE_GENERAL_INFO_TABLE,
} from './firebaseQueryConfig';
import Firebase from 'firebase';

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
