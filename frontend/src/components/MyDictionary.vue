<template>
  <div>
    <div class="container py-5">
      <h3 class="jumbotron-heading">Мой словарь</h3>
    </div>

    <div class="container">
      <div class="card-group">
        <div class="card mb-3" style="max-width: 400px;">
          <div class="row no-gutters">
            <svg
              class="bd-placeholder-img"
              width="60"
              height="60"
              xmlns="http://www.w3.org/2000/svg"
            >
              <image
                height="60"
                width="60"
                xlink:href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICAgIDxwYXRoIGZpbGw9IiM3RTkxOUYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkgMTFoMTd2MThIOGEyIDIgMCAwIDEtMi0yVjVhMiAyIDAgMCAxIDItMmgxOHYySDlhMSAxIDAgMCAwLTEgMXY0YTEgMSAwIDAgMCAxIDF6bTUuNzk1IDEzaDEuNzk0bC0yLjc4Mi03Ljg4NWgtMi4wMzZMOSAyNGgxLjc5NGwuNTctMS44N2gyLjg2MmwuNTcgMS44N3ptLS45NjYtMy4yNjZoLTIuMDQ3Yy41NTktMS44MDguODk3LTIuOTQxIDEuMDE1LTMuNC4wMjkuMTMuMDc2LjMwNS4xNDMuNTI3LjA2Ni4yMjIuMzYyIDEuMTguODg5IDIuODczek0yMS41MzcgMjRoMS4xNDR2LTQuMDAxYzAtLjcxNy0uMjE1LTEuMjUtLjY0NC0xLjYwMS0uNDMtLjM1MS0xLjA0OC0uNTI2LTEuODUzLS41MjYtLjg0MiAwLTEuNjA4LjE4LTIuMy41NDJsLjU0MyAxLjEwN2MuNjQ4LS4yOSAxLjIxMi0uNDM2IDEuNjkyLS40MzYuNjIzIDAgLjkzNS4zMDUuOTM1LjkxNHYuMjYzbC0xLjA0Mi4wMzJjLS44OTkuMDMyLTEuNTcxLjItMi4wMTcuNTAyLS40NDYuMzAzLS42NjkuNzczLS42NjkgMS40MSAwIC42MDkuMTY2IDEuMDc4LjQ5NyAxLjQwNy4zMzEuMzMuNzg1LjQ5NCAxLjM2Mi40OTQuNDY5IDAgLjg1LS4wNjcgMS4xNDEtLjIwMS4yOTItLjEzNC41NzYtLjM3NS44NTEtLjcyMmguMDQzbC4zMTcuODE2em0tLjQ4My0yLjc4MnYuNDk0YzAgLjM2Mi0uMTE0LjY1Mi0uMzQxLjg3LS4yMjguMjE4LS41MzEuMzI4LS45MS4zMjgtLjUzIDAtLjc5Ni0uMjMxLS43OTYtLjY5MyAwLS4zMjIuMTE3LS41NjIuMzUtLjcyLjIzMi0uMTU3LjU4Ny0uMjQzIDEuMDYzLS4yNThsLjYzNC0uMDIxek0xMSA3aDEzdjJIMTFhMSAxIDAgMSAxIDAtMnoiLz4KPC9zdmc+Cg=="
              ></image>
            </svg>
            <div class="card-body">
              <h5 class="card-title">
                <a href="/all_words">Посмотреть</a>
                <!--                <router-link to="{{ MyDictionary}}">Посмотреть</router-link>-->
              </h5>

              <!--              <router-link to="{{ MyDictionary}}" class="card-title">-->
              <!--                Посмотреть-->
              <!--                          <i class="material-icons right">send</i>-->
              <!--              </router-link>-->
            </div>
          </div>
        </div>
        <div class="card mb-3" style="max-width: 540px;">
          <div class="row ml-1">
            <div class="col py-1">
              Новые слова
              <p><small class="text-muted">{{ newStatus }} слов</small></p>
            </div>
            <div class="col py-1">
              На изучении
              <p><small class="text-muted">{{ learningStatus }} слов</small></p>
            </div>
            <div class="col py-1">
              Изучено
              <p><small class="text-muted">{{ learnedStatus }} слов</small></p>
            </div>
            <div class="col py-3">
              <!--              <button type="button" class="btn btn-sm btn-outline-secondary">-->
              <!--                <router-link to="/translate_task/:tId" class="btn btn-sm btn-outline-secondary">-->
              <!--                  Учить слова-->
              <!--                  <i class="material-icons right">send</i>-->
              <!--                </router-link>-->

              <a href="/tasks" class="btn waves-effect waves-light">
                Учить слова
                <i class="material-icons right">send</i>
              </a>
              <!--              </button>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyDictionary",
  data() {
    return {
      learnedStatus: 0,
      learningStatus: 0,
      newStatus: 0,
      tId: 0,
      translateTask: "TranslateTask"
    }
  },
  created() {
    const user_id = JSON.parse(localStorage.getItem('user_id'));
    const access_token = JSON.parse(localStorage.getItem('access_token'));

    this.$http.get('/api/v1/user2word/count/' + user_id, {
      headers: {
        'Authorization': 'Bearer ' + access_token,
      }, baseURL: 'http://localhost:8081/', //params: {id: user_id}
    })
      .then((response) => {
        this.newStatus = response.data.newStatus
        this.learningStatus = response.data.learningStatus
        this.learnedStatus = response.data.learnedStatus
      })

    this.$http.get('/api/v1/tasks/' + user_id, {
      headers: {
        'Authorization': 'Bearer ' + access_token,
      }, baseURL: 'http://localhost:8081/'
    })
      .then((response) => {
        this.tId = response.data.wordReadDto.id
        console.log(response.data.wordReadDto.id)
      })
  },
  // methods: {
  //   handleSubmit() {
  //     const user_id = JSON.parse(localStorage.getItem('user_id'));
  //     const access_token = JSON.parse(localStorage.getItem('access_token'));
  //
  //     this.$http.get('/api/v1/tasks/' + user_id, {
  //       headers: {
  //         'Authorization': 'Bearer ' + access_token,
  //       }, baseURL: 'http://localhost:8081/'
  //     })
  //       .then((response) => {
  //         this.tId = response.data.wordReadDto.id
  //       })
  //     console.log()
  //     this.$router.push('/translate_task/' + this.tId)
  //   }
  // }
}
</script>

<style scoped>

</style>
