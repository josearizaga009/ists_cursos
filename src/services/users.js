import { fetchAdapter } from "./../../apiConfig";

const resource = "users";

function mapNames(data) {
    return data.map(
        ({
            id,
            name,
            lastname,
            dni,
            signature,
            email,
            role_name,
            created_at,
            updated_at,
            photo_url,
            signature_url,
            description,
            facebook,
        }) => ({
            id,
            name,
            lastname,
            dni,
            signature,
            email,
            created_at,
            updated_at,
            photo: photo_url,
            signature_url,
            rol: role_name,
            description,
            fb_url: facebook,
        })
    );
}

export async function getUsers() {
    const response = await fetchAdapter({ resource });
    return mapNames(response);
}

export async function storageUsers({ data }) {
    const response = await fetchAdapter({
        resource,
        data,
        method: "POST",
    });
    return response;
}

export async function updateUsers({ data }) {
    const response = await fetchAdapter({
        resource: resource + "/" + data.id,
        data,
        method: "POST",
    });
    return response;
}

export async function destroyUsers({ data }) {
    const response = await fetchAdapter({
        resource: resource + "/" + data.id,
        data,
        method: "DELETE",
    });
    return response;
}
