import "../../css/ranking/ranking.css"
import {LamarTop10, getTop} from "../../javascript/iniciarFirebase.js";
import { useState } from 'react';

import Table from 'react-bootstrap/Table';
import Fila from "./Fila.js";



var listNick =[];
var listPuntaje=[];
var listFecha=[];

  function rellenarArray(topTen){
  
    listNick=[];
   for(var i =0;i<10;i++){
    listPuntaje.push(topTen[i].puntaje);
    listNick.push(topTen[i].nick);
    listFecha.push(topTen[i].fecha);
   }
 //  console.log(listFecha);
  }

export const ActualizarTop=(topTen)=>{
    rellenarArray(topTen);
 }

function TablaRanking(){
    const [Nick,setNicks] = useState([]);
    const [puntos,setPuntos] = useState([]);
    const [fecha,setFecha] = useState([]);

    
    const actualizarTabla=setTimeout(() => {
       
       if(Nick.length===0){
        var N = listNick;
        var p = listPuntaje;
        var F = listFecha;
        
        setFecha(F);
        setNicks(N);
        setPuntos(p);
       }else{
       
     
       }  
    }, 800);
      
    
    
    //setTimeout(actualizarTabla, 2000);

   LamarTop10();

    return(
      <div className=" row justify-content-center mt-5">
        <div className=" w-75">
        <Table striped bordered variant="dark"  >
              <thead>
                  <tr>
                  <th>#</th>
                  <th>Nick</th>
                  <th>Puntaje</th>
                  <th>Fecha</th>
                  </tr>
              </thead>
              <tbody>
                  <Fila numero={1} nick={Nick[0]} puntaje={puntos[0]} fecha={fecha[0]}></Fila>
                  <Fila numero={2} nick={Nick[1]} puntaje={puntos[1]} fecha={fecha[1]}></Fila>
                  <Fila numero={3} nick={Nick[2]} puntaje={puntos[2]} fecha={fecha[2]}></Fila>
                  <Fila numero={4} nick={Nick[3]} puntaje={puntos[3]} fecha={fecha[3]}></Fila>
                  <Fila numero={5} nick={Nick[4]} puntaje={puntos[4]} fecha={fecha[4]}></Fila>
                  <Fila numero={6} nick={Nick[5]} puntaje={puntos[5]} fecha={fecha[5]}></Fila>
                  <Fila numero={7} nick={Nick[6]} puntaje={puntos[6]} fecha={fecha[6]}></Fila>
                  <Fila numero={8} nick={Nick[7]} puntaje={puntos[7]} fecha={fecha[7]}></Fila>
                  <Fila numero={9} nick={Nick[8]} puntaje={puntos[8]} fecha={fecha[8]}></Fila>
                  <Fila numero={10} nick={Nick[9]} puntaje={puntos[9]} fecha={fecha[9]}></Fila>

              </tbody>
          </Table>
        </div>
         
</div>
       
    );
}

export default TablaRanking;