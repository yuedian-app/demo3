document.addEventListener("DOMContentLoaded", function () {
    initButtons();
});

function initButtons() {
    let viewOrder = document.querySelector(".viewOrder-btn");
    let travelAgain = document.querySelector(".travelAgain-btn");
    if (viewOrder) {
        viewOrder.onclick = function () {
            location.href = "order_detail.html";
        };
    }
    if (travelAgain) {
        travelAgain.onclick = function () {
            location.href = "travel.html";
        };
    }
}