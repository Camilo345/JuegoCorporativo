

import '../../css/login/login.css';


function navBar() {
	return(
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <span className="navbar-brand">
          Nombre del juego
        </span>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
        </ul>
      </nav>
	);
}


export default navBar;