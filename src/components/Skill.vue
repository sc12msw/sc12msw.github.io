<template>
  <div class="flex-row flex">
    <div class="flex">
      <img class="w-8 h-8 object-cover flex-1" :src="logoUrl" :alt="logoAlt" />
      <h2 class="text-1xl flex-3">{{title}}</h2>
    </div>
    <p class="text-gray-900">{{detail}}</p>
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
