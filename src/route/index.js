import {createRouter,createWebHistory} from 'vue-router';
import Contact from '../view/Contact'
import Home from '../view/Home'

const routes = [

    {
        path:'/',
        name:'Home',
        component:Home
    },
    {
        path:'/contact',
        name:'Contact',
        component:Contact
    }
];

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
});

export default router;