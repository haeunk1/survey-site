<template>
    <div class="survey-page">
      <!-- 설문조사 제목 -->
      <h1 class="survey-title">{{ survey.title }}</h1>
  
      <!-- 설문조사 문항 -->
      <div v-for="(question, index) in questions" :key="question.id" class="survey-question">
        <p>{{ index + 1 }}. {{ question.text }}</p>
        <textarea 
          v-model="answers[question.id]" 
          class="survey-answer" 
          placeholder="답변을 입력하세요"></textarea>
      </div>
  
      <!-- 설문조사 제출 버튼 -->
      <button @click="submitSurvey" class="submit-survey-btn">설문조사 제출</button>
    </div>
  </template>
  
  <script>
  import axios from "axios";

  export default {
    name: 'SurveyPage',
    props:['id'],
    data() {
      return {
        // 설문조사 정보
        survey: {
          id: 1,
          title: '설문조사 제목 예시',
        },
        // 문항 리스트
        questions: [
          { id: 1, text: '이 제품의 장점을 알려주세요.' },
          { id: 2, text: '이 제품의 단점을 알려주세요.' },
          { id: 3, text: '추가로 하고 싶은 말이 있나요?' },
        ],
        // 답변 데이터
        answers: {},
      };
    },
    beforeRouteEnter(to, from, next){ //컴포넌트 인스턴스가 생성되기 전에 실행
      //설문조사 참여 권한 확인
      axios.get(`/api/survey/check/submit-status/${to.params.id}`)
      .then(response => {
        console.log(response);
      })
      .catch(error=>{
        console.log(error);
      })
      next();

    },
    methods: {
      submitSurvey() {
        console.log('제출된 답변:', this.answers);
        alert('설문조사가 제출되었습니다!');
        // 설문조사 제출 로직 추가 (예: 서버로 데이터 전송)
      },
    },
  };
  </script>
  
 <style src="@/assets/css/survey/surveyPageStyle.css"></style>