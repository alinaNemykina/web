<template>
  <div class="col-md-3">
    <div class="card mb-2 mr-10 shadow-sm">
      <img :src="recommendedVocabulary.imagePath" class="card-img-top set-image"/>
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center">
          <div class="card-text">
            {{ recommendedVocabulary.title }}
          </div>
        </div>
        <p><small class="text-muted">{{ recommendedVocabulary.numOfElements }} слов(-a)</small></p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-sm btn-outline-secondary"
            >
              Просмотреть
            </button>
            <button
              type="button"
              class="btn btn-sm btn-outline-secondary"
            >
              Добавить
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommendation",
  props: ['recommendedVocabulary']
}
</script>

<style scoped>

</style>
