export const API_URL = "https://ists-api.ideasoft.site/api/v1/";

export async function fetchAdapter({
    resource,
    method = "GET",
    data = null,
    printResponse = false,
}) {
    const body = data ? JSON.stringify(data) : null;
    const response = await fetch(API_URL + resource, {
        method,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body,
    }).then((res) => res.json());
    if (printResponse) console.log(response);
    if (response.success) return response.data;
    return false;
}
