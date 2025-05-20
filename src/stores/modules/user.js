import { defineStore } from "pinia";
import { useRouter } from "vue-router";
export const useUserStore = defineStore("user", {
	state: () => ({
		token: localStorage.getItem("token") || null,
		userInfo: JSON.parse(localStorage.getItem("userInfo")) || null,
		name: "主人",
		age: 18,
		isLogin: false,
		router: useRouter(),
	}),
	actions: {
		login(token, userInfo) {
			this.token = token;
			this.userInfo = userInfo;
			// 持久化到本地存储
			localStorage.setItem("token", token);
			localStorage.setItem("userInfo", JSON.stringify(userInfo));
			this.router.push({
				path: "/PageOne",
				query: { name: this.token, age: this.userInfo.age }, // 参数会变成 ?name=小可爱&age=18
			});
		},
		logout() {
			this.token = null;
			this.userInfo = null;
			localStorage.removeItem("token");
			localStorage.removeItem("userInfo");
		},
	},
	getters: {
		welcomeMessage: (state) => `欢迎${state.name}!`,
	},
});
