<template>
  <main role="main">
    <div class="container py-5">
      <h1 class="jumbotron-heading">Мой словарь</h1>
    </div>

    <div class="container">
      <div class="card-group">

        <div class="card mb-3">
          <div class="row no-gutters">
            <svg class="bd-placeholder-img" width="60" height="60" xmlns="http://www.w3.org/2000/svg">
              <image height="60" width="60"
                     xlink:href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICAgIDxwYXRoIGZpbGw9IiM3RTkxOUYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkgMTFoMTd2MThIOGEyIDIgMCAwIDEtMi0yVjVhMiAyIDAgMCAxIDItMmgxOHYySDlhMSAxIDAgMCAwLTEgMXY0YTEgMSAwIDAgMCAxIDF6bTUuNzk1IDEzaDEuNzk0bC0yLjc4Mi03Ljg4NWgtMi4wMzZMOSAyNGgxLjc5NGwuNTctMS44N2gyLjg2MmwuNTcgMS44N3ptLS45NjYtMy4yNjZoLTIuMDQ3Yy41NTktMS44MDguODk3LTIuOTQxIDEuMDE1LTMuNC4wMjkuMTMuMDc2LjMwNS4xNDMuNTI3LjA2Ni4yMjIuMzYyIDEuMTguODg5IDIuODczek0yMS41MzcgMjRoMS4xNDR2LTQuMDAxYzAtLjcxNy0uMjE1LTEuMjUtLjY0NC0xLjYwMS0uNDMtLjM1MS0xLjA0OC0uNTI2LTEuODUzLS41MjYtLjg0MiAwLTEuNjA4LjE4LTIuMy41NDJsLjU0MyAxLjEwN2MuNjQ4LS4yOSAxLjIxMi0uNDM2IDEuNjkyLS40MzYuNjIzIDAgLjkzNS4zMDUuOTM1LjkxNHYuMjYzbC0xLjA0Mi4wMzJjLS44OTkuMDMyLTEuNTcxLjItMi4wMTcuNTAyLS40NDYuMzAzLS42NjkuNzczLS42NjkgMS40MSAwIC42MDkuMTY2IDEuMDc4LjQ5NyAxLjQwNy4zMzEuMzMuNzg1LjQ5NCAxLjM2Mi40OTQuNDY5IDAgLjg1LS4wNjcgMS4xNDEtLjIwMS4yOTItLjEzNC41NzYtLjM3NS44NTEtLjcyMmguMDQzbC4zMTcuODE2em0tLjQ4My0yLjc4MnYuNDk0YzAgLjM2Mi0uMTE0LjY1Mi0uMzQxLjg3LS4yMjguMjE4LS41MzEuMzI4LS45MS4zMjgtLjUzIDAtLjc5Ni0uMjMxLS43OTYtLjY5MyAwLS4zMjIuMTE3LS41NjIuMzUtLjcyLjIzMi0uMTU3LjU4Ny0uMjQzIDEuMDYzLS4yNThsLjYzNC0uMDIxek0xMSA3aDEzdjJIMTFhMSAxIDAgMSAxIDAtMnoiLz4KPC9zdmc+Cg=="></image>
            </svg>
            <div class="card-body">
              <h5 class="card-title"><a href="#">Посмотреть</a></h5>
            </div>
          </div>
        </div>
        <div class="card mb-3" style="max-width: 540px;">
          <div class="row ml-1">
            <div class="col py-1">
              Новые слова
              <p><small class="text-muted">0 слов</small></p>
            </div>
            <div class="col py-1">
              На изучении
              <p><small class="text-muted">0 слов</small></p>
            </div>
            <div class="col py-1">
              Изучено
              <p><small class="text-muted">0 слов</small></p>
            </div>
            <div class="col py-3">
              <button type="button" class="btn btn-sm btn-outline-secondary">Учить слова</button>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="container py-5">
      <h1 class="jumbotron-heading">Рекомендуемые наборы и разговорники</h1>
    </div>

    <div class="album">
      <div class="container">

        <div class="row">
          <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <img src="img/еда.jpg" class="card-img-top"/>
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="card-text">
                    Набор слов "Еда"
                  </div>
                </div>
                <p><small class="text-muted">100 слов</small></p>

                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">Просмотреть</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Добавить</button>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <img src="img/мебель.jpg" class="card-img-top">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="card-text">
                    Набор слов "Мебель"
                  </div>
                </div>
                <p><small class="text-muted">100 слов</small></p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">Просмотреть</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Добавить</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <img src="img/напитки.jpg" class="card-img-top">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="card-text">
                    Набор слов "Напитки"
                  </div>
                </div>
                <p><small class="text-muted">100 слов</small></p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">Просмотреть</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Добавить</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <img src="img/семья.png" class="card-img-top">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="card-text">
                    Набор слов "Семья"
                  </div>
                </div>
                <p><small class="text-muted">100 слов</small></p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">Просмотреть</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Добавить</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <img src="img/строение%20человека.jpg" class="card-img-top">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="card-text">
                    Набор слов "Строение человека"
                  </div>
                </div>
                <p><small class="text-muted">100 слов</small></p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">Просмотреть</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Добавить</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <img src="img/чувства%20и%20эмоции.jpg" class="card-img-top">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="card-text">
                    Набор слов "Чувства и эмоции"
                  </div>
                </div>
                <p><small class="text-muted">99 слов</small></p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">Просмотреть</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Добавить</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>

<script>
export default {
  name: "Dictionary"
}
</script>

<style scoped>

</style>
