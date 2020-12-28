<template>
  <div class="col-md-5">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ course.name }}</h5>
<!--        <p class="card-text">{{ course.numberOfTopics }} тем(-ы)</p>-->
        <a v-on:click="$router.push({ name: href, params:{tId:course.id} })" class="btn btn-outline-secondary">Просмотр</a>
<!--        <a v-on:click="$router.push({ name: task.href, params:{tId:task.id} })">-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Course",
  props: ["course"],
  data: () => ({
    href: "CourseTask"
  }),
  // computed: {
  //   numberOfTopics: function () {
  //     return this.props.length;
  //   },
  // },
}
</script>

<style scoped>

</style>
