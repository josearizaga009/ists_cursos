import { fetchAdapter } from "../../apiConfig";

const resource = "social-networks";

function mapNames(data) {
    return data.map(
        ({ id, name, value, url, icon, color, created_at, updated_at }) => ({
            id,
            name,
            valor: value,
            url,
            icono: icon,
            color,
            created_at,
            updated_at,
        })
    );
}

export async function getSocialNetworks() {
    const data = await fetchAdapter({ resource });
    return mapNames(data);
}

export async function createSocialNetwork({ data }) {
    const response = await fetchAdapter({
        resource,
        data,
        method: "POST",
    });
    return response;
}

export async function updateSocialNetwork({ data }) {
    const response = await fetchAdapter({
        resource: resource + "/" + data.id,
        data,
        method: "POST",
    });
    return response;
}

export async function destroySocialNetwork({ data }) {
    const response = await fetchAdapter({
        resource: resource + "/" + data.id,
        data,
        method: "DELETE",
    });
    return response;
}
