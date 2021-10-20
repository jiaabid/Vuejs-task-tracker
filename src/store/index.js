import { createApp } from 'vue'
// import Vue from 'vue';
import Vuex from 'vuex';
import Tasks from './modules/task'

createApp().use(Vuex);
export default new Vuex.Store({
    modules:{
        Tasks
    }
})