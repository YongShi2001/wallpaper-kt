<template>
	<view class="homeLayout pageBg">
		<custom-nav-bar title="推荐"></custom-nav-bar>
		<!-- 轮播区域 -->
		<view class="banner">
			<swiper circular autoplay indicator-dots indicator-color="rgba(255,255,255,0.5)"
				indicator-active-color="#fff">
				<swiper-item>
					<image src="../../common/images/banner1.jpg" mode="aspectFill"></image>
				</swiper-item>
				<swiper-item>
					<image src="../../common/images/banner2.jpg" mode="aspectFill"></image>
				</swiper-item>
				<swiper-item>
					<image src="../../common/images/banner3.jpg" mode="aspectFill"></image>
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
					<swiper-item v-for="item in 4">
						<navigator url="/pages/notice/detail">
							文字内容3文字内容3文字内容3文字内容3文字内容3文字内容3文字内容3
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
					<navigator url="/pages/preview/preview" class="box" v-for="(item, index) in 8">
						<image src="../../common/images/preview_small.webp" mode="aspectFill"></image>
					</navigator>
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
				<theme-item v-for="item in 8"></theme-item>
				<theme-item :isMore="true"></theme-item>
			</view>
		</view>
	</view>
</template>

<script setup>

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