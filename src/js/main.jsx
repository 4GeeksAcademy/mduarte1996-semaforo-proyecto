import React from 'react'
import ReactDOM from 'react-dom/client'


//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>, 
) //acerca de esto, lo investigue mas a fondo porque me gusta entender el porque de todo y basicamente Busca el elemento con id root en mi HTML, y dentro de él, renderiza (muestra en pantalla) el componente home (mi semáforo)
