import "./CrudForm.css";
import {
    faCircleXmark,
    faEye,
    faImage,
    faSave,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CrudForm({ isOpen }) {
    return (
        <section
            className={"panel-crudform-component " + (isOpen ? "open" : "")}
        >
            <form
                className="ideaform"
                action="#"
                method="POST"
                onSubmit={(evt) => evt.preventDefault()}
                id="formData"
            >
                <div className="head">
                    <h3>Usuario: </h3>
                    <input type="hidden" name="usuario_id" value="0" />
                    <input
                        type="text"
                        name="usuario_nombre_view"
                        value=""
                        disabled
                    />
                </div>
                <div className="body">
                    <div className="campo">
                        <span>
                            Nombre<b>*</b>:
                        </span>
                        <input
                            type="text"
                            name="usuario_nombre"
                            placeholder="Nombre"
                        />
                    </div>
                    <div className="campo">
                        <span>
                            Usuario<b>*</b>:
                        </span>
                        <input
                            type="text"
                            name="usuario_user"
                            placeholder="Usuario"
                        />
                    </div>
                    <div className="campo">
                        <span id="field_password">
                            Contraseña<b>*</b>:
                        </span>
                        <div className="inputpass">
                            <input
                                type="password"
                                name="usuario_pass"
                                placeholder="Contraseña"
                            />
                            <button
                                className="ideabutton showpass"
                                id="buttonShowPass"
                            >
                                <FontAwesomeIcon icon={faEye} />
                            </button>
                        </div>
                    </div>
                    <div className="campo">
                        <span>Foto:</span>
                        <div className="inputfile">
                            <input
                                className="placeholder_off"
                                type="file"
                                name="usuario_foto"
                                placeholder="Foto"
                                accept="image/png"
                            />
                            <FontAwesomeIcon icon={faImage} />
                        </div>
                    </div>
                    <div className="campo">
                        <span>
                            Privilegios<b>*</b>:
                        </span>
                        <select name="privilegio_id" id=""></select>
                    </div>
                </div>
                <div className="foot">
                    <div className="msg" id="formMsg"></div>
                    <div className="buttons">
                        <Button text="Guardar" icon={faSave} type="edit" />
                        <Button
                            text="Cancelar"
                            icon={faCircleXmark}
                            type="cancel"
                        />
                    </div>
                </div>
            </form>
        </section>
    );
}
