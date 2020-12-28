<template>
  <div class="app-page" @submit.prevent="submitHandler">
    <div>
      <div class="container py-5">
        <h1 class="jumbotron-heading">Профиль</h1>
      </div>

      <div class="container">
        <form class="form">
          <div class="input-field">
            <input
              id="description"
              type="text"
              v-model.trim="name"
              :class="{ invalid: $v.name.$dirty && !$v.name.required }"
            />
            <label for="description">Имя</label>
            <small
              class="helper-text invalid"
              v-if="$v.name.$dirty && !$v.name.required"
            >Поле Имя не должно быть пустым</small
            >
          </div>

          <button class="btn waves-effect waves-light" type="submit">
            Обновить
            <i class="material-icons right">send</i>
          </button>
        </form>

        <div class="py-5">
          <div>
            Выполняйте задания и за каждое успешно выполненное задание получайте
            печеньки.
            <p>
              Пополняйте баланс печенек ежедневно ддя успешного изучения языка!
            </p>
          </div>

          <div class="card mb-3" style="max-width: 540px;">
            <div class="row ml-1">
              <div class="col py-3">
                Баланс печенек
                <p><small class="text-muted">{{ cookies }}</small></p>
              </div>
              <div class="py-3 ml-5">
                <router-link to="/tasks" class="btn waves-effect waves-light">
                  Перейти к заданиям
                  <i class="material-icons right">send</i>
                </router-link>
<!--                <router-link to="/tasks" class="btn waves-effect waves-light">-->
<!--                  К примеру плана-->
<!--                </router-link>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  name: "Profile",
  data: () => ({
    name: "",
    cookies: 0,
    uid: localStorage.getItem('user_id'),
    access_token: JSON.parse(localStorage.getItem('access_token'))
  }),
  validations: {
    name: { required },
  },
  created(){
    let uid = this.uid.substring(1, this.uid.length - 1)
    console.log(uid)
    this.$http.get('/api/v1/users/' + uid, {
      headers: {
        'Authorization': 'Bearer ' + this.access_token,
      }, baseURL: 'http://localhost:8081/', //params: {id: user_id}
    })
      .then((response) => {
        console.log(response.data)
        this.cookies = response.data.balanceOfCookies
      })
  },
  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        name: this.name
      };
      console.log(formData);
      // '85e1ffd0-40a9-11eb-b378-0242ac130002'
      let uid = this.uid.substring(1, this.uid.length - 1)

      this.$http.put('/api/v1/users',
        {
          id: uid,
          username: this.name
        },
        { headers: {
          'Authorization': 'Bearer ' + this.access_token,
        }, baseURL: 'http://localhost:8081/'})
        .then((response) => {
          console.log(response)
        })
    }
  }
};
</script>

<style scoped></style>
