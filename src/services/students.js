import { fetchAdapter } from "../../apiConfig";

const resource = "students";

function mapNames(data) {
    return data.map(
        ({
            id,
            dni,
            name,
            lastname,
            sex,
            instruction,
            address,
            email,
            cellphone,
            phone,
            description,
            entity_name,
            entity_post,
            entity_address,
            entity_phone,
            created_at,
            updated_at,
        }) => ({
            id,
            dni,
            name,
            lastname,
            sex,
            instruction,
            address,
            email,
            cellphone,
            phone,
            description,
            entity_name,
            entity_post,
            entity_address,
            entity_phone,
            created_at,
            updated_at,
        })
    );
}

export async function getStudents() {
    const response = await fetchAdapter({ resource });
    return mapNames(response);
}

export async function storageStudents({ data }) {
    const response = await fetchAdapter({
        resource,
        data,
        method: "POST",
    });
    return response;
}

export async function updateStudents({ data }) {
    const response = await fetchAdapter({
        resource: resource + "/" + data.id,
        data,
        method: "POST",
    });
    return response;
}

export async function destroyStudents({ data }) {
    const response = await fetchAdapter({
        resource: resource + "/" + data.id,
        data,
        method: "DELETE",
    });
    return response;
}
