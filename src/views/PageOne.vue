<template>
	<div class="product-detail">
		<h1>这里是{{ pageName }}页面</h1>
	</div>
</template>

<script setup name="PageOne">
import { ref } from "vue";
const pageName = ref("商品详情");
</script>

<style scoped>
.product-detail {
	padding: 20px;
}
</style>
