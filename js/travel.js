/* 约电出行 V3.1 travel.html 页面逻辑 */
document.addEventListener("DOMContentLoaded", function () {
    initSwap();
    initCallButton();
    initMorePlatform();
    initTabFromUrl();
});


/* =========================
   TAB切换
   网约车 / 顺风车
   ========================= */
function switchTab(type) {
    let tabs = document.querySelectorAll(".tab");
    tabs.forEach(function (item) {
        item.classList.remove("active");
    });
    if (type === "taxi") {
        tabs[0].classList.add("active");
        document.getElementById("taxiPage").style.display = "block";
        document.getElementById("carpoolPage").style.display = "none";
    }
    if (type === "carpool") {
        tabs[1].classList.add("active");
        document.getElementById("taxiPage").style.display = "none";
        document.getElementById("carpoolPage").style.display = "block";
    }
}

/* =========================
   起终点交换
   ========================= */
function initSwap() {
    let swap = document.querySelector(".swap-btn");
    if (!swap) {
        return;
    }
    swap.onclick = function () {
        let items = document.querySelectorAll(".address-item");
        if (items.length >= 2) {
            let first = items[0].innerHTML;
            items[0].innerHTML = items[1].innerHTML;
            items[1].innerHTML = first;
        }
    };
}

/* =========================
   立即叫车/预约顺风车
   ========================= */
function initCallButton() {
    let buttons = document.querySelectorAll(".call-btn");
    buttons.forEach(function (btn) {
        btn.onclick = function () {
            let text = this.innerText;
            if (text.indexOf("叫车") > -1) {
                window.location.href = "taxi_option.html";
            }
            else {
                window.location.href = "carpool_option.html";
            }
        };
    });
}

/* =========================
   更多平台报价
   ========================= */
function initMorePlatform() {
    let more = document.querySelectorAll(".more-platform");
    more.forEach(function (item) {
        item.onclick = function () {
            alert(
                "更多合作平台报价功能 Demo 展示"
            );
        };
    });
}

/* =========================
   模拟地址选择
   后续接地图API
   ========================= */
let addressItems = document.querySelectorAll(".address-item");
addressItems.forEach(function (item) {
    item.onclick = function () {
        alert(
            "地址选择功能，后续接入地图服务"
        );
    };
});


/* =========================
   根据首页入口定位TAB
   ========================= */
function initTabFromUrl() {
    let params =
        new URLSearchParams(
            window.location.search
        );
    let tab =
        params.get("tab");
    if (tab === "carpool") {
        switchTab("carpool");
    }
    else {
        switchTab("taxi");
    }
}