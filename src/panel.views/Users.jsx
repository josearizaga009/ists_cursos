import CrudHead from "../panel.components/CrudHead";
import {
    CrudTable,
    CrudTableTdFlex,
    CrudTableTdImage,
    CrudTableTdText,
} from "../panel.components/CrudTable";
import { CrudForm, CrudFormInput } from "../panel.components/CrudForm";
import CrudConfirm from "../panel.components/CrudConfirm";
import CrudProgress from "../panel.components/CrudProgress";
import Button from "../panel.components/Button";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Users() {
    const [head, setHead] = useState(true);
    const [table, setTable] = useState(true);
    const [form, setForm] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [progress, setProgress] = useState(false);

    const modeForm = () => {
        setHead(false);
        setTable(false);
        setForm(true);
        setConfirm(false);
        setProgress(false);
    };

    const modeTable = () => {
        setHead(true);
        setTable(true);
        setForm(false);
        setConfirm(false);
        setProgress(false);
    };

    const modeConfirm = () => {
        setHead(true);
        setTable(true);
        setForm(false);
        setConfirm(true);
        setProgress(false);
    };
    return (
        <>
            <CrudHead title="Usuarios" isOpen={head} onClickNew={modeForm} />

            <CrudTable
                titles={["Foto", "Nombre", "Usuario", "Privilegio"]}
                dataList={[
                    {
                        id: 1,
                        foto: "https://randomuser.me/api/portraits/men/30.jpg",
                        nombre: "Pablo",
                        usuario: "admin",
                        privilegio: "Administrador",
                    },
                    {
                        id: 2,
                        foto: "https://randomuser.me/api/portraits/women/4.jpg",
                        nombre: "Sofia",
                        usuario: "sofia123",
                        privilegio: "Docente",
                    },
                ]}
                onRowPrint={({ id, foto, nombre, usuario, privilegio }) => (
                    <tr key={id}>
                        <CrudTableTdImage src={foto} alt={"Foto " + nombre} />
                        <CrudTableTdText value={nombre} />
                        <CrudTableTdText value={usuario} />
                        <CrudTableTdText value={privilegio} />
                        <CrudTableTdFlex>
                            <Button
                                text="Editar"
                                icon={faPen}
                                type="edit"
                                onClick={modeForm}
                            />
                            <Button
                                text="Borrar"
                                icon={faTrash}
                                type="delete"
                                onClick={modeConfirm}
                            />
                        </CrudTableTdFlex>
                    </tr>
                )}
                isOpen={table}
            />

            <CrudForm
                title="Usuarios"
                isOpen={form}
                onClickSave={modeTable}
                onClickCancel={modeTable}
            >
                <CrudFormInput label="Nombre" placeholder="Nombre" required />
                <CrudFormInput label="Usuario" placeholder="Usuario" required />
                <CrudFormInput
                    label="Contraseña"
                    placeholder="Contraseña"
                    type="password"
                />
                <CrudFormInput label="Foto" placeholder="Foto" type="file" />
                <CrudFormInput
                    label="Privilegios"
                    placeholder="Privilegios"
                    type="select"
                    required
                >
                    <option value="">Seleccione..</option>
                    <option value="">Administrador</option>
                    <option value="">Docente</option>
                    <option value="">Estudiante</option>
                </CrudFormInput>
            </CrudForm>

            <CrudConfirm
                isOpen={confirm}
                text="¿Seguro de eliminar este usuario?"
                onClickDelete={modeTable}
                onClickCancel={modeTable}
            />

            <CrudProgress isOpen={progress} text="Cargando usuarios" />
        </>
    );
}
