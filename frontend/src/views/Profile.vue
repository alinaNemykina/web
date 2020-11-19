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
                <p><small class="text-muted">0</small></p>
              </div>
              <div class="py-3 ml-5">
                <button type="button" class="btn waves-effect waves-light">
                  Перейти к заданиям
                  <i class="material-icons right">send</i>
                </button>
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
  }),
  validations: {
    name: { required },
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
    }
  }
};
</script>

<style scoped></style>
