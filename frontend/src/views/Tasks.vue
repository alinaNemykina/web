<template>
  <div>
    <div class="container py-5">
      <h3 class="jumbotron-heading">План дня</h3>
    </div>
    <div class="album">
      <div class="container" v-for="item in items" v-bind:key="item">
        <Task v-bind:task="item"></Task>
      </div>
    </div>
  </div>
</template>

<script>
import Task from "@/components/Task";

export default {
  name: "Tasks",
  components: {Task},
  data() {
    return {
      items: [
        {
          id: 1,
          category: "Прокачаем грамматику?",
          title: "Present Simple",
          explanation: "Много грамматики не бывает!",
          imagePath: "img/grammar.png"
        },
        {
          id: 2,
          category: "Слабо отгадать все слова?",
          title: "Перевод-слово",
          explanation: "Давай попробуем вместе!",
          imagePath: "img/translation_.jpeg"
        },
        {
          id: 3,
          category: "Читай скорее текст!",
          title: "Good friends are like stars.",
          explanation: "И добавляй слова",
          imagePath: "img/reading.jpeg"
        },
        {
          id: 4,
          category: "Смотри классное видео!",
          title: "Clothes Vocabulary 1 - Sentences by ELF Learning",
          explanation: "И учи незнакомые слова!",
          imagePath: "img/translation.jpeg"
        }
      ]
    }
  }
};
</script>

<style scoped></style>
