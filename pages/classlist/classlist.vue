<template>
	<view class="classList">
		<view class="loadingLayout" v-if="!classList.length && !noData">
			<uni-load-more status="loading"></uni-load-more>
		</view>

		<view class="content">
			<navigator :url="'/pages/preview/preview?id='+item._id" class="item" v-for="item in classList"
				:key="item._id">
				<image :src="item.smallPicurl" mode="aspectFill"></image>
			</navigator>
		</view>

		<view class="loadingLayout" v-if="classList.length || noData">
			<uni-load-more :status="noData ? 'noMore' : 'loading'"></uni-load-more>
		</view>

		<view class="safe-area-inset-bottom"></view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import {
		onLoad,
		onUnload,
		onReachBottom,
		onShareAppMessage,
		onShareTimeline
	} from '@dcloudio/uni-app'
	import {
		apiGetClassList,
		apiGetUserWallList
	} from '@/api/apis.js'
	import {
		gotoHome
	} from '@/utils/common.js'

	const classList = ref([])
	const noData = ref(false)
	let pageNamer

	// 定义 data 参数
	const queryParams = {
		pageNum: 1,
		pageSize: 12
	}

	const getClassList = async () => {
		let res

		if (queryParams.classid) res = await apiGetClassList(queryParams)
		if (queryParams.type) res = await apiGetUserWallList(queryParams)
		// console.log(res);
		// console.log(res.data);
		classList.value = [...classList.value, ...res.data]
		if (queryParams.pageSize > res.data.length) noData.value = true
		uni.setStorageSync('storgClassList', classList.value)
		// console.log(classList.value);
	}

	// 接收参数
	onLoad((e) => {
		let {
			id = null, name = null, type = null
		} = e
		if (type) queryParams.type = type
		if (id) queryParams.classid = id
		// if (!id) gotoHome()
		pageNamer = name
		// 修改导航标题
		uni.setNavigationBarTitle({
			title: pageNamer
		})

		getClassList()
	})

	// 离开页面
	onUnload((e) => {
		uni.removeStorageSync('storgClassList')
	})

	// 触底加载
	onReachBottom(() => {
		if (noData.value) return
		queryParams.pageNum++
		getClassList()
	})

	// 分享给朋友
	onShareAppMessage((e) => {
		// console.log(e);
		return {
			title: '至秦禾呈-' + pageNamer,
			path: '/pages/classlist/classlist?id=' + queryParams.classid + '&name=' + pageNamer
		}
	})

	// 分享给朋友圈
	onShareTimeline((e) => {
		// console.log(e);
		return {
			title: '至秦禾呈-' + pageNamer,
			query: 'id=' + queryParams.classid + '&name=' + pageNamer,
			imageUrl: 'https://www.qingnian8.com/images/hot1.jpg'
		}
	})
</script>

<style lang="scss" scoped>
	.classList {

		.content {
			display: grid;
			gap: 5rpx;
			grid-template-columns: repeat(3, 1fr);
			padding: 5rpx;

			.item {
				height: 440rpx;

				image {
					width: 100%;
					height: 100%;
					display: block;
				}
			}
		}
	}
</style>