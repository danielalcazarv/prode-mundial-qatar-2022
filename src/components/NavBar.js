import { Button } from "bootstrap";
import logo from "../img/pelota.png";

const NavBar = () => {
    return (
        <header>
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} width="90px" alt="pelota-logo"/>
                    Prode Mundial Qatar 2022
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse nav__icons" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto mt-2 mt-lg-0">
                    <a className="nav-link" href="#">Inicio</a>
                    <a className="nav-link" aria-current="page" href="#">Mi Prode</a>
                    <a className="nav-link" href="#">Tablas</a>
                    <a className="nav-link" href="#">Galeria</a>
                    <button className="btn btn-success" href="#">Iniciar Sesión</button>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    )
}

export default NavBar