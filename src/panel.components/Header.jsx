import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header({ onClickButtonBars }) {
    return (
        <div className="panel-page-header">
            <span>Cursos ISTS</span>
            <button className="toggle_button" onClick={onClickButtonBars}>
                <FontAwesomeIcon icon={faBars} />
            </button>
            <button className="session_button">Cerrar sesion</button>
        </div>
    );
}
