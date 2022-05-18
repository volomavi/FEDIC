<template>
<div>
  <ul>
    <answers
      v-for="res in resources"
      :key="res.id"
      :id="res.id"
      :prompt="res.prompt"
      :response="res.response"
      :link="res.link"
    ></answers>
  </ul>
  </div>
</template>

<script>
import Answers from './Answers.vue';

export default {
  inject: ['resources'],
  components: {
    Answers
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
