<template>
  <div>
    <div class="container py-5">
      <h3 class="jumbotron-heading">{{ task.name }}</h3>
      <h6> Введите перевод с большой буквы</h6>
    </div>
    <div class="container">
      <h4>{{ task.translation }}</h4>
    </div>
    <div class="container">
      <form class="form">
        <div class="input-field">
          <input
            id="description"
            type="text"
            v-model.trim="word"
          />
          <label for="description">Перевод</label>
        </div>

        <!--        <button class="btn waves-effect waves-light" type="submit">-->
        <!--          Проверить-->
        <!--        </button>-->
        <button class="btn waves-effect waves-light" v-on:click="handleSubmit">Проверить</button>
      </form>
      <!--      <label for="email">Email</label>-->
      <!--      <small-->
      <!--        class="helper-text invalid"-->
      <!--        v-if="$v.email.$dirty && !$v.email.required"-->
      <!--      >Поле Email не должно быть пустым</small-->
      <!--      >-->
      <!--      <small-->
      <!--        class="helper-text invalid"-->
      <!--        v-else-if="$v.email.$dirty && !$v.email.email"-->
      <!--      >Введите корректный Email</small-->
      <!--      >-->
    </div>
  </div>
</template>

<script>
export default {
  name: "TranslateTask",
  data: () => ({
    word: "",
    task: {}
  }),
  created() {
    const tId = this.$route.params.tId;
    const access_token = JSON.parse(localStorage.getItem('access_token'));

    let uid = localStorage.getItem('user_id')
    uid = uid.substring(1, uid.length - 1)

    this.$http.get('/api/v1/word/' + uid + '/' + tId, {
      headers: {
        'Authorization': 'Bearer ' + access_token,
      }, baseURL: 'http://localhost:8081/'
    })
      .then((response) => {
        console.log(response.data)
        this.task = response.data
      })
  },
  methods: {
    handleSubmit: function () {
      if (this.word === this.task.original) {
        alert('Ваш баланс пополнился на 1 печеньку!')
        let uid = localStorage.getItem('user_id')
        uid = uid.substring(1, uid.length - 1)
        let access_token = JSON.parse(localStorage.getItem('access_token'))
        const tId = this.$route.params.tId;

        if (this.task.status === 'NEW') {
          this.task.status = 'LEARNING'
        } else {
          this.task.status = 'LEARNED'
        }

        const data = {
          "id": uid,
          "status": this.task.status,
          "wordId": tId
        }
        this.$http.post('/api/v1/user2word', data, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + access_token
          }, baseURL: 'http://localhost:8081/'
        })
          .then((response) => {
            console.log(response)
          })
          .catch((error) => console.log(error))
      } else {
        alert('К сожалению, вы не правы...')
      }
      this.$router.push({name: 'Tasks'})
    }
  }
}
</script>

<style scoped>

</style>
