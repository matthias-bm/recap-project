import Vue from 'vue';
import VueRouter from 'vue-router';
import monComposant from './components/mon-composant';
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'home',
            component: monComposant
        },
        {
            path: '/comp-1',
            component: Comp1
        },
        {
            path: '/comp-2',
            component: Comp2,
        },
        // { 
        //     path: '/a', 
        //     redirect: '/b' 
        // },
        // { 
        //     path: '/user/:id?', 
        //     component: User 
        // },
        // {
        //     path: '*',
        //     component: CompError
        // }
    ]
});

export default router;