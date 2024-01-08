import { fetchAdapter } from "../../apiConfig";

const resource = "courses";

function formatRow({
    id,
    image_url,
    name,
    duration,
    date_start,
    date_end,
    quota,
    whatsapp,
}) {
    return {
        id,
        name,
        duration,
        date_start,
        date_end,
        quota,
        whatsapp,
        image: image_url,
        description: "holi",
    };
}

function mapNames(data) {
    return data.map((row) => formatRow(row));
}

export async function getCourses() {
    const response = await fetchAdapter({ resource });
    return mapNames(response);
}

export async function showCourse({ id }) {
    const response = await fetchAdapter({
        resource: resource + "/" + id + "?includeInscriptions",
        printResponse: true,
    });
    const data = formatRow(response);
    return response ? data : false;
}

export async function storageCourses({ data }) {
    const response = await fetchAdapter({
        resource,
        data,
        method: "POST",
    });
    return response;
}

export async function updateCourses({ data }) {
    const response = await fetchAdapter({
        resource: resource + "/" + data.id,
        data,
        method: "POST",
    });
    return response;
}

export async function destroyCourses({ data }) {
    const response = await fetchAdapter({
        resource: resource + "/" + data.id,
        data,
        method: "DELETE",
    });
    return response;
}
