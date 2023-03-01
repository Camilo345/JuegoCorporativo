import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Unity from './componentes/juego/juego.js';
import LoginComp from './componentes/login/login.js';
import Registro from './componentes/registro/registro.js';
import Ranking from './componentes/Ranking/Ranking.js';
import Main from './componentes/Main/Main.js'

function App() {
  return (
    <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main/>}></Route>
              <Route path="/login" element={<LoginComp/>}></Route>
              <Route path="/runner" element={<Unity/>}></Route>
              <Route path="/register" element={<Registro/>}></Route>
              <Route path="/ranking" element={<Ranking/>}></Route>
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
