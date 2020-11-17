<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">
      <img src="" alt="" height="30" width="100"/>
    </a>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mr-auto flex-md-row ">

        <router-link
          v-for="link in links"
          :key="link.url"
          tag="li"
          active-class="active"
          :to="link.url"
          :exact="link.exact"
        >
          <a class="nav-link" href="#">{{ link.title }}</a>
        </router-link>

      </ul>
      <ul class="navbar-nav ml-md-0">
        <li class="nav-item">
          <a class="nav-link" href="#">Войти</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    links: [
      {title: 'ГЛАВНАЯ', url: '/', exact: true},
      {title: 'Задания', url: '/tasks'},
      // {title: 'Курсы', url: '/courses'},
      {title: 'Словарь', url: '/dictionary'},
      // {title: 'Войти', url: '/login'},
    ]
  })
}
</script>

<style scoped>

</style>
