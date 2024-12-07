<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>엑셀 파일 업로드</h2>
    <input type="file" @change="handleFileUpload" accept=".xlsx, .xls" />
    <button @click="submitFile">파일 업로드</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      selectedFile: null,
      list:[],
      survey_id:1
    };
  },

  name: 'HelloWorld',
  props: {
    msg: String
  },

  mounted() {
    //this.init();
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
      formData.append('survey_id',this.survey_id);
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
      axios.get("/api/survey/list").then(({data}) => {
        this.list = data;
      })
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
