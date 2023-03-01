
import '../../css/login/login.css';
import Input from '../login/input.js';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { LlamarLogin } from '../../javascript/iniciarFirebase.js';
import { useParams, useNavigate } from "react-router-dom";

function LoginBody({manejarClic}) {
    const [nick,setNick] = useState('');
    const [contraseña,setContraseña] = useState('');
    const navigate = useNavigate();

    const cambiarNick = val =>{
      setNick(val);
    };

    const cambiarContraseña = val =>{
      setContraseña(val);
    };

    const hacerLogin = () =>{
      LlamarLogin(nick,contraseña,navigate);
      }
	return(
        <div className="container p-4">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <div className="tarjeta text-center">
              <div className="tarjeta-header">
                <h3>Inicia sesión</h3>
              </div>
              <div className="card-body">
                 <Input manejarClic={cambiarNick} tipo="Nickname" esContraseña="text"/>
                 <Input manejarClic={cambiarContraseña} tipo="contrasenia" esContraseña="password"/>
                  <div className="form-group">
                  <button className="btn btn-primary btn-block" onClick={hacerLogin}>
                   Entrar
                  </button>
                  </div>
                  <p>No tienes cuenta? <a href="/register">Crea una</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
	);
}

export default LoginBody;