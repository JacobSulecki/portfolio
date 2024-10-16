import { createRouter, createWebHistory } from 'vue-router'

import about from '@/components/about.vue';
import projects from '@/components/projects.vue';
import contact from '@/components/contact.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/about' },
        { path: '/about', component: about },
        { path: '/projects', component: projects },
        { path: '/contact', component: contact },
    ]
});

export default router
