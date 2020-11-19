<template>
  <div class="card mb-3" style="max-width: 540px;">
    <a href="#">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img :src="task.imagePath" class="card-img" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Задание {{task.id}}. {{task.category}}</h5>
            <p class="card-text">{{task.title}}</p>
            <p class="card-text">
              <small class="text-muted"
              >{{task.explanation}}</small
              >
            </p>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: ['task']
}
</script>

<style scoped>

</style>
