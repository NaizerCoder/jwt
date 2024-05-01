import router from "./router.js";
import axios from "axios";

const api = axios.create();

api.interceptors.request.use(config => {

        if (localStorage.getItem('access_token')) {
            config.headers.authorization = `Bearer ${localStorage.getItem('access_token')}`

        }
        return config

    },
    error => {
        console.log(11111);
    })

//response
api.interceptors.response.use({}, error => {

    if (error.response.data.message === "Token has expired") {

        return axios.post('/api/auth/refresh', {}, {

                headers: {
                    'authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            }
        ).then(res => {
            localStorage.setItem('access_token',res.data.access_token)
            error.config.headers.authorization = `Bearer ${res.data.access_token}` //обновить конфиг
            return api.request(error.config) //вызвать новый конфиг
        })

    }
if(error.response.status === 401)
    router.push({name: 'user.login'})
})

export default api;
