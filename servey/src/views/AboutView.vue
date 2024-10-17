<template>
  <div class="about">
    <h2>엑셀 파일 업로드</h2>
    <input type="file" @change="handleFileUpload" accept=".xlsx, .xls" />
    <button @click="submitFile">파일 업로드</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script>
import axios from "axios";
import { reactive } from "vue";

  export default{
    data() {
      return {
        selectedFile: null,
        list:[]
      };
    },
    mounted() {
      this.init();
    },
    methods: {
      handleFileUpload(event) {
        this.selectedFile = event.target.files[0];  // 파일을 선택
      },
      async submitFile() {
        if (!this.selectedFile) {
          alert('엑셀 파일을 선택하세요.');
          return;
        }

        const formData = new FormData();
        formData.append('file', this.selectedFile);

        try {
          const response = await axios.post('/api/question/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          console.log('응답:', response.data);
        } catch (error) {
          console.error('파일 업로드 실패:', error);
        }
      },
      init(){
        axios.get("/api/servey/list").then(({data}) => {
          this.list = data;
        })
      }
    },
    // setup(){
    //   const state = reactive({
    //     list:[]
    //   })

    //   const init = () => {
    //     axios.get("/api/servey/list").then(({data}) => {
    //       state.list = data;
    //     })
    //     console.log(state.list)
    //   }

    //   init();
    //   return{state,init}
    // }
  }
</script>

