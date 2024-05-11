import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import data from "@/view/data";
import practice from "@/view/practice";

const routes = [
    {
        path: '',
        name: 'data',
        component: data
    },
    {
        path: '/practice',
        name: 'practice',
        component: practice
    }
];
const router = createRouter({
    history: createWebHashHistory(),
    routes

})
export default router