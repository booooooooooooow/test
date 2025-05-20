<template>
	<!-- <el-button @click="handleQueryClick">query传参</el-button>
	<el-button @click="handleParamsClick">params传参</el-button>
	<router-link
		:to="{
			path: '/PageOne',
			query: { name: '宝宝', age: 20 },
		}">
		跳转
	</router-link> -->
	<div class="parent">
		<el-input
			v-model="account"
			style="width: 240px"
			placeholder="请输入账号"
			clearable />
		<el-input
			v-model="password"
			style="width: 240px"
			placeholder="请输入密码"
			clearable
			show-password />
		<el-button @click="login">登录</el-button>
	</div>
</template>
<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/modules/user";
let account = ref("");
let password = ref("");
const user = useUserStore();
const token = "kkkkijjj";
const userInfo = {
	name: "uu",
	age: 18,
};
const login = () => {
	if (account.value === "admin" && password.value === "123") {
		user.login(token, userInfo);
		console.log("登录成功");
	} else {
		console.log("登录失败");
	}
};
// const handleQueryClick = () => {
// 	router.push({
// 		path: "/PageOne",
// 		query: { name: "小可爱", age: 18 }, // 参数会变成 ?name=小可爱&age=18
// 	});
// };
// const handleParamsClick = () => {
// 	router.push({
// 		name: "PageTwo",
// 		params: { id: 18, age: 188 }, // 参数会变成 ?name=小可爱&age=18
// 	});
// };
</script>

<style scoped>
.parent {
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
