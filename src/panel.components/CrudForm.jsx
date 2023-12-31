import "./CrudForm.css";
import {
    faCircleXmark,
    faEye,
    faEyeSlash,
    faImage,
    faSave,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export function CrudForm({
    children,
    title,
    onClickSave,
    onClickCancel,
    isOpen,
}) {
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
                    <h3>{title}: </h3>
                    <input
                        type="text"
                        name="usuario_nombre_view"
                        value=""
                        disabled
                    />
                </div>
                <div className="body">{children}</div>
                <div className="foot">
                    <div className="msg" id="formMsg"></div>
                    <div className="buttons">
                        <Button
                            text="Guardar"
                            icon={faSave}
                            type="edit"
                            onClick={onClickSave}
                        />
                        <Button
                            text="Cancelar"
                            icon={faCircleXmark}
                            type="cancel"
                            onClick={onClickCancel}
                        />
                    </div>
                </div>
            </form>
        </section>
    );
}

export function CrudFormInput({
    label,
    name,
    placeholder,
    type,
    required = false,
    ...props
}) {
    return (
        <div className="campo">
            <span>
                {label} {required ? <b>*</b> : ""}:
            </span>

            <InputForm
                type={type}
                name={name}
                placeholder={placeholder}
                {...props}
            />
        </div>
    );
}

function InputForm({ ...props }) {
    const elements = [
        {
            type: "file",
            Component: () => (
                <div className="inputfile">
                    <input
                        className="placeholder_off"
                        accept="image/png"
                        {...props}
                    />
                    <FontAwesomeIcon icon={faImage} />
                </div>
            ),
        },
        {
            type: "select",
            Component: () => <select {...props}>{props.children}</select>,
        },
        {
            type: "password",
            Component: () => {
                const [showPass, setShowPass] = useState(false);
                const handleShowPass = () => {
                    setShowPass(!showPass);
                };
                return (
                    <div className="inputpass ">
                        <input
                            {...props}
                            type={showPass ? "password" : "text"}
                        />
                        <button
                            className="ideabutton showpass"
                            onClick={handleShowPass}
                        >
                            <FontAwesomeIcon
                                icon={showPass ? faEyeSlash : faEye}
                            />
                        </button>
                    </div>
                );
            },
        },
    ];

    const match = elements.find((el) => el.type == props.type);
    if (match) {
        return <match.Component />;
    }
    return <input {...props} />;
}
