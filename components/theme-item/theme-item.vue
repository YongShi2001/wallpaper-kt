<template>
	<view class="theme-item">
		<navigator url="/pages/classlist/classlist" class="box" v-if="!isMore">
			<image class="img" src="../../common/images/classify1.jpg" mode="aspectFill"></image>
			<view class="mask">明星美女</view>
			<view class="tab">3天前更新</view>
		</navigator>

		<navigator url="/pages/classfiy/classfiy" open-type="reLaunch" class="box more" v-if="isMore">
			<image class="img" src="../../common/images/more.jpg	" mode="aspectFill"></image>
			<view class="mask">
				<uni-icons type="more-filled" size="34" color="#fff"></uni-icons>
				<view class="text">更多</view>
			</view>
		</navigator>
	</view>
</template>

<script setup>
	defineProps({
		isMore: {
			type: Boolean,
			default: false
		}
	})
</script>

<style lang="scss" scoped>
	.theme-item {

		.box {
			height: 340rpx;
			border-radius: 10rpx;
			overflow: hidden;
			position: relative;

			.img {
				width: 100%;
				height: 100%;
			}

			.mask {
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				height: 70rpx;
				font-size: 30rpx;
				font-weight: 600;
				// 磨砂玻璃
				background: rgba(0, 0, 0, 0.2);
				color: #fff;
				backdrop-filter: blur(20rpx);
				display: flex;
				align-items: center;
				justify-content: center;
			}

			.tab {
				position: absolute;
				top: 0;
				left: 0;
				background: rgba(250, 129, 90, 0.7);
				backdrop-filter: blur(20rpx);
				color: #fff;
				padding: 6rpx 14rpx;
				border-radius: 0 0 10rpx 0;
				// 让字体变得更小
				font-size: 22rpx;
				transform: scale(0.8);
				transform-origin: left top;
			}
		}

		.box.more {

			.mask {
				flex-direction: column;
				width: 100%;
				height: 100%;

				.text {
					font-size: 28rpx;
				}
			}
		}
	}
</style>