import apiClient from '@api/apiClient';

//설문조사 참여 조건 체크(제출이력 없음, 잔여포인트 있음.)
export const checkSubmitStatus = async(id) =>{
    try{
        const response = await apiClient.get(`/api/survey/check/submit-status/${id}`);
        return response.data;
    }catch(error){
        console.error("응답 실패 : ",error);
        throw error;
    }
}