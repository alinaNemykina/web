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
      <div class="input-field">
        <input
          id="name"
          type="text"
          v-model.trim="name"
          :class="{ invalid: $v.name.$dirty && !$v.name.required }"
        />
        <label for="name">Имя</label>
        <small
          class="helper-text invalid"
          v-if="$v.name.$dirty && !$v.name.required"
          >Поле Имя не должно быть пустым</small
        >
      </div>
      <p>
        <label>
          <input type="checkbox" v-model="agree" />
          <span>С правилами согласен(-на)</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">
          Войти!
        </router-link>
      </p>
    </div>
  </form>
</template>

<script>
import { email, minLength, required } from "vuelidate/lib/validators";

export default {
  name: "Register",
  data: () => ({
    email: "",
    password: "",
    name: "",
    agree: false
  }),
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) },
    name: { required },
    agree: { checked: v => v }
  },
  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        email: this.email,
        password: this.password,
        username: this.name
      };
      console.log(formData);

      // let access_token
      this.$http.post('/api/register', formData, { headers: {
          'Content-Type': 'application/json',
        }, baseURL: 'http://localhost:8081/'})
        .then((response) => {
          // access_token = response.data
          localStorage.setItem('access_token', JSON.stringify(response.data.access_token))
          localStorage.setItem('user_id', JSON.stringify(response.data.user_id))
          localStorage.setItem('username', formData.username)
          this.$router.push({name: 'Login'})
        })
        .catch((error) => console.log(error))

      // const loginData = {
      //   email: this.email,
      //   password: this.password,
      //   grant_type: 'password'
      // };
      //
      // this.$http.post('/oauth/token', querystring.stringify(loginData), { headers: {
      //     'Authorization': 'Basic dWk6bXJJVG1ndnpSWE9a',
      //     'Content-Type': 'application/x-www-form-urlencoded',
      //   }, baseURL: 'http://localhost:8081/'})
      //   .then((response) => {
      //     console.log(response.data)
      //     this.$router.push({ name: 'Home' })
      //   })
      //   .catch((error) => console.log(error))
      // this.$router.push("/");
    }
  }
};
</script>

<style scoped></style>
