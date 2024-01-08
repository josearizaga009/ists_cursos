import { fetchAdapter } from "../../apiConfig";

const resource = "images";

function mapNames(data) {
    return data.map(
        ({ id, image, description, created_at, updated_at, image_url }) => ({
            id,
            image,
            description,
            created_at,
            updated_at,
            image_url,
        })
    );
}

export async function getImages() {
    const response = await fetchAdapter({ resource });
    return mapNames(response);
}

export async function storageImages({ data }) {
    const response = await fetchAdapter({
        resource,
        data,
        method: "POST",
    });
    return response;
}

export async function updateImages({ data }) {
    const response = await fetchAdapter({
        resource: resource + "/" + data.id,
        data,
        method: "POST",
    });
    return response;
}

export async function destroyImages({ data }) {
    const response = await fetchAdapter({
        resource: resource + "/" + data.id,
        data,
        method: "DELETE",
    });
    return response;
}
