<template>
  <div class="flex-row flex my-4 bg-gray-100 py-3  skill-block">
    <div class="flex-col justify-center items-center p-3 absolute">
      <img class="logo flex-1" :src="logoUrl" :alt="logoAlt" />
      <h2 class="text-1xl flex-3 pt-3 text-center">{{title}}</h2>
    </div>
    <p class="text-gray-900 ml-20 my-auto">{{detail}}</p>
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