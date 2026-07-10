/*
 * 约电出行 V3.1
 * 顺风车详情逻辑
 */
document.addEventListener(
    "DOMContentLoaded",
    function () {
        initButtons();
    }
);

function initButtons() {
    const contact =
        document.querySelector(
            ".contact-btn"
        );
    const finish =
        document.querySelector(
            ".finish-btn"
        );
    const cancel =
        document.querySelector(
            ".cancel-btn"
        );
    if (contact) {
        contact.onclick = function () {
            showToast(
                "正在联系王师傅"
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
            let result =
                confirm(
                    "确定取消本次同行吗？"
                );
            if (result) {
                history.back();
            }
        };
    }
}
function showToast(text) {
    const toast =
        document.createElement(
            "div"
        );
    toast.className = "toast";
    toast.innerText = text;
    document.body.appendChild(
        toast
    );
    setTimeout(
        function () {
            toast.remove();
        },
        1500
    );
}