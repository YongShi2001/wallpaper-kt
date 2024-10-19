"use strict";
const utils_request = require("../utils/request.js");
function apiGetBanner() {
  return utils_request.request({
    url: "/homeBanner"
  });
}
function apiGetNotice(data = {}) {
  return utils_request.request({
    url: "/wallNewsList",
    data
  });
}
function apiGetDayRandom() {
  return utils_request.request({
    url: "/randomWall"
  });
}
function apiGetClassify(data = {}) {
  return utils_request.request({
    url: "/classify",
    data
  });
}
function apiGetClassList(data = {}) {
  return utils_request.request({
    url: "/wallList",
    data
  });
}
function apiGetSetupScore(data = {}) {
  return utils_request.request({
    url: "/setupScore",
    data
  });
}
function apiGetDownloadWall(data = {}) {
  return utils_request.request({
    url: "/downloadWall",
    data
  });
}
function apiGetDetailWall(data = {}) {
  return utils_request.request({
    url: "/detailWall",
    data
  });
}
function apiGetUserInfo(data = {}) {
  return utils_request.request({
    url: "/userInfo",
    data
  });
}
function apiGetUserWallList(data = {}) {
  return utils_request.request({
    url: "/userWallList",
    data
  });
}
function apiGetWallNewsDetail(data = {}) {
  return utils_request.request({
    url: "/wallNewsDetail",
    data
  });
}
function apiGetSearchWall(data = {}) {
  return utils_request.request({
    url: "/searchWall",
    data
  });
}
exports.apiGetBanner = apiGetBanner;
exports.apiGetClassList = apiGetClassList;
exports.apiGetClassify = apiGetClassify;
exports.apiGetDayRandom = apiGetDayRandom;
exports.apiGetDetailWall = apiGetDetailWall;
exports.apiGetDownloadWall = apiGetDownloadWall;
exports.apiGetNotice = apiGetNotice;
exports.apiGetSearchWall = apiGetSearchWall;
exports.apiGetSetupScore = apiGetSetupScore;
exports.apiGetUserInfo = apiGetUserInfo;
exports.apiGetUserWallList = apiGetUserWallList;
exports.apiGetWallNewsDetail = apiGetWallNewsDetail;
