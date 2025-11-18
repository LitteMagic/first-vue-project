<script setup>
import { ref,onMounted } from 'vue';
import axios from "axios";
let articles = ref([]);

let searchCondition = ref({
  title:"",
  author:""
});


axios.get("http://localhost:8080/getAllArticle").then(
    (result) => {
      articles.value = result.data;
    }
).catch(
    (err) => {
      console.log(err);
    });
</script>

<template>

  <div>
    标题：<input type="text" placeholder="文章标题" v-model="searchCondition.title"/>
    作者：<input type="text" placeholder="作者" v-model="searchCondition.author"/>
    <table border="1 soild">
      <tr>
        <td>标题</td>
        <td>作者</td>
        <td>点击量</td>
      </tr>
      <tr v-for="article in articles">
        <td>{{ article.title }}</td>
        <td>{{ article.author }}</td>
        <td>{{ article.clickCount }}</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>

</style>