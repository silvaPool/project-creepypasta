import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
// import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCxgrc64kyhKuJWK_zynrllTCJrVJ6v_Wo",
    authDomain: "creepypastas-99b52.firebaseapp.com",
    projectId: "creepypastas-99b52",
    storageBucket: "creepypastas-99b52.appspot.com",
    messagingSenderId: "248615226617",
    appId: "1:248615226617:web:7a3da1b9d8d7742fa2e628"
  };

  // firebase.initializeApp(firebaseConfig);

  // const storage = firebase.storage();

  // export {storage, firebase as default};


  const app = initializeApp(firebaseConfig);

  export const storage = getStorage(app);