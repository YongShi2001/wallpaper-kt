import {
	request
} from '@/utils/request.js'

// 轮播图接口
export function apiGetBanner() {
	return request({
		url: '/homeBanner'
	})
}

// 公告接口
export function apiGetNotice(data = {}) {
	return request({
		url: '/wallNewsList',
		data
	})
}

// 每日推荐接口
export function apiGetDayRandom() {
	return request({
		url: '/randomWall'
	})
}

// 专题精选
export function apiGetClassify(data = {}) {
	return request({
		url: '/classify',
		data
	})
}

// 分类详情
export function apiGetClassList(data = {}) {
	return request({
		url: '/wallList',
		data
	})
}

// 评分
export function apiGetSetupScore(data = {}) {
	return request({
		url: '/setupScore',
		data
	})
}

// 壁纸下载
export function apiGetDownloadWall(data = {}) {
	return request({
		url: '/downloadWall',
		data
	})
}

// 获取单个壁纸详情
export function apiGetDetailWall(data = {}) {
	return request({
		url: '/detailWall',
		data
	})
}