import { initializeApp } from 'firebase/app';
import 'firebase/storage';
import 'firebase/database';
import 'firebase/auth';
import * as constants from '../helpers/constants';

const {
  appId,
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  measurementId,
} = constants;

const firebaseConfig = {
  appId,
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  measurementId,
};

const app = initializeApp(firebaseConfig);
export default app;
