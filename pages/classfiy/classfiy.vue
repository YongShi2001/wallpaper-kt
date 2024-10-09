<template>
	<view class="classLayout pageBg">
		<custom-nav-bar title="分类"></custom-nav-bar>
		<view class="classfiy">
			<theme-item v-for="item in classfiyList" :key="item._id" :item="item"></theme-item>
		</view>

	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import {
		onShareAppMessage,
		onShareTimeline
	} from '@dcloudio/uni-app'
	import {
		apiGetClassify
	} from '@/api/apis.js'

	const classfiyList = ref([])

	const getClassify = async () => {
		let res = await apiGetClassify({
			pageSize: 20
		})
		// console.log(res);
		classfiyList.value = res.data
	}

	// 分享给朋友
	onShareAppMessage((e) => {
		// console.log(e);
		return {
			title: '至秦禾呈，精选分类',
			path: '/pages/classfiy/classfiy'
		}
	})

	// 分享给朋友圈
	onShareTimeline((e) => {
		// console.log(e);
		return {
			title: '至秦禾呈，精选分类',
			imageUrl: 'https://www.qingnian8.com/images/hot1.jpg'
		}
	})

	getClassify()
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