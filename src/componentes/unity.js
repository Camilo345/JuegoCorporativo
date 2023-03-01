import React, { Fragment, useState, useCallback,useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { LlamarActualizarPuntaje } from '../javascript/iniciarFirebase.js';
import  Nav from './login/loginHeader.js';


function App() {

  <Nav></Nav>

  const [puntaje, setPuntaje] = useState();

  

  const { unityProvider, addEventListener, removeEventListener,UNSAFE__unityInstance } = useUnityContext({
    loaderUrl: "./juego/build/JuegoCorporativo.loader.js",
    dataUrl: "./juego/build/JuegoCorporativo.data",
    frameworkUrl: "./juego/build/JuegoCorporativo.framework.js",
    codeUrl: "./juego/build/JuegoCorporativo.wasm",
  });


  const manejarPuntaje = useCallback((puntaje) => {
    setPuntaje(puntaje);
    console.log(puntaje);

    var puntos = localStorage.getItem("puntos");
    if(puntaje>puntos){
      LlamarActualizarPuntaje(puntaje);
    }
    
  }, []);

  const Quitar = useCallback(() => {
    console.log("Quitar");
  }, []);



  
  useEffect(() => {
    addEventListener("Datos", manejarPuntaje);
    return () => {
      removeEventListener("Datos", manejarPuntaje);
    };
  }, [addEventListener, removeEventListener, manejarPuntaje]);

   useEffect(() => {
    addEventListener("Quitar", Quitar);
    return () => {
      removeEventListener("Quitar", Quitar);
    };
  }, [addEventListener, removeEventListener, Quitar]);


  return (
    <div>
          <Unity unityProvider={unityProvider} style={{ width: 960, height: 600 }} />
          <button>Hola</button>
    </div>

  );
}

export default App;