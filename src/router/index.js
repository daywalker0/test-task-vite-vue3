import {createRouter, createWebHistory} from 'vue-router'
import Default from '../layouts/Default.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('../views/Home.vue'),
			meta: {
				layout: Default
			}
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('../views/About.vue'),
			meta: {
				layout: Default
			}
		},
		{
			path: '/contacts',
			name: 'contacts',
			component: () => import('../views/Contacts.vue'),
			meta: {
				layout: Default
			}
		},
		{
			path: '/projects',
			name: 'projects',
			component: () => import('../views/Projects.vue'),
			meta: {
				layout: Default
			}
		},
	]
})

export default router;