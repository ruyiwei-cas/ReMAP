import { createRouter, createWebHistory } from "vue-router";
import data from "@/view/data";
import practice from "@/view/practice";

const routes = [
    {
        path: '/',
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
    history: createWebHistory(), // 修改这里使用 createWebHistory
    routes
});

export default router;
