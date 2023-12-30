import "./CrudTable.css";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

export default function CrudTable({ isOpen }) {
    return (
        <section
            className={"panel-crudtable-component " + (isOpen ? "open" : "")}
        >
            <div className="content_table ideatable">
                <table border="1">
                    <thead>
                        <tr>
                            <th>Foto</th>
                            <th>Nombre</th>
                            <th>Usuario</th>
                            <th>Privilegio</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody id="tableData">
                        <tr>
                            <td>
                                <img
                                    src="https://randomuser.me/api/portraits/men/30.jpg"
                                    className="td-photo"
                                />
                            </td>
                            <td>
                                <span className="td-span">Jose</span>
                            </td>
                            <td>
                                <span className="td-span">josearizaga009</span>
                            </td>
                            <td>
                                <span className="td-span">Docente</span>
                            </td>
                            <td className="td-action">
                                <div className="buttons-flex">
                                    <Button
                                        text="Editar"
                                        icon={faPen}
                                        type="edit"
                                    />
                                    <Button
                                        text="Borrar"
                                        icon={faTrash}
                                        type="delete"
                                    />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}
