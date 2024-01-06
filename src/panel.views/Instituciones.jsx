import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import Button from "../panel.components/Button";
import CrudConfirm from "../panel.components/CrudConfirm";
import { CrudForm, CrudFormInput } from "../panel.components/CrudForm";
import CrudHead from "../panel.components/CrudHead";
import CrudProgress from "../panel.components/CrudProgress";
import {
    CrudTable,
    CrudTableTdFlex,
    CrudTableTdImage,
    CrudTableTdText,
} from "../panel.components/CrudTable";

export default function Instituciones() {
    return (
        <>
            <CrudHead title="Instituciones" isOpen={true} onClickNew={null} />

            <CrudTable
                titles={["Logo", "Nombre", "Siglas"]}
                dataList={[
                    {
                        id: 1,
                        logo: "./img/logo.png",
                        nombre: "Instituto superior tecnologico sucua",
                        siglas: "ISTS",
                    },
                ]}
                onRowPrint={({ id, logo, nombre, siglas }) => (
                    <tr key={id}>
                        <CrudTableTdImage src={logo} alt={"Foto " + nombre} />
                        <CrudTableTdText value={nombre} />
                        <CrudTableTdText value={siglas} />
                        <CrudTableTdFlex>
                            <Button
                                text="Editar"
                                icon={faPen}
                                type="edit"
                                onClick={null}
                            />
                            <Button
                                text="Borrar"
                                icon={faTrash}
                                type="delete"
                                onClick={null}
                            />
                        </CrudTableTdFlex>
                    </tr>
                )}
                isOpen={true}
            />

            <CrudForm
                title="Institucion"
                isOpen={true}
                onClickSave={null}
                onClickCancel={null}
            >
                <CrudFormInput label="Nombre" placeholder="Nombre" required />
                <CrudFormInput label="Siglas" placeholder="Siglas" required />
                <CrudFormInput label="Logo" placeholder="Logo" type="file" />
            </CrudForm>

            <CrudConfirm
                isOpen={false}
                text="¿Seguro de eliminar esta institucion?"
                onClickDelete={null}
                onClickCancel={null}
            />

            <CrudProgress isOpen={false} text="Cargando instituciones" />
        </>
    );
}
