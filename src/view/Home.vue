<template>
  <TaskForm 
  @add-task="addTask" v-show="showAddForm"  />
  <Tasks
    @delete-task="deleteTask"
    @toggle-reminder="toggleReminder"
    :tasks="tasks"
  />
</template>

<script>
import Tasks from "../components/Tasks.vue";
import TaskForm from "../components/TaskForm.vue";
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
    //delete task
    async deleteTask(id) {
      if (confirm("Are you sure?")) {
        let res = await fetch(`http://localhost:5000/tasks/${id}`, {
          method: "DELETE",
        });
        res.status == 200
          ? (this.tasks = this.tasks.filter((el) => el.id !== id))
          : alert("Error deleting");
      }
    },

    //update reminder
    async toggleReminder(id) {
      let task = await this.fetchTask(id);
      let updatedTask = {
        ...task,
        reminder: !task.reminder,
      };
      let res = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(updatedTask),
      });
      let data = await res.json();
      this.tasks = this.tasks.map((el) => (el.id == id ? { ...data } : el));
    },

    //add task
    async addTask(task) {
      const res = await fetch("http://localhost:5000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(task),
      });
      let data = await res.json();
      this.tasks = [...this.tasks, data];
    },

    //fetch all the tasks
    async fetchTasks() {
      let res = await fetch("http://localhost:5000/tasks");
      return res.json();
    },

    //fetch a prticular task
    async fetchTask(id) {
      let res = await fetch(`http://localhost:5000/tasks/${id}`);
      return res.json();
    },
  },
  data() {
    return {
      tasks: [],
    };
  },
  async created() {
    this.tasks = await this.fetchTasks();
  },
  
};
</script>