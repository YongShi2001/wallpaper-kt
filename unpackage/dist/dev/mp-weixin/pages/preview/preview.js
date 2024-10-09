"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_system = require("../../utils/system.js");
const api_apis = require("../../api/apis.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_dateformat2 + _easycom_uni_rate2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_uni_rate = () => "../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_dateformat + _easycom_uni_rate + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "preview",
  setup(__props) {
    const maskState = common_vendor.ref(true);
    const infoPopup = common_vendor.ref(null);
    const scorePopup = common_vendor.ref(null);
    const userScore = common_vendor.ref(0);
    const classList = common_vendor.ref([]);
    const currentId = common_vendor.ref(null);
    const currentIndex = common_vendor.ref(0);
    const currentInfo = common_vendor.ref(null);
    const isScore = common_vendor.ref(false);
    const readImgs = common_vendor.ref([]);
    const storgClassList = common_vendor.index.getStorageSync("storgClassList") || [];
    classList.value = storgClassList.map((item) => {
      return {
        ...item,
        picurl: item.smallPicurl.replace("_small.webp", ".jpg")
      };
    });
    common_vendor.onLoad(async (e) => {
      currentId.value = e.id;
      if (e.type == "share") {
        let res = await api_apis.apiGetDetailWall({
          id: currentId.value
        });
        classList.value = res.data.map((item) => {
          return {
            ...item,
            picurl: item.smallPicurl.replace("_small.webp", ".jpg")
          };
        });
      }
      currentIndex.value = classList.value.findIndex((item) => item._id == currentId.value);
      currentInfo.value = classList.value[currentIndex.value];
      readImgsFun();
    });
    const SwiperChange = (e) => {
      currentIndex.value = e.detail.current;
      currentInfo.value = classList.value[currentIndex.value];
      readImgsFun();
    };
    const maskChange = () => {
      maskState.value = !maskState.value;
    };
    const clickInfo = () => {
      infoPopup.value.open();
    };
    const clickInfoClose = () => {
      infoPopup.value.close();
    };
    const clickScoreClose = () => {
      scorePopup.value.close();
      userScore.value = 0;
      isScore.value = false;
    };
    const submitScore = async () => {
      common_vendor.index.showLoading({
        title: "加载中..."
      });
      let {
        classid,
        _id: wallId
      } = currentInfo.value;
      let res = await api_apis.apiGetSetupScore({
        classid,
        wallId,
        userScore: userScore.value
      });
      common_vendor.index.hideLoading();
      if (res.errCode === 0) {
        common_vendor.index.showToast({
          title: "评分成功",
          icon: "none"
        });
        classList.value[currentIndex.value].userScore = userScore.value;
        common_vendor.index.setStorageSync("storgClassList", classList.value);
        clickScoreClose();
      }
      console.log(res);
    };
    const goBack = () => {
      common_vendor.index.navigateBack();
    };
    const clickDownload = async () => {
      try {
        common_vendor.index.showLoading({
          title: "下载中...",
          mask: true
        });
        let {
          classid,
          _id: wallId
        } = currentInfo.value;
        let res = await api_apis.apiGetDownloadWall({
          classid,
          wallId
        });
        if (res.errCode != 0)
          throw res;
        common_vendor.index.getImageInfo({
          src: currentInfo.value.picurl,
          success: (res2) => {
            common_vendor.index.saveImageToPhotosAlbum({
              filePath: res2.path,
              success: (res3) => {
                common_vendor.index.showToast({
                  title: "保存成功，请到相册查看",
                  icon: "none"
                });
              },
              fail: (err) => {
                if (err.errMsg == "saveImageToPhotosAlbum:fail auth deny") {
                  common_vendor.index.showToast({
                    title: "保存失败，请重新点击下载",
                    icon: "none"
                  });
                  return;
                }
                common_vendor.index.showModal({
                  title: "提示",
                  content: "需要授权保存相册",
                  success: (res3) => {
                    if (res3.confirm) {
                      common_vendor.index.openSetting({
                        success: (setting) => {
                          console.log(
                            setting
                          );
                          if (setting.authSetting["scope.writePhotosAlbum"]) {
                            common_vendor.index.showToast({
                              title: "获取授权成功",
                              icon: "none"
                            });
                          } else {
                            common_vendor.index.showToast({
                              title: "获取授权失败",
                              icon: "none"
                            });
                          }
                        }
                      });
                    }
                  }
                });
              },
              complete: (res3) => {
                common_vendor.index.hideLoading();
              }
            });
          }
        });
      } catch (err) {
        console.log(err);
        common_vendor.index.hideLoading();
      }
    };
    common_vendor.onShareAppMessage((e) => {
      return {
        title: "至秦禾呈",
        path: "/pages/preview/preview?id=" + currentId.value + "&type=share"
      };
    });
    common_vendor.onShareTimeline((e) => {
      return {
        title: "至秦禾呈",
        query: "id=" + currentId.value + "&type=share"
      };
    });
    function readImgsFun() {
      readImgs.value.push(
        currentIndex.value <= 0 ? classList.value.length - 1 : currentIndex.value,
        currentIndex.value,
        currentIndex.value >= classList.value.length - 1
      );
      readImgs.value = [...new Set(readImgs.value)];
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: currentInfo.value
      }, currentInfo.value ? common_vendor.e({
        b: common_vendor.f(classList.value, (item, index, i0) => {
          return common_vendor.e({
            a: readImgs.value.includes(index)
          }, readImgs.value.includes(index) ? {
            b: common_vendor.o((...args) => maskChange && maskChange(...args), item._id),
            c: item.picurl
          } : {}, {
            d: item._id
          });
        }),
        c: currentIndex.value,
        d: common_vendor.o(SwiperChange),
        e: maskState.value
      }, maskState.value ? common_vendor.e({
        f: common_vendor.p({
          type: "back",
          size: "20",
          color: "#ccc"
        }),
        g: common_vendor.unref(utils_system.getStatusBarHeight)() + "px",
        h: common_vendor.o(goBack),
        i: common_vendor.t(currentIndex.value + 1),
        j: common_vendor.t(classList.value.length),
        k: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "hh:mm"
        }),
        l: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "MM月dd日"
        }),
        m: currentInfo.value
      }, currentInfo.value ? {
        n: common_vendor.p({
          type: "info",
          size: "23"
        }),
        o: common_vendor.o(clickInfo),
        p: common_vendor.p({
          type: "star",
          size: "23"
        }),
        q: common_vendor.t(currentInfo.value.score),
        r: common_vendor.o((...args) => currentInfo.value && currentInfo.value(...args)),
        s: common_vendor.p({
          type: "download",
          size: "23"
        }),
        t: common_vendor.o(clickDownload)
      } : {}) : {}, {
        v: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999"
        }),
        w: common_vendor.o(clickInfoClose),
        x: common_vendor.t(currentInfo.value._id),
        y: common_vendor.t(currentInfo.value.nickname),
        z: common_vendor.p({
          readonly: true,
          touchable: true,
          value: currentInfo.value.score,
          size: "16"
        }),
        A: common_vendor.t(currentInfo.value.score),
        B: common_vendor.t(currentInfo.value.description),
        C: common_vendor.f(currentInfo.value.tabs, (item, k0, i0) => {
          return {
            a: common_vendor.t(item)
          };
        }),
        D: _ctx.tab,
        E: common_vendor.sr(infoPopup, "2dad6c07-6", {
          "k": "infoPopup"
        }),
        F: common_vendor.p({
          type: "bottom"
        }),
        G: common_vendor.t(isScore.value ? "已经评分了~" : "壁纸评分"),
        H: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999"
        }),
        I: common_vendor.o(clickScoreClose),
        J: common_vendor.o(($event) => userScore.value = $event),
        K: common_vendor.p({
          allowHalf: true,
          disabled: isScore.value,
          ["disabled-color"]: "#FFCA3F",
          modelValue: userScore.value
        }),
        L: common_vendor.t(userScore.value),
        M: common_vendor.o(submitScore),
        N: !userScore.value || isScore.value,
        O: common_vendor.sr(scorePopup, "2dad6c07-9", {
          "k": "scorePopup"
        }),
        P: common_vendor.p({
          ["is-mask-click"]: false
        })
      }) : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2dad6c07"]]);
_sfc_main.__runtimeHooks = 6;
wx.createPage(MiniProgramPage);
