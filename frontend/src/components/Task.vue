<template>
  <div class="card mb-3" style="max-width: 540px;">
    <a v-on:click="$router.push({ name: task.href, params:{tId:task.id} })">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img :src="task.imagePath" class="card-img" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Задание {{task.front_id}}. {{task.title}}</h5>
            <p class="card-text">{{task.name}}</p>
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
