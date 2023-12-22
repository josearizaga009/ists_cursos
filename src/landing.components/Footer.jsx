import { Link } from "react-router-dom";
import "./Footer.css";
import { Facebook } from "../resource/icons";
import MenuItem from "./MenuItem";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="elements">
                    <div className="element">
                        <Link to="/" className="logo">
                            <img src="./img/logo.png" />
                        </Link>
                    </div>
                    <div className="element">
                        <div className="redes">
                            <h3>Redes</h3>
                            <Link to="/">
                                <Facebook />
                            </Link>
                            <Link to="/">
                                <Facebook />
                            </Link>
                            <Link to="/">
                                <Facebook />
                            </Link>
                        </div>
                    </div>
                    <div className="element">
                        <h3>Instituciones</h3>
                        <ul>
                            <MenuItem to="/" name="Inicio" />
                            <MenuItem to="/" name="Inicio" />
                            <MenuItem to="/" name="Inicio" />
                        </ul>
                    </div>
                    <div className="element">
                        <h3>Enlaces</h3>
                        <ul>
                            <MenuItem to="/" name="Inicio" />
                            <MenuItem to="/" name="Inicio" />
                            <MenuItem to="/" name="Inicio" />
                        </ul>
                    </div>
                </div>
                <div className="otros">
                    <p>© 2023 Learnidea. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
