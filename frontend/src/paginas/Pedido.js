import React from 'react';
import '../estilos/styles.css';

function Pedido() {
return (
  
<main>
<div>
      <header className="navbar navbar-light bg-light shadow-sm">
        <section className="navbar-brand border border-dark w-70 m-0 pl-3">
          {" "}
          RECAPITO{" "}
        </section>
        <section className="navbar-brand text-center border border-dark w-30 m-0">
          {" "}
          ALGUIEN{" "}
        </section>
      </header>
    </div>
<div class="card text-dark bg-light mb-3">
  <div class="card-header">CARACTERÍSTICAS</div>
  <div class="card-body">
  <p>- 8 partes</p>
<p>- Contiene:</p>
<p>* Jamon</p>
<p>* Queso</p>
<p>* Piña</p>
<p>* Tomate</p>
  </div>
</div>
<div class="card text-dark bg-light mb-3">
  <div class="card-header">COSTO</div>
  <div class="card-body">
  <p class="card-text">$ 19.900</p>
  </div>
</div>
  
  <button type="button" class="btn btn-danger">HAZ TU PEDIDO</button>

 
    <p class="text">CHAT</p>
    <div class='imagen'>
    <img height="80px" src="https://www.pinclipart.com/picdir/big/102-1028516_chat-icon-free-download-png-and-icono-burbuja.png"></img>
    </div>
</main>
);
}
export default Pedido;