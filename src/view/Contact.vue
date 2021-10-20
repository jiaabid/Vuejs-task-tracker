<template>
  <div id="parent">
    <div>
      <h3>Contact Us</h3>
    </div>
    <router-link to="/">Back</router-link>
  </div>
  <p>Questions not answered yet?We are here to help you.</p>
  <center>
    <form class="add-form" @submit="addHelp">
      <div class="form-control">
        <label for="">How can we help you?</label>
        <input
          type="text"
          v-model="help"
          placeholder="Tasks are not updating.."
        />
        <button class="btn" type="submit">Help</button>
      </div>
    </form>
  </center>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      help: "",
    };
  },
  methods: {
    async addHelp(e) {
      e.preventDefault();
      const res = await fetch("http://localhost:5000/helps", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({
          help: this.help,
        }),
      });
      if (res.status == 201) {
        alert("We have recorded your problem !");
      }
      this.help = "";

      console.log(this.help);
    },
  },
};
</script>


<style scoped>
#parent {
  display: flex;
  justify-content: space-between;
}
p {
  margin-bottom: 15px;
  font-size: 14px;
}
.add-form {
  margin-top: 40px;
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

.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>