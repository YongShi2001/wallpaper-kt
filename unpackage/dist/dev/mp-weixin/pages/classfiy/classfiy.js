"use strict";
const common_vendor = require("../../common/vendor.js");
const api_apis = require("../../api/apis.js");
if (!Array) {
  const _easycom_custom_nav_bar2 = common_vendor.resolveComponent("custom-nav-bar");
  const _easycom_theme_item2 = common_vendor.resolveComponent("theme-item");
  (_easycom_custom_nav_bar2 + _easycom_theme_item2)();
}
const _easycom_custom_nav_bar = () => "../../components/custom-nav-bar/custom-nav-bar.js";
const _easycom_theme_item = () => "../../components/theme-item/theme-item.js";
if (!Math) {
  (_easycom_custom_nav_bar + _easycom_theme_item)();
}
const _sfc_main = {
  __name: "classfiy",
  setup(__props) {
    const classfiyList = common_vendor.ref([]);
    const getClassify = async () => {
      let res = await api_apis.apiGetClassify({
        pageSize: 20
      });
      classfiyList.value = res.data;
    };
    common_vendor.onShareAppMessage((e) => {
      return {
        title: "至秦禾呈，精选分类",
        path: "/pages/classfiy/classfiy"
      };
    });
    common_vendor.onShareTimeline((e) => {
      return {
        title: "至秦禾呈，精选分类",
        imageUrl: "https://www.qingnian8.com/images/hot1.jpg"
      };
    });
    getClassify();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "分类"
        }),
        b: common_vendor.f(classfiyList.value, (item, k0, i0) => {
          return {
            a: item._id,
            b: "a35fe661-1-" + i0,
            c: common_vendor.p({
              item
            })
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a35fe661"]]);
_sfc_main.__runtimeHooks = 6;
wx.createPage(MiniProgramPage);
