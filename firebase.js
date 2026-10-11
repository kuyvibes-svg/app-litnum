import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
  getFirestore, 
  collection, 
  getDocs, 
  addDoc, 
  query, 
  where 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC_Oig-AV3IIcsQ5kEXZWHAtj0ZkXI88_Y",
  authDomain: "litnum-ganesa.firebaseapp.com",
  projectId: "litnum-ganesa",
  storageBucket: "litnum-ganesa.firebasestorage.app",
  messagingSenderId: "731932173481",
  appId: "1:731932173481:web:8857cbbe7f85ae5b54f5b8"
};

// Inisialisasi Firebase App & Firestore
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Lampirkan ke window global agar dapat diakses langsung oleh admin.html
window.db = db;
window.firestoreTools = { collection, getDocs, addDoc, query, where };
