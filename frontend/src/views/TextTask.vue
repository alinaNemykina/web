<template>
  <div>
    <div class="container py-5">
      <h3 class="jumbotron-heading">{{ this.task.name }}</h3>
    </div>
    <main class="container">
      <div class=" p-5 rounded mt-3">
        <p class="lead">{{this.task.text}}</p>

        <router-link to="/tasks" class="btn waves-effect waves-light">
          Назад
<!--          <i class="material-icons right">send</i>-->
        </router-link>
        <button class="btn waves-effect waves-light" v-on:click="handleSubmit">Всё ясно!</button>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "TextTask",
  data: () => ({
    task: {}
  }),
  created() {
    const tId = this.$route.params.tId;
    const access_token = JSON.parse(localStorage.getItem('access_token'));

    this.$http.get('/api/v1/tasks/text_exercise/' + tId, { headers: {
        'Authorization': 'Bearer ' + access_token,
      }, baseURL: 'http://localhost:8081/'})
      .then((response) => {
        console.log(response.data)
        this.task = response.data
      })
  },
  methods: {
    handleSubmit: function () {
      alert('Ваш баланс пополнился на ' + this.task.cookies + ' печенек!')
      // 'LEARNED'
      // const submissionData = {
      //   username: this.username,
      //   password: this.password,
      // }
      // this.$http.post('/user/register', submissionData)
      //   .then((response) => {
      //     localStorage.setItem('userData', JSON.stringify(response.data))
      //     router.push({ name: 'Profile' })
      //   })
      //   .catch((error) => alert(error.response.data.statusText))
      let uid = localStorage.getItem('user_id')
      uid = uid.substring(1, uid.length - 1)
      let access_token = JSON.parse(localStorage.getItem('access_token'))
      const tId = this.$route.params.tId;
      const data = {
        "id": uid,
        "statusTaskEnum": "LEARNED",
        "textId": tId
      }
      this.$http.post('/api/v1/user2text', data, { headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + access_token
        }, baseURL: 'http://localhost:8081/'})
        .then((response) => {
          console.log(response)
          this.$router.push({ name: 'Tasks' })
        })
        .catch((error) => console.log(error))
    }
  }
}
</script>

<style scoped>

</style>
