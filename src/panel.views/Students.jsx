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

export default function Students() {
    return (
        <>
            <CrudHead title="Estudiantes" isOpen={true} onClickNew={null} />

            <CrudTable
                titles={["Foto", "Nombres", "apellidos", "cedula", "email"]}
                dataList={[
                    {
                        id: 1,
                        foto: "https://randomuser.me/api/portraits/men/30.jpg",
                        nombres: "Pablo",
                        apellidos: "Neruda",
                        cedula: "1401341232",
                        email: "user@gmail.com",
                    },
                ]}
                onRowPrint={({
                    id,
                    foto,
                    nombres,
                    apellidos,
                    cedula,
                    email,
                }) => (
                    <tr key={id}>
                        <CrudTableTdImage src={foto} alt={"Foto " + nombres} />
                        <CrudTableTdText value={nombres} />
                        <CrudTableTdText value={apellidos} />
                        <CrudTableTdText value={cedula} />
                        <CrudTableTdText value={email} />
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
                title="Estudiante"
                isOpen={true}
                onClickSave={null}
                onClickCancel={null}
            >
                <CrudFormInput label="Nombres" placeholder="Nombres" required />
                <CrudFormInput
                    label="Apellidos"
                    placeholder="Apellidos"
                    required
                />
                <CrudFormInput label="Cedula" placeholder="Cedula" required />
                <CrudFormInput label="Foto" placeholder="Foto" type="file" />
                <CrudFormInput
                    label="Email"
                    placeholder="Email"
                    type="email"
                    required
                ></CrudFormInput>
            </CrudForm>

            <CrudConfirm
                isOpen={false}
                text="¿Seguro de eliminar este estudiante?"
                onClickDelete={null}
                onClickCancel={null}
            />

            <CrudProgress isOpen={false} text="Cargando estudiantes" />
        </>
    );
}
