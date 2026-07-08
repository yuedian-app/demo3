// =========================
// 首页跳转逻辑
// =========================

// 进入出行页面
// type:
// taxi      网约车
// carpool   顺风车

function goTravel(type) {
    let url = "travel.html";
    if (type) {
        url += "?tab=" + type;
    }
    window.location.href = url;
}

// 进入补能页面
// type:
// rescue   移动补能
// station  聚合充电站
function goEnergy(type) {
    let url = "energy.html";
    if (type) {
        url += "?tab=" + type;
    }
    window.location.href = url;
}

// 进入订单详情
function goOrder() {
    window.location.href = "order.html";
}

// =========================
// 首页搜索框
// =========================
document.addEventListener("DOMContentLoaded", function () {
    const searchBox = document.querySelector(".search-box");
    if (searchBox) {
        searchBox.addEventListener("click", function () {
            goTravel();
        });
    }
});