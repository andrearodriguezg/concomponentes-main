import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './componentes/Home';
import Registrarse from './componentes/Registrarse';
import Dashboard from './componentes/Dashboard';
import Usuario from './componentes/Usuario';




ReactDOM.render(
  <React.StrictMode>
      {/* Componente principal */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Registrarse" element= {<Registrarse/>}/>
          <Route path="/Dashboard" element= {<Dashboard/>}/>
          <Route path="/Usuario" element= {<Usuario/>}/>
          <Route path="/Registrarse" element= {<Registrarse/>}/>
          

        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
