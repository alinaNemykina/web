<template>
  <div>
    <div class="container py-5">
      <h3 class="jumbotron-heading">Рекомендуемые наборы и разговорники</h3>
    </div>

    <div class="album">
      <div class="container">
        <div class="row">
          <RecommendedVocabulary v-bind:recommended-vocabulary="items[0]"></RecommendedVocabulary>
          <RecommendedVocabulary v-bind:recommended-vocabulary="items[1]"></RecommendedVocabulary>
          <RecommendedVocabulary v-bind:recommended-vocabulary="items[2]"></RecommendedVocabulary>
        </div>
        <div class="row">
          <RecommendedVocabulary v-bind:recommended-vocabulary="items[3]"></RecommendedVocabulary>
          <RecommendedVocabulary v-bind:recommended-vocabulary="items[4]"></RecommendedVocabulary>
          <RecommendedVocabulary v-bind:recommended-vocabulary="items[5]"></RecommendedVocabulary>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecommendedVocabulary from "@/components/RecommendedVocabulary";
export default {
  name: "DictionaryRecommendation",
  components: {RecommendedVocabulary},
  data() {
    return {
      items: [],
    }
  },
  created() {
    const access_token = JSON.parse(localStorage.getItem('access_token'));

    this.$http.get('/api/v1/word_set/all', { headers: {
        'Authorization': 'Bearer ' + access_token,
      }, baseURL: 'http://localhost:8081/'})
      .then((response) => {
        this.items = response.data
      })
  }
}
</script>

<style scoped>

</style>
