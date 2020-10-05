import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Page from '@/views/Page';


Vue.use(Router);

export default new Router({

    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                darkMode: true
            }
        },  {
            path: '/page',
            name: 'page',
            component: Page
        }, {
            path: '*',
            redirect: '/',
        }


    ]
})
