import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC531018eFiZ_GbuFSChIhFP8bJi_6PuDU',
  authDomain: 'react-chat-d5669.firebaseapp.com',
  projectId: 'react-chat-d5669',
  storageBucket: 'react-chat-d5669.appspot.com',
  messagingSenderId: '180480613370',
  appId: '1:180480613370:web:6c92808c3b69155b44e243',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
