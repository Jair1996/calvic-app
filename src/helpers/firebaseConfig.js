import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBWZgPucGI8LfKimcSIJw6xjexQFpqBo1w",
  authDomain: "sql-demo-7e6ac.firebaseapp.com",
  databaseURL: "https://sql-demo-7e6ac-default-rtdb.firebaseio.com",
  projectId: "sql-demo-7e6ac",
  storageBucket: "sql-demo-7e6ac.appspot.com",
  messagingSenderId: "833391589751",
  appId: "1:833391589751:web:fb65168e2161a30ee6c972"
};

const app = initializeApp(firebaseConfig);

export default getFirestore();