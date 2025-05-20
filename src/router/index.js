//路由
import { createRouter, createWebHistory } from "vue-router";
import PageOne from "@/views/PageOne.vue";
import PageTwo from "@/views/PageTwo.vue";
import PageThree from "@/views/PageThree.vue";
import ZhuYe from "@/views/ZhuYe.vue";

const routes = [
	{
		path: "/",
		name: "ZhuYe",
		component: ZhuYe,
		meta: { guestOnly: true },
	},
	{
		path: "/PageOne",
		name: "PageOne",
		component: PageOne,
		meta: { requiresAuth: true },
	},
	{
		path: "/PageTwo/:id/:age",
		name: "PageTwo",
		component: PageTwo,
		meta: { requiresAuth: true },
	},
	{
		path: "/PageThree/:id/:age",
		name: "PageThree",
		component: PageThree,
		props: true,
		meta: { guestOnly: true },
	},
];
const router = createRouter({
	history: createWebHistory(),
	routes,
});

let isLogin = () => {
	return false;
};
router.beforeEach((to, from, next) => {
	if (to.meta.requiresAuth && isLogin()) {
		next(to.path);
	} else if (to.meta.guestOnly && !isLogin() && from.name) {
		next("/");
	} else {
		next();
	}
});

export default router;
