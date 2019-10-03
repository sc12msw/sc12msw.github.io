<template>
  <div>
    <div class="relative mb-6">
      <ul class="flex">
        <li
          class="flex-1 border-b"
          v-for="(tab, index) in tabs"
          v-bind:key="index"
          :class="{ 'is-active': tab.isActive }"
        >
          <a
            class="text-center block py-4 hover:border-green-900 border-gray-200"
            :href="tab.href"
            @click="selectTab(tab)"
          >{{ tab.name }}</a>
        </li>
      </ul>
    </div>

    <div class="px-4">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return { tabs: [] };
  },
  created() {
    this.tabs = this.$children;
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = tab.name == selectedTab.name;
      });
    }
  }
};
</script>

<style scoped>
.is-active {
  @apply text-green-900;
  @apply border-green-900;
}
</style>