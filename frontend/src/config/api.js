const apiUrl = process.env.VUE_APP_API_URL;

export default {
    getItems: apiUrl + "/api/items/",
    getItemById: apiUrl + "/api/items/",
    signin: apiUrl + "/api/token/",
    register: apiUrl + "/api/register/",
    getToken: apiUrl + "/api/token/refresh/",
    getUser: apiUrl + "/api/user/",
}