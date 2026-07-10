document.addEventListener("DOMContentLoaded", function () {
    initRadioGroup();
    initDepartType();
    initSubmit();
});

function initRadioGroup() {
    document.querySelectorAll(".radio-group").forEach(function (group) {
        let items = group.querySelectorAll(".radio-item");
        items.forEach(function (item) {
            item.onclick = function () {
                items.forEach(function (i) {
                    i.classList.remove("active");
                });
                this.classList.add("active");
            };
        });
    });
}

function initDepartType() {
    const group = document.getElementById("departType");
    const reserve = document.getElementById("reserveBox");
    group.querySelectorAll(".radio-item").forEach(function (item) {
        item.onclick = function () {
            group.querySelectorAll(".radio-item").forEach(function (i) {
                i.classList.remove("active");
            });
            this.classList.add("active");
            if (this.dataset.type === "reserve") {
                reserve.classList.remove("hidden");
            } else {
                reserve.classList.add("hidden");
            }
        };
    });
}

function initSubmit() {
    document.querySelector(".submit-btn").onclick = function () {
        location.href = "carpool_order.html";
    };
}