import { fetchAdapter } from "../../apiConfig";

const resource = "templates";

function mapNames(data) {
    return data.map(({ id, name, code, created_at, updated_at }) => ({
        id,
        name,
        code,
        created_at,
        updated_at,
    }));
}

export async function getTemplates() {
    const response = await fetchAdapter({ resource });
    return mapNames(response);
}

export async function storageTemplates({ data }) {
    const response = await fetchAdapter({
        resource,
        data,
        method: "POST",
    });
    return response;
}

export async function updateTemplates({ data }) {
    const response = await fetchAdapter({
        resource: resource + "/" + data.id,
        data,
        method: "POST",
    });
    return response;
}

export async function destroyTemplates({ data }) {
    const response = await fetchAdapter({
        resource: resource + "/" + data.id,
        data,
        method: "DELETE",
    });
    return response;
}
