<template>
	<view class="homeLayout pageBg">
		<custom-nav-bar title="推荐"></custom-nav-bar>
		<!-- 轮播区域 -->
		<view class="banner">
			<swiper circular autoplay indicator-dots indicator-color="rgba(255,255,255,0.5)"
				indicator-active-color="#fff">
				<swiper-item v-for="item in bannerList" :key="item._id">
					<image :src="item.picurl" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>

		<!-- 公告和轮播区域 -->
		<view class="notice">
			<view class="left">
				<uni-icons type="sound-filled" size="20"></uni-icons>
				<text class="text">公告</text>
			</view>
			<view class="center">
				<swiper circular autoplay vertical interval="1500" duration="300">
					<swiper-item v-for="item in noticeList" :key="item._id">
						<navigator :url="'/pages/notice/detail?id=' + item._id">
							{{item.title}}
						</navigator>
					</swiper-item>
				</swiper>
			</view>
			<view class="right">
				<uni-icons type="right" size="16" color="#333"></uni-icons>
			</view>
		</view>

		<!-- 每日推荐 -->
		<view class="select">
			<common-title>
				<template #name>每日推荐</template>
				<template #custom>
					<view class="date">
						<uni-icons type="calendar" size="18"></uni-icons>
						<view class="text">
							<uni-dateformat :date="Date.now()" format="dd日"></uni-dateformat>
							<!-- <uni-dateformat :date="new Date()" format="dd日"></uni-dateformat> -->
						</view>
					</view>
				</template>
			</common-title>
			<view class="content">
				<scroll-view scroll-x>
					<view class="box" v-for="item in randomList" :key="item._id" @click="goPreview(item._id)">
						<image :src="item.smallPicurl" mode="aspectFill"></image>
					</view>
				</scroll-view>
			</view>
		</view>

		<!-- 专题精选 -->
		<view class="theme">
			<common-title>
				<template #name>专题精选</template>
				<template #custom>
					<navigator url="" class="more">More+</navigator>
				</template>
			</common-title>
			<view class="content">
				<theme-item v-for="item in classfiyList" :key="item._id" :item="item"></theme-item>
				<theme-item :isMore="true"></theme-item>
			</view>
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
		apiGetBanner,
		apiGetNotice,
		apiGetDayRandom,
		apiGetClassify
	} from '@/api/apis.js'

	const bannerList = ref([])
	const noticeList = ref([])
	const randomList = ref([])
	const classfiyList = ref([])

	// 轮播图接口
	const getBanner = async () => {
		let res = await apiGetBanner()
		// console.log(res);
		bannerList.value = res.data
	}

	// 公告接口
	const getNotice = async () => {
		let res = await apiGetNotice({
			select: true
		})
		// console.log(res);
		noticeList.value = res.data
	}

	// 每日推荐接口
	const getDayRandom = async () => {
		let res = await apiGetDayRandom()
		// console.log(res);
		randomList.value = res.data
	}

	// 每日推荐
	const goPreview = (id) => {
		uni.setStorageSync('storgClassList', randomList.value)
		uni.navigateTo({
			url: "/pages/preview/preview?id=" + id
		})
	}

	// 专题精选
	const getClassify = async () => {
		let res = await apiGetClassify({
			select: true
		})
		// console.log(res);
		classfiyList.value = res.data
	}

	// 分享给朋友
	onShareAppMessage((e) => {
		// console.log(e);
		return {
			title: '至秦禾呈，好看的手机壁纸',
			path: '/pages/index/index'
		}
	})

	// 分享给朋友圈
	onShareTimeline((e) => {
		// console.log(e);
		return {
			title: '至秦禾呈，好看的手机壁纸',
			imageUrl: 'https://www.qingnian8.com/images/hot1.jpg'
		}
	})

	getBanner()
	getNotice()
	getDayRandom()
	getClassify()
</script>

<style lang="scss" scoped>
	.homeLayout {

		// 轮播区域
		.banner {
			width: 750rpx;
			padding: 30rpx 0;

			swiper {
				width: 750rpx;
				height: 340rpx;

				&-item {
					width: 100%;
					height: 100%;
					padding: 0 30rpx;

					image {
						width: 100%;
						height: 100%;
						border-radius: 10rpx;
					}
				}
			}
		}

		// 公告和轮播区域
		.notice {
			display: flex;
			width: 690rpx;
			height: 80rpx;
			background: #f9f9f9;
			margin: 0 auto;
			border-radius: 80rpx;
			line-height: 80rpx;

			.left {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 140rpx;

				// 图标
				:deep() {
					.uni-icons {
						color: $brand-theme-color !important;
					}
				}

				.text {
					color: $brand-theme-color;
					font-weight: 600;
					font-size: 28rpx;
				}
			}

			.center {
				flex: 1;

				swiper {
					height: 100%;

					&-item {
						height: 100%;
						font-size: 30rpx;
						color: #666;
						// 字体太多，加省略号
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
					}
				}
			}

			.right {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 70rpx;
			}
		}

		// 每日推荐
		.select {
			padding-top: 50rpx;

			// 组件 <common-title></common-title>
			.date {
				display: flex;
				color: $brand-theme-color;
				align-items: center;

				// 图标
				:deep() {
					.uni-icons {
						color: $brand-theme-color !important;
					}
				}

				.text {
					margin-left: 5rpx;
				}
			}

			.content {
				width: 720rpx;
				margin-top: 30rpx;
				margin-left: 30rpx;

				scroll-view {
					white-space: nowrap;

					.box {
						display: inline-block;
						width: 200rpx;
						height: 430rpx;
						margin-right: 15rpx;

						image {
							width: 100%;
							height: 100%;
							border-radius: 10rpx;
						}
					}

					// 获取最后一个
					.box:last-child {
						margin-right: 30rpx;
					}
				}
			}
		}


		// 专题精选
		.theme {
			padding: 50rpx 0;

			// 组件 <common-title></common-title>
			.more {
				font-size: 32rpx;
				color: #888;
			}

			.content {
				display: grid;
				gap: 15rpx;
				grid-template-columns: repeat(3, 1fr);
				margin-top: 30rpx;
				padding: 0 30rpx;
			}
		}
	}
</style>