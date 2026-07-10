document.addEventListener("DOMContentLoaded", function () {
    initButtons();
});

function initButtons() {
    let contact = document.querySelector(".contact-btn");
    let finish = document.querySelector(".finish-btn");
    let cancel = document.querySelector(".cancel-btn");
    if (contact) {
        contact.onclick = function () {
            alert(
                "正在呼叫司机，请稍候..."
            );
        };
    }
    if (finish) {
        finish.onclick = function () {
            location.href = "trip_finish.html";
        };
    }
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
}