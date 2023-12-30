import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimateElement from "../components/AnimateElement";
import "./Login.css";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Login({ onLogin }) {
    return (
        <AnimateElement className="login-page">
            <form
                action="#"
                onSubmit={(evt) => evt.preventDefault()}
                id="element_form"
            >
                <div className="container">
                    <img className="logo" src="./img/logo.png" alt="Logo" />
                    <span>Cursus ISTS</span>
                    <div className="input">
                        <FontAwesomeIcon icon={faUser} />
                        <input
                            placeholder="Usuario"
                            type="text"
                            name="user_user"
                        />
                    </div>
                    <div className="input">
                        <FontAwesomeIcon icon={faLock} />
                        <input
                            placeholder="Contraseña"
                            type="password"
                            name="user_pass"
                        />
                    </div>
                    <div className="input msg">
                        <span className="msg"></span>
                    </div>
                    <div className="input submit" onClick={onLogin}>
                        <input type="submit" value="Iniciar sesion" />
                    </div>
                </div>
            </form>

            <section className="ideamodal _open" id="sectionProgress">
                <div className="modal-progress">
                    <span id="sectionProgressText">Procesando..</span>
                    <div className="progress_bar"></div>
                </div>
            </section>
        </AnimateElement>
    );
}
