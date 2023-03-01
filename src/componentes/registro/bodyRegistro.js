import '../../css/registro/registro.css';
import InputRegistro from "./inputRegistro.js";
import { useState } from 'react';
import { HacerRegistro } from '../../javascript/iniciarFirebase.js';
import { useParams, useNavigate } from "react-router-dom";

function BodyRegistro(){
  const [nombre,setNombre] = useState('');
  const [apellido,setApellido] = useState('');
  const [nick,setNick] = useState('');
  const [contraseña,setContraseña] = useState('');
  const [telefono,setTelefono] = useState('');

  const navigate = useNavigate();

  const cambiarNombre = val =>{
    setNombre(val);
  };
  const cambiarApellido = val =>{
    setApellido(val);
  };
  const cambiarNick = val =>{
    setNick(val);
  };
  const cambiarContraseña = val =>{
    setContraseña(val);
  };
  const cambiarTelefono = val =>{
    setTelefono(val);
  };

  const hacerRegistro = () =>{
    HacerRegistro(nombre,apellido,nick,contraseña,telefono,navigate);
  }
    return(

        <div className="container p-4">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <div className="card text-center">
              <div className="card-header">
                <h3>Registrate</h3>
              </div>
              <div className="card-body">
                <form className="needs-validation" noValidate>
                  <InputRegistro manejarClic={cambiarNombre} tipo="text" id="nombrep" placeHolder="Nombre(s)"/>
                  <InputRegistro manejarClic={cambiarApellido} tipo="text" id="nickname" placeHolder="Apellido(s)"/>
                  <InputRegistro manejarClic={cambiarNick} tipo="text" id="nickname" placeHolder="Nickname"/>
                  <InputRegistro manejarClic={cambiarContraseña} tipo="password" id="contrasenia" placeHolder="Contraseña"/>
                  <InputRegistro manejarClic={cambiarTelefono} tipo="text" id="telefono" placeHolder="Telefono"/>
                
                  <div className="form-group">
                    
                  </div>
                  </form>
                  <button className="btn btn-primary btn-block" type="submit" id="send"  onClick={hacerRegistro}>
                    Registrarse
                  </button>
                  <p>Ya tienes cuenta? <a href="/">Entra</a></p>       
              </div>
            </div>
          </div>
        </div>
      </div>

    );
}

export default BodyRegistro;