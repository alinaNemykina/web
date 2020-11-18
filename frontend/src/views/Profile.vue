<template>
  <div class="app-page">
    <div>
      <!--      <div class="page-title">-->
      <!--        <h3>Профиль</h3>-->
      <!--      </div>-->
      <div class="container py-5">
        <h1 class="jumbotron-heading">Профиль</h1>
      </div>

      <div class="container">
        <form class="form">
          <div class="input-field">
            <input id="description" type="text" />
            <label for="description">Имя</label>
            <span class="helper-text invalid">name</span>
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
              <!--            <div class="col py-3">-->
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
export default {
  name: "Profile"
};
</script>

<style scoped></style>
