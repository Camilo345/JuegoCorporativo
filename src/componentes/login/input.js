import '../../css/login/login.css';


function Input(props){
    return(
        <div className="form-group">
            <input type={props.esContraseña} name={props.tipo} id={props.tipo} placeholder={props.tipo} className="form-control"
            onChange={(e) => props.manejarClic(e.target.value)}/>
        
        </div>
    );
}

export default Input;