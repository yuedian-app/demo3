/*
 * 约电出行 V3.1
 * 顺风车匹配逻辑
 */

document.addEventListener(
    "DOMContentLoaded",
    function () {
        startCountdown();
        initButtons();
    }
);

/*
 =========================
 倒计时
 =========================
*/
function startCountdown() {
    let count = 12;
    const element =
        document.getElementById(
            "count"
        );
    const timer =
        setInterval(function () {
            count--;
            if (element) {
                element.innerText = count;
            }
            if (count <= 0) {
                clearInterval(timer);
                matchSuccess();
            }
        }, 1000);
}

/*
 =========================
 匹配成功
 =========================
*/
function matchSuccess() {
    showToast(
        "已匹配到最优顺风车车主"
    );
    setTimeout(
        function () {
            location.href =
                "carpool_detail.html";
        },
        1200
    );
}

/*
 =========================
 底部按钮
 =========================
*/
function initButtons() {
    const cancel =
        document.querySelector(
            ".cancel-btn"
        );
    const service =
        document.querySelector(
            ".service-btn"
        );
    if (cancel) {
        cancel.onclick = function () {
            let result =
                confirm(
                    "确定取消本次匹配吗？"
                );
            if (result) {
                history.back();
            }
        };
    }
    if (service) {
        service.onclick = function () {
            showToast(
                "客服功能开发中"
            );
        };
    }
}





/*
 =========================
 Toast
 =========================
*/


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
