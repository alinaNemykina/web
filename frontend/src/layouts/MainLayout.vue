<template>
  <div>
    <header>
      <Navbar />
    </header>

    <main role="main">
      <router-view/>
    </main>

    <footer class="container">
      <hr class="featurette-divider"/>
      <p class="float-right"><a href="#">Наверх</a></p>
      <p>
        &copy; 2020 polyglot. &middot;
        <a href="#">Условия конфиденциальности</a> &middot;
        <a href="#">Контакты</a>
      </p>
    </footer>
  </div>
</template>

<script>
import Navbar from "@/components/app/Navbar";

export default {
  name: "MainLayout",
  components: {
    Navbar
  }
};
</script>

<style scoped></style>
