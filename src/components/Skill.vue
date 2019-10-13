<template>
  <div class="flex-col flex my-4 bg-gray-100 py-3 skill-block pb-5">
    <div class="flex-col justify-center items-center flex pb-4 pt-2">
      <img class="logo" :src="logoUrl" :alt="logoAlt" />
      <h2 class="text-3xl pt-3 text-center text-bold">{{title}}</h2>
    </div>
    <p class="text-gray-900 p-6 my-auto">{{detail}}</p>
  </div>
</template>

<script>
export default {
  name: "Skill",
  props: {
    detail: String,
    logoUrl: String,
    logoAlt: String,
    title: String
  }
};
</script>
<style scoped>
.logo {
  width: 50px;
  height: 55px;
}
.skill-block {
  min-height: 150px;
}
</style>