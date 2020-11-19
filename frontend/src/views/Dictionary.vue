<template>
  <main role="main">

    <MyDictionary />

    <DictionaryRecommendation />
  </main>
</template>

<script>
import MyDictionary from "@/components/MyDictionary";
import DictionaryRecommendation from "@/components/DictionaryRecommendation";
export default {
  name: "Dictionary",
  components: {
    MyDictionary, DictionaryRecommendation
  }
};
</script>

<style scoped></style>
