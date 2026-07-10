document.addEventListener("DOMContentLoaded", function () {
    startCountdown();
    bindButtons();
});

let seconds = 8;

function startCountdown() {
    let count = document.getElementById("count");
    let timer = setInterval(function () {
        seconds--;
        if (count) {
            count.innerHTML = seconds;
        }
        if (seconds <= 0) {
            clearInterval(timer);
            matchSuccess();
        }
    }, 1000);
}

function matchSuccess() {
    alert(
        "车辆匹配成功，正在进入行程详情"
    );
    location.href = "trip_detail.html";
}

function bindButtons() {
    let cancel = document.querySelector(".cancel-btn");
    let service = document.querySelector(".service-btn");
    if (cancel) {
        cancel.onclick = function () {
            let result = confirm(
                "确定取消当前订单吗？"
            );
            if (result) {
                location.href = "travel.html";
            }
        };
    }
    if (service) {
        service.onclick = function () {
            alert(
                "客服功能将在正式版本接入"
            );
        };
    }
}