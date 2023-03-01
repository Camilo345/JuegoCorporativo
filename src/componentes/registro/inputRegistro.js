import "../../css/registro/registro.css"

function InputRegistro(props){
    return(
        <div className="form-group">
            <input type={props.tipo} name={props.id} id={props.id} placeholder={props.placeHolder} className="form-control" 
            onChange={(e) => props.manejarClic(e.target.value)}/>
            <div className="invalid-feedback">
            Campo requerido.
            </div>
        </div>
    );
}

export default InputRegistro;