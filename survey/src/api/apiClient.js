import axios from 'axios';
import store from '@/store'
//Axios 인스턴스 생성
const apiClient = axios.create({
    headers:{
        'Content-Type' : 'application/json'
    }
});

//요청 인터셉터 : 보든 요청에 JWT포함
apiClient.interceptors.request.use(
    (config) => {
        const token = store.state.authStore.accessToken;
        if(token){
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        console.log(config)
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default apiClient;


