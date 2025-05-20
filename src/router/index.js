//路由
import { createRouter, createWebHistory } from "vue-router";
import PageOne from "@/views/PageOne.vue";
import PageTwo from "@/views/PageTwo.vue";
import PageThree from "@/views/PageThree.vue";
import ZhuYe from "@/views/ZhuYe.vue";
import { useUserStore } from "@/stores/modules/user";
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
		path: "/PageTwo/:name/:age",
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

// router.beforeEach((to, from, next) => {
// 	const isLogin = useUserStore().isLogin;
// 	console.log(isLogin);
// 	console.log(to);
// 	console.log(from);
// 	if (to.meta.requiresAuth && isLogin) {
// 		console.log(1);
// 		next({ path: "/PageOne" });
// 	} else if (to.meta.guestOnly && !isLogin && from.name) {
// 		console.log(2);
// 		next("/");
// 	} else {
// 		console.log(3);
// 		next();
// 	}
// });
router.beforeEach((to) => {
	const userStore = useUserStore();
	const isLogin = userStore.isLogin;

	// 情况1：已登录访问guestOnly页面 → 跳转到PageOne
	if (to.meta.guestOnly && isLogin) {
		return "/PageOne";
	}

	// 情况2：未登录访问需授权页 → 跳转首页
	if (to.meta.requiresAuth && !isLogin) {
		return "/";
	}

	// 其他情况放行
	return true;
});

export default router;
