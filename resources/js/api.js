import router from "./router.js";
import axios from "axios";

const api = axios.create();

api.interceptors.request.use(config => {

        if (localStorage.getItem('access_token')) {
            config.headers = {
                'authorization': `Bearer ${localStorage.getItem('access_token')}`
            }
        }
        return config

    },
    error => {
        console.log(11111);
    })

//response
api.interceptors.response.use({}, error =>{

    if(error.response.status === 401)
        router.push({name: 'user.login'})
})

export default api;
