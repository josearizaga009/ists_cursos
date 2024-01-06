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

export default function Slider() {
    return (
        <>
            <CrudHead title="Slides" isOpen={true} onClickNew={null} />

            <CrudTable
                titles={["Foto", "Descipcion"]}
                dataList={[
                    {
                        id: 1,
                        foto: "https://randomuser.me/api/portraits/men/30.jpg",
                        description: "Pablo es el dministrador de la pagina",
                    },
                ]}
                onRowPrint={({ id, foto, description }) => (
                    <tr key={id}>
                        <CrudTableTdImage
                            src={foto}
                            alt={"Foto " + description}
                        />
                        <CrudTableTdText value={description} />
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
                title="Slides"
                isOpen={true}
                onClickSave={null}
                onClickCancel={null}
            >
                <CrudFormInput label="Foto" placeholder="Foto" type="file" />
                <CrudFormInput
                    label="Descripcion"
                    placeholder="Usuario"
                    required
                />
            </CrudForm>

            <CrudConfirm
                isOpen={false}
                text="¿Desea eliminar esta imagen?"
                onClickDelete={null}
                onClickCancel={null}
            />

            <CrudProgress isOpen={null} text="Cargando Slides" />
        </>
    );
}
