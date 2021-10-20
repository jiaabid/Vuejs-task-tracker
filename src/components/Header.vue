<template>
  <header>
    <h1>{{ title }}</h1>
    <Button v-show="HomePage" :color="showAddForm ? 'red' : 'green'" :title="showAddForm ? 'Close' : 'Add Task'"
    @toggle-task-form="$emit('toggle-task-form')"/>
  </header>
</template>


<script>
import Button from "./Button.vue";
export default {
  name: "Header",
  props: {
    title: String,
    showAddForm: Boolean,
  },
  components: {
    Button,
  },
  emits: ["toggle-task-form"],
  computed: {
    HomePage() {
      if (this.$route.path == "/") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>