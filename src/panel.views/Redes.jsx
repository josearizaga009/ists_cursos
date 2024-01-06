import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import Button from "../panel.components/Button";
import CrudConfirm from "../panel.components/CrudConfirm";
import { CrudForm, CrudFormInput } from "../panel.components/CrudForm";
import CrudHead from "../panel.components/CrudHead";
import CrudProgress from "../panel.components/CrudProgress";
import {
    CrudTable,
    CrudTableTdFlex,
    CrudTableTdText,
} from "../panel.components/CrudTable";

export default function Redes() {
    return (
        <>
            <CrudHead title="Redes Sociales" isOpen={true} onClickNew={null} />

            <CrudTable
                titles={["Nombre", "Color", "Link", "Icono"]}
                dataList={[
                    {
                        id: 1,
                        nombre: "Facebook",
                        color: "Azul",
                        link: "https://www.facebook.com/",
                        icono: "F",
                    },
                ]}
                onRowPrint={({ id, nombre, color, link, icono }) => (
                    <tr key={id}>
                        <CrudTableTdText value={nombre} />
                        <CrudTableTdText value={color} />
                        <CrudTableTdText value={link} />
                        <CrudTableTdText value={icono} />
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
                title="Red Social"
                isOpen={true}
                onClickSave={null}
                onClickCancel={null}
            >
                <CrudFormInput label="Nombre" placeholder="Nombre" required />
                <CrudFormInput label="Color" placeholder="Color" required />
                <CrudFormInput label="Link" placeholder="Link" required />
                <CrudFormInput label="Icono" placeholder="Icono" type="file" />
            </CrudForm>

            <CrudConfirm
                isOpen={false}
                text="¿Seguro de eliminar esta red social?"
                onClickDelete={null}
                onClickCancel={null}
            />

            <CrudProgress isOpen={false} text="Cargando redes sociales" />
        </>
    );
}
