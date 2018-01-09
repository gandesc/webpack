// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import 'animate.css';
import axios from 'axios';

import routes from '@/routes';
import store from '@/store';

import state from '@/state';

Vue.config.productionTip = false;

//tell Vue to use the VueRouter functionality
Vue.use(VueRouter);

//Create a new VueRouter instance
export const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'is-active'
});

//navigation guards
router.beforeEach((to, from, next) => {
    if(to.name === 'contact') {
        alert('unable');
        next({name: 'accounts'});
    }

    next();
});

/*
router.beforeEach((to, from, next) => {
    console.log('<before-each>');
    console.log('From: ', from);
    console.log('To: ', to);
    console.log('</before-each>');
    next();
});
*/

/*router.afterEach((to, from) => {
    console.log('<after-each>');
    console.log('From: ', from);
    console.log('To: ', to);
    console.log('</after-each>');
});*/

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
});

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['X-CSRF-TOKEN'] = 'your token here';
/*axios.interceptors.request.use(
    (config) => {

        console.log('Request: ', config);
        return config;
    },
    (error) => {
        console.log('Request error: ', error);
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => {
        console.log('Response: ', response);
        return response;
    },
    (error) => {
        console.log('Interceptor: ', error);
        return Promise.reject(error);
    }
);*/
window.axios = axios;

if (localStorage.getItem('isLoggedIn') === '1') {
    state.isLoggedIn = true;
}