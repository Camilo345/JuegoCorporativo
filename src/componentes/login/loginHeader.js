import '../../css/login/login.css';


function navBar() {
	return(
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark contNav">
        <span className="navbar-brand">
          Nombre del juego
        </span>
        <div className='contInfo'>
          <p><b>{localStorage.getItem("nombre")}</b></p>
          <div className='contPuntos'>
            <p className='txtPuntos'><b>Puntaje:   </b></p>
          <p> {localStorage.getItem("puntos")}</p>
          </div>
         
        </div>
      </nav>
	);
}


export default navBar;