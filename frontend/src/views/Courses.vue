<template>
  <div>
    <div class="container py-5">
      <h3 class="jumbotron-heading">Все курсы</h3>
    </div>
    <div class="container">
      <h4>Грамматические курсы</h4>
    </div>

    <div class="album">
      <div class="container">
        <div class="row" v-for="item in grammaticalItems" v-bind:key="item">
          <Course v-bind:course="item"></Course>

        </div>
      </div>
    </div>

    <div class="container py-2">
      <h4>Тематические курсы</h4>
    </div>

    <div class="album">
      <div class="container">
        <div class="row" v-for="item in thematicItems" v-bind:key="item">
          <Course v-bind:course="item"></Course>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Course from "@/components/Course";

export default {
  name: "Courses",
  components: {Course},
  computed: {
    grammaticalItems: function () {
      return this.items.filter(item => item.category === "grammatical")
    },
    thematicItems: function () {
      return this.items.filter(item => item.category === "thematic")
    }
  },
  data() {
    return {
      items: [
        {
          id: 1,
          name: "Для начинающего уровня",
          numberOfTopics: 6,
          category: "grammatical"
        },
        {
          id: 2,
          name: "Для среднего уровня",
          numberOfTopics: 4,
          category: "grammatical"
        },
        {
          id: 3,
          name: "Для продвинутого уровня",
          numberOfTopics: 4,
          category: "grammatical"
        },
        {
          id: 4,
          name: "Для общения",
          numberOfTopics: 1,
          category: "thematic"
        },
        {
          id: 5,
          name: "Для начинающих",
          numberOfTopics: 5,
          category: "thematic"
        },
        {
          id: 6,
          name: "Для экзаменов",
          numberOfTopics: 3,
          category: "thematic"
        },
        {
          id: 7,
          name: "Для работы",
          numberOfTopics: 5,
          category: "thematic"
        },
        {
          id: 8,
          name: "Для увлечений",
          numberOfTopics: 3,
          category: "thematic"
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
