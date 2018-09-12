import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import router from './router'
import store from './vuex/store'
import Vuex from 'vuex'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Mock from './mock'
import 'font-awesome/css/font-awesome.min.css'

Mock.bootstrap();

Vue.use(ElementUI)
Vue.use(Vuex)

NProgress.configure({showSpinner: false});

router.beforeEach((to, from, next) => {
	NProgress.start();
	if (to.path === '/login') {
		sessionStorage.removeItem('user');
	}
	let user = JSON.parse(sessionStorage.getItem('user'));
	if (!user && to.path !== '/login') {
		next({path: '/login'})
	} else {
		next()
	}
})

router.afterEach(transition => {
	NProgress.done();
});

new Vue({
	el: '#app',
	router,
	store,
	components: {App},
	template: '<App/>'
})

