<template>
    <div class="survey-detail-page">
      <!-- 설문조사 제목 -->
      <h1 class="survey-title">{{ survey.title }}</h1>
  
      <!-- 설문조사 설명 -->
      <p class="survey-description">{{ survey.description }}</p>
  
      <!-- 설문조사 정보 -->
      <div class="survey-info">
        <p>마감일: {{ survey.enddate }}</p>
        <p>참여 시 포인트: {{ survey.perPoint }}P</p>
      </div>
  
      <!-- 설문조사 하러 가기 버튼 -->
      <button @click="goToSurvey" class="go-to-survey-btn">설문조사 하러 가기</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SurveyDetailPage',
    props:['id'],
    data() {
      return {
        // 예시 설문조사 데이터
        survey: {
          id: 1,
          title: '설문조사 제목 예시',
          description: '이 설문조사는 사용자 경험에 대한 피드백을 얻기 위한 것입니다. 설문조사는 약 5분 정도 소요됩니다.',
          enddate: '2024-12-31',
          perPoint: 100,
        },
        surveyId:null,
      };
    },
    mounted(){
        this.surveyId = this.$route.params.id;
        console.log(this.surveyId);
    },
    methods: {
      goToSurvey() {
        // 설문조사 페이지로 이동
        this.$router.push(`/survey/${this.survey.id}`);
      },
    },
  };
  </script>
  
  <style src="@/assets/css/survey/surveyDetailPageStyle.css"></style>

  