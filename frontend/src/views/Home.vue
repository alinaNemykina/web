<template>
  <main role="main">
    <div class="col-md-5 p-lg-5 mx-auto my-5">
      <h1 class="display-4 font-weight-normal">
        The World is Yours with polyglot!
      </h1>
      <p class="lead font-weight-normal">
        polyglot — это эффективный сервис для увлекательной практики языков.
        Более {{all_user_count}} человек(-a) во всем мире уже с нами. Присоединяйся!
      </p>
    </div>

    <div class="container marketing">
      <hr class="featurette-divider" />
      <div class="row">
        <div class="col-lg-4">
          <svg
            class="bd-placeholder-img"
            width="120"
            height="120"
            xmlns="http://www.w3.org/2000/svg"
          >
            <image
              xlink:href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3NCIgaGVpZ2h0PSI3MyIgdmlld0JveD0iMCAwIDc0IDczIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNzMgLTgxNSkgdHJhbnNsYXRlKDE3NCA4MTUpIj4KICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9IjM2IiBjeT0iNDMiIHI9IjMwIiBmaWxsPSIjRkZDOTAwIi8+CiAgICAgICAgICAgICAgICA8ZyBmaWxsPSIjMzczODNDIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iIzM3MzgzQyIgc3Ryb2tlLXdpZHRoPSIuNSI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTY4LjY0IDQwLjhjLTIuMDgtMS4wNC00LjQ4LS44LTYuMjQuNTZsLTExLjI4IDYuNDhjLS42NC4zMi0xLjI4LjU2LTIgLjY0LjMyLS43Mi41Ni0xLjUyLjU2LTIuNCAwLTMuMTItMi40OC01LjYtNS42LTUuNkgyOS4zNmwtMS44NC0xLjQ0Yy0zLjYtMi43Mi03LjkyLTQuMTYtMTIuMjQtNC4xNkg0LjhjLTIuNjQgMC00LjggMi4xNi00LjggNC44djE5LjJjMCAyLjY0IDIuMTYgNC44IDQuOCA0LjhoMS42YzIuMjQgMCA0LjE2LTEuNiA0LjY0LTMuNjhsOS44NCA1Ljc2YzEuMi43MiAyLjY0IDEuMTIgNC4wOCAxLjEyaDE4LjcyYzEuNiAwIDMuMTItLjQ4IDQuNDgtMS4zNmwyMS40NC0xNC40LjA4LS4wOGMxLjUyLTEuMTIgMi4zMi0yLjg4IDIuMzItNC44IDAtMi4zMi0xLjI4LTQuNC0zLjM2LTUuNDR6TTggNTguOGMwIC44OC0uNzIgMS42LTEuNiAxLjZINC44Yy0uODggMC0xLjYtLjcyLTEuNi0xLjZWMzkuNmMwLS44OC43Mi0xLjYgMS42LTEuNkg4djIwLjh6bTU5Ljc2LTEwLjMyTDQ2LjMyIDYyLjhjLS44LjU2LTEuNjguOC0yLjY0LjhIMjQuOTZjLS44OCAwLTEuNjgtLjI0LTIuNC0uNjRMMTEuMiA1Ni4zMlYzOGg0LjA4YzMuNiAwIDcuMiAxLjI4IDEwLjI0IDMuNTJsMi4zMiAxLjc2Yy4zMi4yNC42NC4zMi45Ni4zMkg0NGMxLjM2IDAgMi40IDEuMDQgMi40IDIuNCAwIDEuMjgtMS4wNCAyLjQtMi40IDIuNEgyNGMtLjQ4IDAtLjg4LjE2LTEuMi40OC0uMjQuMzItLjQuNzItLjQgMS4xMiAwIC44OC43MiAxLjYgMS42IDEuNmgyNC43MmMxLjM2IDAgMi44LS40IDQtMS4wNEw2NCA0NC4wOGwuMTYtLjE2Yy44OC0uNjQgMi0uOCAzLjA0LS4zMi45Ni40OCAxLjYgMS40NCAxLjYgMi41NiAwIC45Ni0uNCAxLjc2LTEuMDQgMi4zMnpNMzEuMDQgMjQuMjRsMTIgOS40NGMuMzIuMjQuNjQuMzIuOTYuMzIuMzIgMCAuNzItLjA4Ljk2LS4zMmwxMi05LjQ0YzUuNDQtNC40IDcuNi0xMC4zMiA1Ljg0LTE1Ljc2LTEuNDQtNC41Ni01LjM2LTcuNzYtOS42LThoLS43MmMtMy4yIDAtNi4yNCAxLjI4LTguNTYgMy41MkM0MS42OCAxLjc2IDM4LjY0LjQ4IDM1LjM2LjQ4aC0uNzJjLTQuMjQuMjQtOC4xNiAzLjQ0LTkuNiA4LTEuNiA1LjM2LjU2IDExLjI4IDYgMTUuNzZ6bS0yLjgtMTQuOGMxLjA0LTMuMiAzLjg0LTUuNiA2LjcyLTUuNzZoLjQ4YzIuODggMCA1LjUyIDEuNDQgNy4yIDMuNzYuMzIuNC44LjY0IDEuMjguNjRzLjk2LS4yNCAxLjI4LS42NGMxLjc2LTIuNDggNC43Mi0zLjkyIDcuNzYtMy43NiAyLjg4LjE2IDUuNjggMi41NiA2LjcyIDUuNzYgMS4zNiA0LjI0LS40IDguNzItNC44IDEyLjMyTDQ0IDMwLjRsLTEwLjk2LTguNjRjLTQuNC0zLjY4LTYuMTYtOC4xNi00LjgtMTIuMzJ6Ii8+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo="
              height="120"
              width="120"
            ></image>
          </svg>
          <h4>Бесплатный доступ</h4>
          <p>Наша миссия — сделать обучения языкам доступным для каждого</p>
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <svg
            class="bd-placeholder-img"
            width="120"
            height="120"
            xmlns="http://www.w3.org/2000/svg"
          >
            <image
              xlink:href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3NyIgaGVpZ2h0PSI2NyIgdmlld0JveD0iMCAwIDc3IDY3Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NjUgLTgyMSkgdHJhbnNsYXRlKDQ2NSA4MjEpIj4KICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9IjM4IiBjeT0iMzciIHI9IjMwIiBmaWxsPSIjRkZDOTAwIi8+CiAgICAgICAgICAgICAgICA8ZyBmaWxsPSIjMzczODNDIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik03NC41NiAzMi42NGMtMS45Mi05LjQ0LTYtMjIuMDgtMTguNC0yMi40LTIuNjQtLjA4LTUuNi4yNC04LjguODgtMi4zMi40OC00LjY0LjcyLTcuMDQuOFYyLjE2YzAtMS4wNC0uODgtMS45Mi0xLjkyLTEuOTJzLTEuOTIuODgtMS45MiAxLjkydjkuNzZjLTIuNC0uMDgtNC43Mi0uNC03LjA0LS44LTMuMTItLjY0LTYuMTYtLjg4LTguOC0uODgtMTIuNC4yNC0xNi40OCAxMi44OC0xOC40IDIyLjRDLjA4IDQzLjEyLS42NCA1MS4xMiAyLjY0IDU2YzEuNiAyLjMyIDQgMy43NiA3LjEyIDQuMzIgOC4xNiAxLjQ0IDE1LjkyLTQuOTYgMjEuMzYtMTcuNDRoMTQuNTZjNC44OCAxMS4zNiAxMS42OCAxNy42IDE5LjA0IDE3LjYuNzIgMCAxLjUyLS4wOCAyLjI0LS4xNiAzLjItLjU2IDUuNi0yIDcuMTItNC4zMiAzLjM2LTQuODggMi42NC0xMi44OC40OC0yMy4zNnptLTMuNiAyMS4yOGMtLjk2IDEuNDQtMi40OCAyLjMyLTQuNjQgMi43Mi04Ljk2IDEuNTItMTQuOTYtMTAuMDgtMTcuMTItMTUuMTItLjY0LTEuNDQtMi0yLjMyLTMuNTItMi4zMkgzMS4xMmMtMS41MiAwLTIuODguODgtMy41MiAyLjMyLTIuMTYgNS4wNC04LjE2IDE2LjcyLTE3LjEyIDE1LjEyLTIuMTYtLjQtMy42OC0xLjI4LTQuNjQtMi43Mi0yLjcyLTQtMS41Mi0xMi4yNC4xNi0yMC40OCAyLjcyLTEzLjIgNy4yOC0xOS4xMiAxNC43Mi0xOS4yOGguNTZjMi4yNCAwIDQuNzIuMjQgNy4zNi44IDYuMzIgMS4yOCAxMy4wNCAxLjI4IDE5LjM2IDAgMi44OC0uNTYgNS42LS44IDcuOTItLjggNy41Mi4xNiAxMi4wOCA2LjE2IDE0LjcyIDE5LjI4IDEuODQgOC4yNCAzLjA0IDE2LjQ4LjMyIDIwLjQ4eiIvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOC4yNCAyNi45NkgyNC40di0zLjg0YzAtLjQ4LS40LS45Ni0uOTYtLjk2aC0yLjg4Yy0uNDggMC0uOTYuNC0uOTYuOTZ2My44NGgtMy44NGMtLjQ4IDAtLjk2LjQtLjk2Ljk2djIuODhjMCAuNDguNC45Ni45Ni45NmgzLjg0djMuODRjMCAuNDguNC45Ni45Ni45NmgyLjg4Yy40OCAwIC45Ni0uNC45Ni0uOTZ2LTMuODRoMy44NGMuNDggMCAuOTYtLjQuOTYtLjk2di0yLjg4YzAtLjQ4LS40LS45Ni0uOTYtLjk2ek01NC40IDIxLjZjLTEuNDQgMC0yLjU2IDEuMTItMi41NiAyLjU2czEuMTIgMi41NiAyLjU2IDIuNTYgMi41Ni0xLjEyIDIuNTYtMi41NmMwLTEuMzYtMS4xMi0yLjU2LTIuNTYtMi41NnpNNTkuNTIgMjYuOGMtMS40NCAwLTIuNTYgMS4xMi0yLjU2IDIuNTZzMS4xMiAyLjU2IDIuNTYgMi41NiAyLjU2LTEuMTIgMi41Ni0yLjU2LTEuMTItMi41Ni0yLjU2LTIuNTZ6TTQ5LjIgMjYuOGMtMS40NCAwLTIuNTYgMS4xMi0yLjU2IDIuNTZzMS4xMiAyLjU2IDIuNTYgMi41NiAyLjU2LTEuMTIgMi41Ni0yLjU2YzAtMS4zNi0xLjEyLTIuNTYtMi41Ni0yLjU2ek01NC4zMiAzMmMtMS40NCAwLTIuNTYgMS4xMi0yLjU2IDIuNTZzMS4xMiAyLjU2IDIuNTYgMi41NiAyLjU2LTEuMTIgMi41Ni0yLjU2UzU1Ljc2IDMyIDU0LjMyIDMyeiIvPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"
              height="120"
              width="120"
            ></image>
          </svg>
          <h4>Обучение в игре</h4>
          <p>Игровая механика доказала свою эффективность для всех возрастов</p>
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <svg
            class="bd-placeholder-img"
            width="120"
            height="120"
            xmlns="http://www.w3.org/2000/svg"
          >
            <image
              xlink:href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3NCIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDc0IDY0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03NTggLTgyOCkgdHJhbnNsYXRlKDc1OSA4MjgpIj4KICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9IjM2IiBjeT0iMzAiIHI9IjMwIiBmaWxsPSIjRkZDOTAwIi8+CiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSIjMzczODNDIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iIzM3MzgzQyIgc3Ryb2tlLXdpZHRoPSIuODUiIGQ9Ik02LjEwMyAzQzIuNzI3IDMgMCA1LjkyNCAwIDkuNTM2djMxLjE1OWMwIDMuNjE1IDIuNzMgNi41MzYgNi4xMDMgNi41MzZoNTkuNzk0YzMuMzc2IDAgNi4xMDMtMi45MjQgNi4xMDMtNi41MzZWOS41MzZDNzIgNS45MjEgNjkuMjcgMyA2NS44OTcgM0g2LjEwM3ptLjQ0IDIuNjg4aDU4LjkxNUM2Ny40IDUuNjg4IDY5IDcuNDI3IDY5IDkuNTM4djMxLjE1N2MwIDIuMTEyLTEuNiAzLjg1LTMuNTQyIDMuODVINi41NDJDNC42IDQ0LjU0NSAzIDQyLjgwNyAzIDQwLjY5NVY5LjUzOWMwLTIuMTEyIDEuNi0zLjg1IDMuNTQyLTMuODV6bTI0Ljc1NCA3LjY5NmMtLjY0Ny0uMDItMS4yOTcuNDk5LTEuMjk3IDEuMzQ2VjM1LjVjMCAxLjE1MyAxLjA3OCAxLjczNiAxLjk0MiAxLjExNWwxNC40ODItMTAuMzg0Yy43NjYtLjU1Mi43Ny0xLjY3OSAwLTIuMjM4TDMxLjk0MiAxMy42MWMtLjIyMy0uMTYtLjQzMy0uMjIzLS42NDUtLjIzdi4wMDR6TTMyIDE3LjI0NWwxMSA3Ljg3NC0xMSA3Ljg3NFYxNy4yNDV6bS03LjI2OCAzMi42ODJjLTIuNjYgMC00LjkxNiAxLjgzNC01Ljc1NiA0LjM2NWwtLjI3NC44MzFIMS4yNTZDLjU1IDU1LjEyMyAwIDU1LjcxIDAgNTYuNDYzYzAgLjc1NS41NTIgMS4zNDYgMS4yNTYgMS4zNDZoMTcuNDQ2bC4yNzQuODMyYy44NCAyLjUzIDMuMDk3IDQuMzU5IDUuNzU2IDQuMzU5IDIuNjYgMCA0LjkxMi0xLjgyNiA1Ljc1Mi00LjM2bC4yNzMtLjgzMWgzOS45ODdjLjcwNCAwIDEuMjU2LS41OTEgMS4yNTYtMS4zNDVzLS41NS0xLjM0LTEuMjU2LTEuMzRIMzAuNzU3bC0uMjczLS44MzJjLS44NC0yLjUzMy0zLjA5My00LjM2NS01Ljc1Mi00LjM2NXptLS4yMyAyLjY5MWMxLjkyMSAwIDMuNDk4IDEuNzQxIDMuNDk4IDMuODUgMCAyLjExLTEuNTggMy44NDYtMy40OTggMy44NDYtMS45MTggMC0zLjUwMi0xLjczMy0zLjUwMi0zLjg0NXMxLjU4MS0zLjg1MSAzLjUwMi0zLjg1MXoiLz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
              height="120"
              width="120"
            ></image>
          </svg>
          <h4>Обучение на популярных материалах</h4>
          <p>
            Тренируйся по актуальным материалам: видео, текстам и подкастам из
            интернета
          </p>
        </div>
        <!-- /.col-lg-4 -->
      </div>
      <!-- /.row -->

      <!-- START THE FEATURETTES -->

      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">Тренируйся на актуальном</h2>
          <p class="lead">
            Подборки материалов: видео, тексты, подкасты из интернета
          </p>
        </div>
        <div class="col-md-5">
          <iframe
            width="450"
            height="300"
            src="https://www.youtube.com/embed/RKK7wGAYP6k"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading">Занимайся эффективно в игре!</h2>
          <p class="lead">
            Тренировки созданы так, что больше похоже на игру, но при этом ты
            эффективно обучаешься языку
          </p>
        </div>
        <div class="col-md-5 order-md-1">
          <img src="img/game.png" width="450" height="300" />
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">План на каждый день</h2>
          <p class="lead">
            План обучения подбирается специально для тебя и обновляется в
            зависимости от твоего уровня и интересов
          </p>
          <router-link to="/tasks" class="btn waves-effect waves-light">
            К примеру плана
          </router-link>
        </div>
        <div class="col-md-5">
          <img src="img/studying.jpg" width="450" height="300" />
        </div>
      </div>
    </div>
    <!-- /.container -->
  </main>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      all_user_count: 0
    }
  },
  created() {
    const access_token = JSON.parse(localStorage.getItem('access_token'));
    this.$http.get('/api/v1/users/all_user_count', { headers: {
        'Authorization': 'Bearer ' + access_token,
      }, baseURL: 'http://localhost:8081/'})
      .then((response) => {
        console.log(response)
        this.all_user_count = response.data - 1
      })
  }
};
</script>
