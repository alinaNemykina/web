<template>
  <div class="col-md-3">
    <div class="card mb-2 mr-10 shadow-sm">
      <img :src="recommendedVocabulary.imagePathUri" class="card-img-top set-image"/>
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center">
          <div class="card-text">
            Набор слов "{{ recommendedVocabulary.name }}"
          </div>
        </div>
<!--        <p><small class="text-muted">{{ }} 1 слов(-a)</small></p>-->
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group py-2">
<!--            <button-->
<!--              type="button"-->
<!--              class="btn btn-sm btn-outline-secondary"-->
<!--            >-->
<!--              Просмотреть-->
<!--            </button>-->
<!--            <button-->
<!--              type="button"-->
<!--              class="btn btn-sm btn-outline-secondary"-->
<!--            >-->
<!--              Добавить-->
<!--            </button>-->
            <button class="btn waves-effect waves-light" v-on:click="handleSubmit">Добавить</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommendation",
  props: ['recommendedVocabulary'],
  handleSubmit() {
    let uid = localStorage.getItem('user_id')
    uid = uid.substring(1, uid.length - 1)
    let access_token = JSON.parse(localStorage.getItem('access_token'))
    // let wId = this.recommendedVocabulary[0].words.id
    let wId = 10
    const data = {
      "id": uid,
      "status": "NEW",
      "wordId": wId
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
  }
}
</script>

<style scoped>

</style>
