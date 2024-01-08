import { fetchAdapter } from "../../apiConfig";

const resource = "institutions";

function mapNames(data) {
    return data.map(({ id, name, initials, logo }) => ({
        id,
        name,
        initials,
        logo,
    }));
}

export async function getInstitutions() {
    const response = await fetchAdapter({ resource });
    return mapNames(response);
}

export async function storageInstitutions({ data }) {
    const response = await fetchAdapter({
        resource,
        data,
        method: "POST",
    });
    return response;
}

export async function updateInstitutions({ data }) {
    const response = await fetchAdapter({
        resource: resource + "/" + data.id,
        data,
        method: "POST",
    });
    return response;
}

export async function destroyInstitutions({ data }) {
    const response = await fetchAdapter({
        resource: resource + "/" + data.id,
        data,
        method: "DELETE",
    });
    return response;
}
