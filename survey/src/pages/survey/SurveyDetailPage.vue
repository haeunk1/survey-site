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
      <p>선착순 : {{ survey.limitSubmit }}</p>
    </div>

    <!-- 설문조사 하러 가기 버튼 -->
    <button @click="goToSurvey" class="go-to-survey-btn">설문조사 하러 가기</button>
  </div>
</template>
  
<script>
  import axios from 'axios'

  export default {
    name: 'SurveyDetailPage',
    props:['id'],
    data() {
      return {
        // 예시 설문조사 데이터
        survey: {},
      };
    },
    mounted(){
        this.init();
    },
    methods: {
      goToSurvey() {
        // 설문조사 페이지로 이동
        this.$router.push(`/survey/${this.id}`);
      },
      init(){
        axios.get(`/api/survey/${this.id}`)
        .then(response =>{
          this.survey = response.data;
          console.log(this.survey)
        })
        .catch(error => {
          console.error('오류:', error);
        });
      }
    },
  };
</script>
  
<style src="@/assets/css/survey/surveyDetailPageStyle.css"></style>

  