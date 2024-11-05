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
          <option value="points">포인트 순</option>
          <option value="deadline">마감일 순</option>
        </select>
  
        <!-- 정렬 순서 선택 -->
        <select v-model="sortOrder" class="order-select">
          <option disabled value="">정렬 순서</option>
          <option value="asc">오름차순</option>
          <option value="desc">내림차순</option>
        </select>
  
        <!-- 찾기 버튼 -->
        <button @click="search" class="search-button">찾기</button>
      </div>
  
      <!-- 게시글 리스트 -->
      <div class="post-list">
        <div v-for="post in sortedPosts" :key="post.id" class="post-card">
          <h3 class="post-title">{{ post.title }}</h3>
          <p class="post-content">{{ post.content }}</p>
          <button class="read-more-btn">더 보기</button>
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
      sortOption: "",      // 정렬 기준 (포인트 순, 마감일 순)
      sortOrder: "",       // 정렬 순서 (오름차순, 내림차순)

      // 게시글 목록 데이터
      posts: [
        { id: 1, title: "첫 번째 게시글", content: "첫 번째 게시글의 내용입니다.", points: 5, deadline: '2024-12-10' },
        { id: 2, title: "두 번째 게시글", content: "두 번째 게시글의 내용입니다.", points: 10, deadline: '2024-11-25' },
        { id: 3, title: "세 번째 게시글", content: "세 번째 게시글의 내용입니다.", points: 3, deadline: '2024-10-30' },
      ],
    };
  },
  computed: {
    // 검색어 및 정렬 기준에 따라 정렬된 게시글 목록 반환
    sortedPosts() {
      let filteredPosts = this.posts.filter(post => 
        post.title.includes(this.searchQuery)
      );

      if (this.sortOption) {
        filteredPosts = filteredPosts.sort((a, b) => {
          if (this.sortOption === 'points') {
            return this.sortOrder === 'asc' ? a.points - b.points : b.points - a.points;
          } else if (this.sortOption === 'deadline') {
            const dateA = new Date(a.deadline);
            const dateB = new Date(b.deadline);
            return this.sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
          }
        });
      }

      return filteredPosts;
    }
  },
  methods: {
    search() {
      if (!this.searchQuery) {
        alert("검색어를 입력하세요.");
        return;
      }
      if (!this.sortOption || !this.sortOrder) {
        alert("정렬 기준과 순서를 선택하세요.");
        return;
      }
      //console.log("검색 실행:", this.searchQuery, this.sortOption, this.sortOrder);
      const requestData = {
          title: this.searchQuery,
          orderType: ""
        };
        try {
          const response = axios.get('/api/servey/list', requestData, {
              headers: {
                'Content-Type': 'application/json',
              },
            });
            console.log('응답:', response.data);
          } catch (error) {
            console.error('실패:', error);
            alert("에러가 발생했습니다.")
          }

    },
    
  }
};
</script>
  
  <style src="@/assets/css/indexStyle.css"></style>

  