<template>
    <div class="index-page">
      <!-- 롤링 배너 -->
      <div class="rolling-banner">
        <p v-for="(text, index) in bannerTexts" :key="index">{{ text }}</p>
      </div>
  
      <!-- 검색창 -->
      <div class="search-container">
        <!-- 제목 검색 -->
        <input 
          type="text" 
          v-model="searchQuery" 
          placeholder="제목을 입력하세요" 
          class="search-input"
        />
  
        <!-- 정렬 기준 선택 -->
        <select v-model="sortOption" class="sort-select">
          <option disabled value="">정렬 기준</option>
          <option value="POINT">포인트 순</option>
          <option value="ENDDATE">마감일 순</option>
        </select>
  
        <!-- 정렬 순서 선택 -->
        <select v-model="sortOrder" class="order-select">
          <option disabled value="">정렬 순서</option>
          <option value="ASC">오름차순</option>
          <option value="DESC">내림차순</option>
        </select>
  
        <!-- 찾기 버튼 -->
        <button @click="search" class="search-button">찾기</button>
      </div>
  
      <!-- 게시글 리스트 -->
      <div class="post-list">
        <div v-for="post in posts" :key="post.id" class="post-card">
          <h3 class="post-title">{{ post.title }}</h3>
          <p class="post-content">마감일 : {{ post.enddate }}</p>
          <p class="post-content">포인트 : {{ post.perPoint }}</p>
          <router-link class="read-more-btn" :to="`/survey-detail/${post.surveyId}`">더 보기</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
    name: 'IndexPage',
    data() {
    return {
      // 롤링 배너 텍스트 배열
      bannerTexts: ["Welcome to My App", "Find what you need", "Enjoy your stay!"],

      // 검색 및 정렬 관련 데이터
      searchQuery: "",     // 검색어
      sortOption: "ENDDATE",      // 정렬 기준 (포인트 순, 마감일 순)
      sortOrder: "DESC",       // 정렬 순서 (오름차순, 내림차순)

      // 게시글 목록 데이터
      posts: [],
    };
  },
  computed: {
    
  },
  mounted(){
    this.search();
  },
  methods: {
    search() {
      console.log("검색 실행:", this.searchQuery, this.sortOption, this.sortOrder);
      const requestData = {
        title: this.searchQuery,
        orderType: this.sortOption + "_" + this.sortOrder
      };

      axios.post('/api/survey/list', requestData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response =>{
        this.posts = response.data;
      })
      .catch(error => {
        console.error('오류:', error);
      });
        
    },
    goToSurvey() {
      // 설문조사 페이지로 이동
      this.$router.push(`/surveyDetail/${this.survey.id}`);
    },
  }
};
</script>
  
<style src="@assets/css/indexStyle.css"></style>

  