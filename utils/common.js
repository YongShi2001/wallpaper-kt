export function compareTimestamp(timestamp) {
	const currentTime = new Date().getTime();
	const timeDiff = currentTime - timestamp;

	if (timeDiff < 60000) {
		return '1分钟内';
	} else if (timeDiff < 3600000) {
		return Math.floor(timeDiff / 60000) + '分钟前更新';
	} else if (timeDiff < 86400000) {
		return Math.floor(timeDiff / 3600000) + '小时前更新';
	} else if (timeDiff < 2592000000) {
		return Math.floor(timeDiff / 86400000) + '天前更新';
	} else if (timeDiff < 7776000000) {
		return Math.floor(timeDiff / 2592000000) + '月前更新';
	} else {
		return 'null';
	}
}

export function gotoHome() {
	uni.showModal({
		title: '提示',
		content: '页面有误将返回首页',
		showCancel: false,
		success: (res) => {
			if (res.confirm) {
				uni.reLaunch({
					url: "/pages/index/index"
				})
			}
		}
	})
}