import React from 'react';
import ReactDOM from 'react-dom';
import Inicio from './paginas/Inicio';
import Pedido from './paginas/Pedido';





import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


ReactDOM.render(
  <React.StrictMode>
    <Pedido />
  </React.StrictMode>,
  document.getElementById('root')
);


