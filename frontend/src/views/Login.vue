<template>
  <form class="card auth-card text-center" @submit.prevent="submitHandler">
    <div class="card-content">
      <img class="mb-4" src="img/blue-logo.png" alt="" width="82" height="82">
      <div class="input-field">
        <input
          id="email"
          type="text"
          v-model.trim="email"
          :class="{
            invalid:
              ($v.email.$dirty && !$v.email.required) ||
              ($v.email.$dirty && !$v.email.email)
          }"
        />
        <label for="email">Email</label>
        <small
          class="helper-text invalid"
          v-if="$v.email.$dirty && !$v.email.required"
        >Поле Email не должно быть пустым</small
        >
        <small
          class="helper-text invalid"
          v-else-if="$v.email.$dirty && !$v.email.email"
        >Введите корректный Email</small
        >
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          v-model.trim="password"
          :class="{
            invalid:
              ($v.password.$dirty && !$v.password.required) ||
              ($v.password.$dirty && !$v.password.minLength)
          }"
        />
        <label for="password">Пароль</label>
        <small
          class="helper-text invalid"
          v-if="$v.password.$dirty && !$v.password.required"
        >Поле Пароль не должно быть пустым</small
        >
        <small
          class="helper-text invalid"
          v-else-if="$v.password.$dirty && !$v.password.minLength"
        >Пароль должен состоять минимум из 6 символов.</small
        >
      </div>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="/register">
          Зарегистрироваться
        </router-link>
      </p>
    </div>
  </form>
</template>

<script>
import {email, required, minLength} from "vuelidate/lib/validators";
import querystring from "querystring";

export default {
  name: "Login",
  data: () => ({
    email: "",
    password: ""
  }),
  validations: {
    email: {email, required},
    password: {required, minLength: minLength(6)}
  },
  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        username: this.email,
        password: this.password,
        grant_type: 'password'
      };
      console.log(formData);
      this.$http.post('/oauth/token', querystring.stringify(formData), { headers: {
          // 'Connection': 'keep-alive',
          // 'Pragma': 'no-cache',
          // 'Cache-Control': 'no-cache',
          // 'Accept': 'application/json, text/plain, */*',
          // 'DNT': '1',
          'Authorization': 'Basic dWk6bXJJVG1ndnpSWE9a',
          // 'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36',
          'Content-Type': 'application/x-www-form-urlencoded',
          // 'Origin': 'http://localhost:8081',
          // 'Sec-Fetch-Site': 'same-origin',
          // 'Sec-Fetch-Mode': 'cors',
          // 'Sec-Fetch-Dest': 'empty',
          // 'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
        }, baseURL: 'http://localhost:8081/'})
        .then((response) => {
          console.log(response.data)
          localStorage.setItem('access_token', JSON.stringify(response.data.access_token))
          localStorage.setItem('user_id', JSON.stringify(response.data.user_id))
          localStorage.setItem('username', formData.username)
          this.$router.push({ name: 'Home' })
        })
        .catch((error) => console.log(error))

      // this.$http.get('/api/v1/users/' + user_id, {
      //   headers: {
      //     'Authorization': 'Bearer ' + access_token,
      //   }, baseURL: 'http://localhost:8081/', //params: {id: user_id}
      // })
      //   .then((response) => {
      //     this.username = response.data.username
      //     console.log(username)
      //   })
    },
  }
};



</script>

<style scoped></style>
