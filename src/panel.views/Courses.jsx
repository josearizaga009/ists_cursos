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

export default function Courses() {
    return (
        <>
            <CrudHead title="Cursos" isOpen={true} onClickNew={null} />

            <CrudTable
                titles={[
                    "Foto",
                    "Nombre",
                    "Duracion",
                    "Cupos",
                    "fecha de Inicio",
                ]}
                dataList={[
                    {
                        id: 1,
                        foto: "https://www.orbit.es/wp-content/uploads/2021/01/Sage200-Advanced-integrar.jpg",
                        nombre: "Fundamentos de Programacion",
                        duracion: "30",
                        cupos: "140",
                        fecha_inicio: "15/01/2023",
                    },
                ]}
                onRowPrint={({
                    id,
                    foto,
                    nombre,
                    duracion,
                    cupos,
                    fecha_inicio,
                }) => (
                    <tr key={id}>
                        <CrudTableTdImage src={foto} alt={"Foto " + nombre} />
                        <CrudTableTdText value={nombre} />
                        <CrudTableTdText value={duracion} />
                        <CrudTableTdText value={cupos} />
                        <CrudTableTdText value={fecha_inicio} />
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
                title="Curso"
                isOpen={true}
                onClickSave={null}
                onClickCancel={null}
            >
                <CrudFormInput label="Nombre" placeholder="Nombre" required />
                <CrudFormInput
                    label="Duracion"
                    placeholder="Duracion"
                    required
                />
                <CrudFormInput label="Cupos" placeholder="Cupos" required />
                <CrudFormInput label="Foto" placeholder="Foto" type="file" />
                <CrudFormInput
                    label="Fecha de Inicio"
                    placeholder="Fecha de Inicio"
                    type="date"
                    required
                ></CrudFormInput>
            </CrudForm>

            <CrudConfirm
                isOpen={false}
                text="¿Seguro de eliminar este curso?"
                onClickDelete={null}
                onClickCancel={null}
            />

            <CrudProgress isOpen={false} text="Cargando cursos" />
        </>
    );
}
