<template>
	<div class="product-detail">
		<h1>这里是{{ pageName }}</h1>
		<el-button @click="goToHome">查看参数</el-button>
	</div>
</template>

<script setup name="PageOne">
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const pageName = ref("路由传参的几种方式");
const goToHome = () => {
	console.log("route", route);
};
</script>

<style scoped>
.product-detail {
	padding: 20px;
}
</style>
