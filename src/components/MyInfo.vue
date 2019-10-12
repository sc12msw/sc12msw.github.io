<template>
  <section class="flex-col flex justify-center items-center">
    <h1 class="text-3xl">{{ name }}</h1>
    <h2 class="text-4xl text-green-900 font-bold text-highlight">{{title}}</h2>
    <p class="text-gray-900">Greetings, I'm Matt and this is my web CV!</p>
    <a
      class="text-highlight my-6 pt-4 text-3xl flex flex-col justify-center items-center"
      href="https://github.com/sc12msw/"
    >
      View my code!
      <i class="fab fa-github-square fa-3x"></i>
    </a>
    <!-- uses brands style -->
  </section>
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

