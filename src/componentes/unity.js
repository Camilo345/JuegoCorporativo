import React, { Fragment, useState, useCallback,useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import unityScript from "../componentes/unity.js";

function App() {

  const [isGameOver, setIsGameOver] = useState(false);
  const [puntaje, setPuntaje] = useState();

  const { unityProvider, addEventListener, removeEventListener } = useUnityContext({
    loaderUrl: "/juego/build/JuegoCorporativo.loader.js",
    dataUrl: "/juego/build/JuegoCorporativo.data",
    frameworkUrl: "/juego/build/JuegoCorporativo.framework.js",
    codeUrl: "/juego/build/JuegoCorporativo.wasm",
  });


  const manejarPuntaje = useCallback((puntaje) => {
    setIsGameOver(true);
    setPuntaje(puntaje);
    console.log(puntaje);
  }, []);

  
  useEffect(() => {
    addEventListener("Datos", manejarPuntaje);
    return () => {
      removeEventListener("Datos", manejarPuntaje);
    };
  }, [addEventListener, removeEventListener, manejarPuntaje]);


  return (
    <Unity unityProvider={unityProvider} style={{ width: 960, height: 600 }} />
  );
}

export default App;