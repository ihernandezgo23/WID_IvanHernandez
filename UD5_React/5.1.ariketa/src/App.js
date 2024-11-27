import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';
import logo from './img/logo.png';

<img src={logo} alt="logo" />


const App = () => {
  return (
    <div>
      <div className="header-section d-flex justify-content-around align-items-center p-3">
        <div className="text-start text-body">
          <h1>ZUBIRI MANTEO</h1>
        </div>
        <div className="text-end">
        <img src={logo} alt="logo" height={75} width={75}/>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link menu-link text-body" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link menu-link text-body" href="#">Quienes Somos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link menu-link text-body" href="#">Cursos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link menu-link text-body" href="#">Situación</a>
              </li>
              <li className="nav-item">
                <a className="nav-link menu-link text-body" href="#">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>



      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <div className="form-section">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre y apellidos</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Nombre"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="comments" className="form-label">Deja tu comentario</label>
                <textarea
                  className="form-control"
                  id="comments"
                  rows="5"
                  placeholder="Déjanos tu comentario"
                ></textarea>
              </div>
              <button type="submit" className="btn custom-btn w-100 mb-2">Enviar</button>
              <button type="reset" className="btn custom-btn w-100">Limpiar</button>
            </form>

            </div>
          </div>

          <div className="col-md-6">
            <h3>Contacta con nosotros</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius libero eget nulla elementum, non mollis enim feugiat.
              Proin tincidunt mi ac ex convallis, eget viverra enim posuere. Aliquam erat volutpat.
              Fusce accumsan feugiat enim at tempor. Suspendisse potenti. Curabitur dapibus diam at velit dictum, nec vulputate lectus auctor.
            </p>
          </div>
        </div>
      </div>

      <footer className="footer text-center py-3">
        <div className="col">
          ZUBIRI MANTEO
        </div>
      </footer>
    </div>
  );
};

export default App;