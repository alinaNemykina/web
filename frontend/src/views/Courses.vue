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
      return this.items.filter(item => item.category === "Грамматические курсы")
    },
    thematicItems: function () {
      return this.items.filter(item => item.category === "Тематические курсы")
    }
  },
  data() {
    return {
      items: [],
    }
  },
  created() {
    const access_token = JSON.parse(localStorage.getItem('access_token'));

    this.$http.get('/api/v1/courses/all', { headers: {
      'Authorization': 'Bearer ' + access_token,
    }, baseURL: 'http://localhost:8081/'})
      .then((response) => {
        console.log(response.data)
        this.items = [...response.data]
        console.log(this.items[0].category)
      })
  }
}
</script>

<style scoped>

</style>
