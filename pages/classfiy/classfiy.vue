<template>
	<view class="classLayout pageBg">
		<custom-nav-bar title="分类"></custom-nav-bar>
		<view class="classfiy">
			<theme-item v-for="item in 15"></theme-item>
		</view>

	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
	.classLayout {

		.classfiy {
			padding: 30rpx;
			display: grid;
			grid-gap: 15rpx;
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>