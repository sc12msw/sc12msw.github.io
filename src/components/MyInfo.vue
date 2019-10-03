<template>
  <div class="flex-col flex justify-center items-center">
    <h1 class="text-3xl">{{ name }}</h1>
    <h2 class="text-2xl text-green-900 font-bold highlight-font">{{title}}</h2>
    <p class="text-gray-900">Greetings, I'm Matt and this is my web CV!</p>
  </div>
</template>

<script>
export default {
  name: "MyInfo",
  props: {
    name: String,
    title: String
  }
};
</script>

