import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header';
import Iniciosesion from './componentes/Iniciosesion';
import {Footer} from './componentes/Footer';
import Home from './componentes/Home';
import Usuario from './componentes/Usuario';
import Usuarioexterno from './componentes/Usuarioexterno';
import Tareas from './componentes/Tareas';


function App() {
  return (
    <>
        <Header/>
        <Home />
        <Footer/>
    </>

  );
 
}
export default App;
