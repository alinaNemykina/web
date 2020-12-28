<template>
  <div>
    <div class="container py-5">
      <h3 class="jumbotron-heading">Мой словарь</h3>
    </div>
    <!--    <div class="row" v-for="item in this.words" v-bind:key="item">-->
    <!--&lt;!&ndash;      <Course v-bind:course="item"></Course>&ndash;&gt;-->
    <!--      {{item.original}} {{item.translation}} {{item.status}}-->
    <!--    </div>-->


    <div class="album">
      <div class="container">
        <div class="text-center p-5 rounded mt-3">
          <!--          <div class="row" v-for="item in this.words" v-bind:key="item.id">-->
          <!--            <h5>{{ item.original }} - {{ item.translation }}</h5>-->
          <!--            <h5 align="right">{{ item.status }}</h5>-->
          <!--            <h5 align="right">Текст справа страницы.</h5>-->

          <table>
            <tr>
              <th>Слово</th>
              <th>Перевод</th>
              <th>Статус</th>
            </tr>
            <!--              <div class="row" v-for="item in this.words" v-bind:key="item.id">-->
            <tr v-for="item in this.words" v-bind:key="item.id">
              <td>{{ item.original }}</td>
              <td>{{ item.translation }}</td>
              <td>{{ item.status }}</td>
            </tr>
            <!--              </div>-->
          </table>

          <!--          </div>-->
          <div class="text-center p-5 rounded mt-3">
          <router-link to="/dictionary" class="btn waves-effect waves-light">
            Назад
            <!--          <i class="material-icons right">send</i>-->
          </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllWords",
  data() {
    return {
      words: []
    }
  },
  created() {
    const user_id = JSON.parse(localStorage.getItem('user_id'));
    const access_token = JSON.parse(localStorage.getItem('access_token'));

    this.$http.get('/api/v1/user2word/' + user_id, {
      headers: {
        'Authorization': 'Bearer ' + access_token,
      }, baseURL: 'http://localhost:8081/', //params: {id: user_id}
    })
      .then((response) => {
        this.words = response.data
        console.log(this.words)
      })
  }
}
</script>

<style scoped>

</style>
