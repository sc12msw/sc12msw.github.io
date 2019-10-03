<template>
  <div v-show="isActive">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    name: { required: true },
    selected: { default: false }
  },

  data() {
    return {
      isActive: false
    };
  },

  computed: {
    href() {
      return "#" + this.name;
    }
  },

  mounted() {
    this.isActive = this.selected;
  }
};
</script>