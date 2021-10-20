<template>
  <TaskForm @add-task="addTask" v-show="showAddForm" />
  <Tasks
    @delete-task="deleteTask"
    @toggle-reminder="toggleReminder"
    :tasks="Tasks"
  />
</template>

<script>
import Tasks from "../components/Tasks.vue";
import TaskForm from "../components/TaskForm.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Home",
  components: {
    Tasks,
    TaskForm,
  },
  props: {
    showAddForm: Boolean,
  },
  emits: ["delete-task", "toggle-reminder", "add-task"],
  methods: {
    ...mapActions([
      "fetchTasks",
      "addTask",
      "toggleReminder",
      "deleteTask",
      "fetchTask",
    ]),
  },
  computed: mapGetters(["Tasks"]),
  async created() {
    // this.tasks = await this.fetchTasks();
    await this.fetchTasks();
  },
};
</script>