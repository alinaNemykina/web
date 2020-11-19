<template>
  <div class="card w-50">
    <div class="card-body">
      <h5 class="card-title">{{course.name}}</h5>
      <p class="card-text">{{course.numberOfTopics}} тем(-ы)</p>
      <a href="#" class="btn btn-outline-secondary">Просмотр</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Course",
  props: ["course"]
}
</script>

<style scoped>

</style>
