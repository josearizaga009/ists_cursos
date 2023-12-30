import CrudHead from "../panel.components/CrudHead";
import CrudTable from "../panel.components/CrudTable";
import CrudForm from "../panel.components/CrudForm";
import CrudConfirm from "../panel.components/CrudConfirm";
import CrudProgress from "../panel.components/CrudProgress";

export default function Users() {
    return (
        <>
            <CrudHead title="Usuarios" isOpen={true} />

            <CrudTable isOpen={true} />

            <CrudForm isOpen={true} />

            <CrudConfirm isOpen={false} />

            <CrudProgress isOpen={false} />
        </>
    );
}
