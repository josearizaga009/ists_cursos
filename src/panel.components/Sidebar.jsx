import "./Sidebar.css";

import { faHome, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sidebar() {
    return (
        <div className="panel-sidebar-component">
            <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="user photo"
                className="user_img"
            />
            <span className="user_name">Jose Arizaga</span>

            <a
                className="option <?= isPageActive($currentPage, 'inicio') ?>"
                href="./inicio"
            >
                <FontAwesomeIcon icon={faHome} />
                <span>Inicio</span>
            </a>

            <hr />

            <a className="option" href="#">
                <FontAwesomeIcon icon={faUsers} />
                <span>Usuarios</span>
            </a>
        </div>
    );
}
