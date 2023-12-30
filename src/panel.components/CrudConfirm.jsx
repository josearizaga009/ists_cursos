import "./CrudConfirm.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
import {
    faCircleXmark,
    faClose,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";

export default function CrudConfirm({ isOpen }) {
    return (
        <section
            className={"panel-crudconfirm-component " + (isOpen ? "open" : "")}
        >
            <div className="ideaconfirm">
                <div className="head">
                    <p className="msg">¿Esta seguro de eliminar este dato?</p>
                    <button id="modalClose">
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                </div>
                <div className="foot">
                    <Button
                        text="Cancelar"
                        icon={faCircleXmark}
                        type="cancel"
                    />
                    <Button text="Eliminar" icon={faTrash} type="delete" />
                </div>
            </div>
        </section>
    );
}
