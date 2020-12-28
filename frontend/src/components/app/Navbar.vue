<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/" href="#">
      <img src="img/nav-logo.png" alt="" height="30" width="100"/>
    </router-link>
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
      <ul class="right hide-on-small-and-down">
        <li>
          <a
            class="dropdown-trigger white-text"
            data-target="dropdown"
            ref="dropdown"
          >
            {{ this.username }}
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id="dropdown" class="dropdown-content">
            <li>
              <router-link to="/profile" class="black-text">
                <i class="material-icons">account_circle</i>Профиль
              </router-link>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a href="#" class="black-text" @click.prevent="logout">
                <i class="material-icons">assignment_return</i>Выйти
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import M from "materialize-css";

export default {
  name: "Navbar",
  methods: {
    logout() {
      console.log("Logout");
      localStorage.removeItem('user_id')
      localStorage.removeItem('access_token')
      localStorage.removeItem('username')
      this.$router.push("/login?message=logout");
    }
  },
  data: () => ({
    links: [
      {title: "Задания", url: "/tasks"},
      {title: 'Курсы', url: '/courses'},
      {title: "Словарь", url: "/dictionary"}
    ]
  }),
  mounted() {
    this.dropdown = M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: true
    });
  },
  beforeDestroy() {
    if (this.dropdown && this.dropdown.destroy) {
      this.dropdown.destroy();
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
        this.newStatus = response.data
      })
    this.username = localStorage.getItem('username')
  }
};
</script>

<style scoped></style>
