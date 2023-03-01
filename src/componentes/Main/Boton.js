
import {useNavigate } from "react-router-dom";
import '../../css/main/main.css'
function Boton(props){

    var navigate = useNavigate();
    function irA(){
        navigate(props.direccion);
    }
    return(
        <div>
            <button className="btn btn-primary btn-lg mt-2 mb-2 boton" onClick={irA} >{props.texto}</button>
        </div>
    );
}

export default Boton;