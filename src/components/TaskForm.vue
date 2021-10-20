<template>
  <form @submit="onSubmit" class="add-from">
    <div class="form-control">
      <label for="">Text</label>
      <input
        type="text"
        v-model="text"
        class="form-control"
        placeholder="enter the text"
      />
    </div>
    <div class="form-control">
      <label for="">Day & Time</label>
      <input
        type="text"
        v-model="day"
        class="form-control"
        placeholder="enter the day"
      />
    </div>
    <div class="form-control form-control-check">
      <label for="">Reminder</label>
      <input v-model="reminder" type="checkbox" />
    </div>
    <input type="submit" class="btn btn-block">
    <!-- <Button title="submit" type="submit" color="black" /> -->
  </form>
</template>

<script>
// import Button from "./Button.vue";
export default {
  name: "TaskForm",
  data() {
    return {
      text: "",
      day: "",
      reminder: false,
    };
  },
 
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if (!this.text) {
        alert("Do enter the text");
        return;
      }
      const newTask = {
        id: Math.floor(Math.random() * 100),
        text: this.text,
        day: this.day,
        reminder: this.reminder,
      };
      
      this.$emit('add-task', newTask);
      this.text = "";
      this.day = "";
      this.reminder = false;
    },
  },
  components: {
   
  },
};
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>