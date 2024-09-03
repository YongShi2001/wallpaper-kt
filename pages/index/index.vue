<template>
	<view class="homeLayout">
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
				<uni-icons type="sound-filled" size="20" color="#28b389"></uni-icons>
				<text class="text">公告</text>
			</view>
			<view class="center">
				<swiper circular autoplay vertical interval="1500" duration="300">
					<swiper-item>文字内容1</swiper-item>
					<swiper-item>文字内容2</swiper-item>
					<swiper-item>文字内容3文字内容3文字内容3文字内容3文字内容3文字内容3文字内容3</swiper-item>
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
				<template #custom>时间</template>
			</common-title>
			<view class="content">
				<scroll-view scroll-x>
					<navigator to="" class="box" v-for="(item, index) in 8">
						<image src="../../common/images/preview_small.webp" mode="aspectFill"></image>
					</navigator>
				</scroll-view>
			</view>
		</view>

		<!-- 专题精选 -->
		<view class="">
			<common-title>
				<template #name>专题精选</template>
				<template #custom>More+</template>
			</common-title>
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

				.text {
					color: #28b389;
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
	}
</style>