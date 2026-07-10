document.addEventListener("DOMContentLoaded", function () {
    initPlatformSelect();
    initMorePlatform();
    initCall();
});

/* 平台选择 */
function initPlatformSelect() {
    let buttons = document.querySelectorAll(".platform-right button");
    buttons.forEach(function (btn) {
        btn.onclick = function () {
            buttons.forEach(function (item) {
                item.innerHTML = "选择";
                item.style.background = "#1677ff";
            });
            this.innerHTML = "已选";
            this.style.background = "#00b86b";
        };
    });
}

/* 更多平台 */
function initMorePlatform() {
    let more = document.querySelector(".more-platform");
    if (!more) {
        return;
    }
    more.onclick = function () {
        alert(
            "更多合作平台报价功能将在后续版本开放"
        );
    };
}

/* 呼叫车辆 */
function initCall() {
    let btn = document.querySelector(".call-btn");
    if (!btn) {
        return;
    }
    btn.onclick = function () {
        location.href = "carpool_match.html";
    };
}