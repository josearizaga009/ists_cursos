import { fetchAdapter } from "../../apiConfig";

const resource = "inscriptions";

function mapNames(data) {
    return data.map(
        ({
            id,
            approval,
            certificate_code,
            student_id,
            course_id,
            created_at,
            updated_at,
        }) => ({
            id,
            approval,
            certificate_code,
            student_id,
            course_id,
            created_at,
            updated_at,
        })
    );
}

export async function getInscriptions() {
    const response = await fetchAdapter({ resource });
    return mapNames(response);
}

export async function storageInscriptions({ data }) {
    const response = await fetchAdapter({
        resource,
        data,
        method: "POST",
    });
    return response;
}

export async function updateInscriptions({ data }) {
    const response = await fetchAdapter({
        resource: resource + "/" + data.id,
        data,
        method: "POST",
    });
    return response;
}

export async function destroyInscriptions({ data }) {
    const response = await fetchAdapter({
        resource: resource + "/" + data.id,
        data,
        method: "DELETE",
    });
    return response;
}
