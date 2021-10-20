// import {co} from 'vuex'
const state = {
    tasks: []
}
const getters = {
    Tasks: state => state.tasks
}
const actions = {
    async fetchTasks({ commit }) {
        let res = await fetch("http://localhost:5000/tasks");
        let data = await res.json();
        console.log(data)
        commit('setTasks', data);
    },

    //fetch a prticular task
   

    //delete task
    async deleteTask({commit},id) {
      if (confirm("Are you sure?")) {
        let res = await fetch(`http://localhost:5000/tasks/${id}`, {
          method: "DELETE",
        });
        res.status == 200
          ?commit('deleteTask',id)
          : alert("Error deleting");
      }
    },

    // update reminder
    async toggleReminder({commit},id) {
      let task = await fetchTask(id);
       console.log(task)
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
      commit('toggleReminder',data)
    
    },

    // add task
    async addTask({commit},task) {
      const res = await fetch("http://localhost:5000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(task),
      });
      let data = await res.json();
      commit('addTask',data)

    },


}
const mutations = {
    setTasks: (state, tasks) => (state.tasks = tasks),
    addTask:(state,task)=>(state.tasks = [...state.tasks,task]),
    toggleReminder:(state,task)=>(state.tasks = state.tasks.map((el) => (el.id == task.id ? { ...task } : el))),
    deleteTask:(state,id)=>(state.tasks = state.tasks.filter((el) => el.id !== id))
    
}
const fetchTask = async(id)=>{
    let res = await fetch(`http://localhost:5000/tasks/${id}`);
    return res.json();
}


export default {
    state,
    getters,
    actions,
    mutations
}