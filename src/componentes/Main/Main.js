import Boton from './Boton.js';

function Main(){
    return(
        <div className="row justify-content.center">
            <div className="w-100 mt-5">
                    <Boton texto="Jugar" direccion="/login"/>
                    <Boton texto="Registrate" direccion="/register"/>
                    <Boton texto="Ranking" direccion="/ranking"/>
            </div>
        
        </div>
    );
}

export default Main;