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
      items: []
    }
  },
  created() {
    const access_token = JSON.parse(localStorage.getItem('access_token'));
    // const uid = localStorage.getItem('user_id')

    this.$http.get('/api/v1/tasks/' + '85e1ffd0-40a9-11eb-b378-0242ac130002', {
      headers: {
        'Authorization': 'Bearer ' + access_token,
      }, baseURL: 'http://localhost:8081/'
    })
      .then((response) => {
        let data = response.data
        this.items.push(data.courseTaskReadDto, data.textExerciseReadDto, data.videoExerciseReadDto, data.wordReadDto)
        for (let i = 0; i < 4; i++) {
          this.items[i].front_id = i + 1
        }

        localStorage.setItem('tasks', this.items[1])

        this.items[0].href = "CourseTask"
        this.items[1].href = "TextTask"
        this.items[2].href = "VideoTask"
        this.items[3].href = "TranslateTask"

      })
  }
};
</script>

<style scoped></style>
