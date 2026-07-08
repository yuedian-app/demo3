function switchTab(type) {
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => tab.classList.remove("active"));
    if (type === "mobile") {
        tabs[0].classList.add("active");
        document.getElementById("mobilePage").style.display = "block";
        document.getElementById("stationPage").style.display = "none";
    } else {
        tabs[1].classList.add("active");
        document.getElementById("mobilePage").style.display = "none";
        document.getElementById("stationPage").style.display = "block";
    }
    updateButton(type);
}

function updateButton(type) {
    const btn = document.querySelector(".call-btn");
    if (!btn) return;
    btn.innerText = type === "mobile" ? "立即呼叫" : "导航去充电";
}

document.querySelector(".swap-btn")?.addEventListener("click", function () {
    const items = document.querySelectorAll(".address-item");
    if (items.length < 2) return;
    const firstText = items[0].innerHTML;
    const secondText = items[1].innerHTML;
    items[0].innerHTML = secondText;
    items[1].innerHTML = firstText;
});

document.querySelectorAll(".quote-item").forEach(function (item) {
    item.onclick = function () {
        document.querySelectorAll(".quote-item").forEach(function (i) {
            i.classList.remove("selected");
        });
        this.classList.add("selected");
    };
});

document.querySelector(".call-btn")?.addEventListener("click", function () {
    if (document.getElementById("mobilePage").style.display === "none") {
        alert("Demo：打开合作充电站导航");
    } else {
        alert("Demo：正在呼叫移动补能车辆");
    }
});

window.onload = function () {
    const params = new URLSearchParams(location.search);
    const tab = params.get("tab");
    if (tab === "station") {
        switchTab("station");
    } else {
        switchTab("mobile");
    }
};