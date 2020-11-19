<template>
  <div>
    <div class="container py-5">
      <h3 class="jumbotron-heading">Рекомендуемые наборы и разговорники</h3>
    </div>

    <div class="album">
      <div class="container">
        <div class="row in-line" v-for="item in items" v-bind:key="item">
          <RecommendedVocabulary v-bind:recommended-vocabulary="item"></RecommendedVocabulary>
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
      items: [
        {
          id: 1,
          title: "Набор слов \"Еда\" ",
          numOfElements: 100,
          imagePath: "img/еда.jpg"
        },
        {
          id: 2,
          title: "Набор слов \"Мебель\" ",
          numOfElements: 100,
          imagePath: "img/мебель.jpg"
        },
        {
          id: 3,
          title: "Набор слов \"Напитки\" ",
          numOfElements: 100,
          imagePath: "img/напитки.jpg"
        },
        {
          id: 4,
          title: "Набор слов \"Семья\" ",
          numOfElements: 100,
          imagePath: "img/семья.png"
        },
        {
          id: 5,
          title: "Набор слов \"Строение человека\" ",
          numOfElements: 100,
          imagePath: "img/строение%20человека.jpg"
        },
        {
          id: 6,
          title: "Набор слов \"Чувства и эмоции\" ",
          numOfElements: 99,
          imagePath: "img/чувства%20и%20эмоции.jpg"
        },
      ],
    }
  }
}
</script>

<style scoped>

</style>
