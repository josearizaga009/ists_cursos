import "./Sidebar.css";

import { faHome, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="panel-sidebar-component">
            <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="user photo"
                className="user_img"
            />
            <span className="user_name">Jose Arizaga</span>

            <Link
                className="option <?= isPageActive($currentPage, 'inicio') ?>"
                to="/inicio"
            >
                <FontAwesomeIcon icon={faHome} />
                <span>Inicio</span>
            </Link>

            <hr />

            <Link className="option" to="/users">
                <FontAwesomeIcon icon={faUsers} />
                <span>Usuarios</span>
            </Link>
        </div>
    );
}
