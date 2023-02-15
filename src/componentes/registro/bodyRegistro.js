import '../../css/registro/registro.css';

function bodyRegistro(){
    return(

        <div className="container p-4">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <div className="card text-center">
              <div className="card-header">
                <h3>Registrate</h3>
              </div>
              <div className="card-body">
                <form className="needs-validation" novalidate>
                  <div className="form-group">
                    <input type="text" name="nombrep" id="nombrep" placeholder="Nombre(s)" className="form-control" autofocus required/>
                    <div className="invalid-feedback">
                      Campo requerido.
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="text" name="apellidop" id="apellidop" placeholder="Apellido(s)" className="form-control" required/>
                    <div className="invalid-feedback">
                      Campo requerido.
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="text" name="nickname" id="nickname" placeholder="Nickname" className="form-control" required/>
                    <div className="invalid-feedback">
                      Campo requerido.
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="password" name="contrasenia" id="contrasenia" placeholder="Contraseña" className="form-control" required/>
                    <div className="invalid-feedback">
                      Campo requerido.
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="text" name="telefono" id="telefono" placeholder="Telefono" className="form-control" required/>
                    <div className="invalid-feedback">
                      Campo requerido.
                    </div>
                  </div>
                  <div className="form-group">
                    
                  </div>
                  </form>
                  <button className="btn btn-primary btn-block" type="submit" id="send" onclick="guardar()">
                    Registrarse
                  </button>
                  <p>Ya tienes cuenta? <a href="./index.html">Entra</a></p>       
              </div>
            </div>
          </div>
        </div>
      </div>

    );
}

export default bodyRegistro;