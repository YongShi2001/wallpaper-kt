// 状态栏高度
let SYSTEM_INFO = uni.getSystemInfoSync()
export const getStatusBarHeight = () => {
	return SYSTEM_INFO.statusBarHeight || 15
}

// tabbar 高度
export const getTitleBarHeight = () => {
	if (uni.getMenuButtonBoundingClientRect) {
		let {
			top,
			height
		} = uni.getMenuButtonBoundingClientRect()

		return height + (top - getStatusBarHeight()) * 2
	} else {
		return 40
	}
}

export const getNavBarHeight = () => {
	return getStatusBarHeight() + getTitleBarHeight()
}