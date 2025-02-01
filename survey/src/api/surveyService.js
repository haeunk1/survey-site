import apiClient from '@/api/apiClient';

export const checkSubmitStatus = async(id) =>{
    try{
        const response = await apiClient.get(`/api/survey/check/submit-status/${id}`);
        return response.data;
    }catch(error){
        console.error("응답 실패 : ",error);
        throw error;
    }
}