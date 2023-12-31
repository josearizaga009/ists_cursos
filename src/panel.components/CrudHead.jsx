import "./CrudHead.css";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

export default function CrudHead({ title, isOpen, onClickNew }) {
    return (
        <section
            className={"panel-crudhead-component " + (isOpen ? "open" : "")}
        >
            <h3>{title}</h3>
            <hr className="d" />
            <div className="report ideareport">
                <select id="selectReport">
                    <option value="">Reporte</option>
                    <option value="pdf">PDF</option>
                    <option value="excel">EXCEL</option>
                    <option value="csv">CSV</option>
                </select>
            </div>
            <hr className="d" />
            <div className="search ideasearch">
                <span>Buscar: </span>
                <div className="content">
                    <img src="view/src/icon/search.png" />
                    <input
                        type="search"
                        placeholder="Busca por cualquier campo.."
                        id="inputSearch"
                    />
                </div>
            </div>
            <hr className="d" />

            <Button
                text="Agregar"
                icon={faCirclePlus}
                type="new"
                onClick={onClickNew}
            />
        </section>
    );
}
