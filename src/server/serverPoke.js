import axios from "axios";

const withTimeout = axios.create({
    timeout: 180 * 1000,
    baseURL: "https://pokeapi.co/api/v2"
})

/*
withTimeout.interceptors.request.use((request) => {
    request.headers = {
        Authorization: "token"
    }
})
*/
withTimeout.interceptors.response.use(
    (response) => { return response },
    (error) => {
        switch (error.response?.status) {
            case 401:
                window.alert("não autorizado")
                break;
            default:
                window.alert('algo de errado aconteceu')
                break;
        }
        return Promise.reject(error)
    }
)

const withToken = axios.create()

export default { withTimeout, withToken }