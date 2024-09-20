"use strict";
const common_vendor = require("../common/vendor.js");
let SYSTEM_INFO = common_vendor.index.getSystemInfoSync();
const getStatusBarHeight = () => {
  return SYSTEM_INFO.statusBarHeight || 15;
};
const getTitleBarHeight = () => {
  if (common_vendor.index.getMenuButtonBoundingClientRect) {
    let {
      top,
      height
    } = common_vendor.index.getMenuButtonBoundingClientRect();
    return height + (top - getStatusBarHeight()) * 2;
  } else {
    return 40;
  }
};
const getNavBarHeight = () => {
  return getStatusBarHeight() + getTitleBarHeight();
};
exports.getNavBarHeight = getNavBarHeight;
exports.getStatusBarHeight = getStatusBarHeight;
exports.getTitleBarHeight = getTitleBarHeight;
