<template>
  <ul>
    <ask-question
      v-for="res in resources"
      :key="res.id"
      :id="res.id"
      :prompt="res.prompt"
      :response="res.response"
      :link="res.link"
    ></ask-question>
  </ul>
</template>

<script>
import AskQuestion from './AskQuestion.vue';

export default {
  inject: ['resources'],
  components: {
    AskQuestion
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
