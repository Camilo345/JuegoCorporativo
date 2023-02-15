
import '../../css/login/login.css';

function loginBody() {
	return(
        <div className="container p-4">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <div className="tarjeta text-center">
              <div className="tarjeta-header">
                <h3>Inicia sesión</h3>
              </div>
              <div className="card-body">
                  <div className="form-group">
                    <input type="text" name="nickname" id="nickname" placeholder="Nickname" className="form-control"/>
                  </div>
                  <div className="form-group">
                    <input type="password" name="contrasenia" id="contrasenia" placeholder="Contraseña" className="form-control"/>
                  </div>
                  <div className="form-group">
                  <button className="btn btn-primary btn-block" >
                   Entrar
                  </button>
                  </div>
                  <p>No tienes cuenta? <a href="/kaleido/registroPlayer.html">Crea una</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
	);
}

export default loginBody;