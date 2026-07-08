// =========================
// 出行页面逻辑
// =========================


// TAB切换
function switchTab(type) {
    const taxiPage = document.getElementById("taxiPage");
    const carpoolPage = document.getElementById("carpoolPage");
    const tabs = document.querySelectorAll(".tab");
    if (type === "carpool") {
        taxiPage.style.display = "none";
        carpoolPage.style.display = "block";
        tabs[0].classList.remove("active");
        tabs[1].classList.add("active");
    } else {
        taxiPage.style.display = "block";
        carpoolPage.style.display = "none";
        tabs[0].classList.add("active");
        tabs[1].classList.remove("active");
    }
}

// =========================
// 页面初始化
// =========================
document.addEventListener("DOMContentLoaded", function () {
    // 获取URL参数
    const params = new URLSearchParams(
        window.location.search
    );
    const tab = params.get("tab");
    if (tab === "carpool") {
        switchTab("carpool");
    } else {
        switchTab("taxi");
    }
    // 立即叫车按钮
    const callBtn = document.querySelector(".call-btn");
    if (callBtn) {
        callBtn.addEventListener("click", function () {
            alert("正在为您生成订单");
            // 后续替换：
            // location.href="order-confirm.html";
        });
    }
});