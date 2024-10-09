"use strict";
require("../common/vendor.js");
function compareTimestamp(timestamp) {
  const currentTime = (/* @__PURE__ */ new Date()).getTime();
  const timeDiff = currentTime - timestamp;
  if (timeDiff < 6e4) {
    return "1分钟内";
  } else if (timeDiff < 36e5) {
    return Math.floor(timeDiff / 6e4) + "分钟前更新";
  } else if (timeDiff < 864e5) {
    return Math.floor(timeDiff / 36e5) + "小时前更新";
  } else if (timeDiff < 2592e6) {
    return Math.floor(timeDiff / 864e5) + "天前更新";
  } else if (timeDiff < 7776e6) {
    return Math.floor(timeDiff / 2592e6) + "月前更新";
  } else {
    return "null";
  }
}
exports.compareTimestamp = compareTimestamp;
