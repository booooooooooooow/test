//路由
import { createRouter, createWebHistory } from "vue-router";
import PageOne from "@/views/PageOne.vue";
import ZhuYe from "@/views/ZhuYe.vue";

const routes = [
	{
		path: "/",
		name: "ZhuYe",
		component: ZhuYe,
		meta: { requiresAuth: true },
	},
	{
		path: "/PageOne",
		name: "PageOne",
		component: PageOne,
		meta: { requiresAuth: true },
	},
];
const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
