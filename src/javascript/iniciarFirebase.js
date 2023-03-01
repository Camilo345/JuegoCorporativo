import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, query, where, getDocs,addDoc ,updateDoc,doc,orderBy, limit} from "firebase/firestore";
import firebase from 'firebase/compat/app';
import { serverTimestamp } from '@firebase/firestore';
import {ActualizarTop} from '../componentes/Ranking/tablaRanking.js';

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyAUp244xc3s4sn_FygCADe191Tu2CASo5A",
    authDomain: "kaleido-15cbc.firebaseapp.com",
    projectId: "kaleido-15cbc",
    storageBucket: "kaleido-15cbc.appspot.com",
    messagingSenderId: "487202040753",
    appId: "1:487202040753:web:e4bfe1d8ef08cf20df6b90",
    measurementId: "G-EHJV6TVH6X"
};

class DatosRanking {
    constructor(fecha, nick,puntaje) {
      this.fecha = fecha;
      this.nick = nick;
      this.puntaje = puntaje;
    }
  }
var top=[];

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export const LlamarLogin = (nick, contraseña,navigate)=> {
 
   login(nick,contraseña,navigate);
}

export const HacerRegistro = (nombre,apellido,nick, contraseña,telefono,navigate)=> {
 
    Registro(nombre,apellido,nick, contraseña,telefono,navigate);
 }

 export const LlamarActualizarPuntaje=(puntaje)=>{
    Uptade(puntaje);
 }

 export const LamarTop10=()=>{
   Top10().then(val => {ActualizarTop(val)});
 }

async function login(nick,contraseña,navigate){
    
    console.log(nick + "  -  "+contraseña);
    if(nick !=="" && contraseña !==""){
        const userRef = collection(db, "usuario");
        const q = query(userRef, where("nickname", "==", nick));  
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            if(contraseña === doc.data().contraseña){
                localStorage.setItem("ID", doc.id);
                localStorage.setItem("puntos", doc.data().puntaje);
                localStorage.setItem("nombre", doc.data().nombre+" "+doc.data().apellidos);
                navigate("/runner");
            }else{
                alert("usuario Incorrecto")
            }
          // doc.data() is never undefined for query doc snapshots
          //console.log(doc.id, " => ", doc.data());
        });
    }
  
}

async function Registro(nombre,apellido,nick, contraseña,telefono,navigate){
    if(nombre!==""&&apellido!==""&&nick!==""&&contraseña!==""&&telefono!==""){
        try {
           // var fecha = firebase.firestore.Timestamp;
            const docRef = await addDoc(collection(db, "usuario"), {
                nombre: nombre,
                apellidos: apellido,
                contraseña: contraseña,
                nickname: nick,
                numero: telefono,
                puntaje: 0,
                juego: "Runner",
                fecha: serverTimestamp()
            });
            console.log("Document written with ID: ", docRef.id);
            navigate("/");
          } catch (e) {
            alert("No se pudo registrar al usuario");
            console.error("Error adding document: ", e);
          }
    }else{
        alert("Por favor rellene todos los campos");
    }
}

async function Uptade(puntaje){
  
    var id= localStorage.getItem("ID");
    const UsuarioRef = doc(db, "usuario", id);
    await updateDoc(UsuarioRef, {
        puntaje: puntaje,
        fecha: serverTimestamp()
    });
}


async function Top10(){
    var i =0;
    var top = [];
    const userRef = collection(db, "usuario");
    const q = query(userRef, orderBy("puntaje","desc"),limit(10));  
     const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            i++;
            const fec = new Date(doc.data().fecha.seconds*1000);
            var user = new DatosRanking();
            user.fecha=fec.toDateString();
            user.nick=doc.data().nickname;
            user.puntaje= doc.data().puntaje;
            top.push(user);
           console.log(user.fecha);
            
        });
        return top;
}


