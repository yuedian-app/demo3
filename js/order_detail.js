document.addEventListener("DOMContentLoaded", function () {
    initButtons();
});

function initButtons() {
    let requestInvoice = document.querySelector(".requestInvoice-btn");
    let contactCustomerService = document.querySelector(".contactCustomerService-btn");
    let travelAgain = document.querySelector(".travelAgain-btn");
    if (requestInvoice) {
        requestInvoice.onclick = function () {
            alert(
                "发票功能将在后续版本开放"
            );
        };
    }
    if (contactCustomerService) {
        contactCustomerService.onclick = function () {
            alert(
                "客服服务功能将在后续版本开放"
            );
        };
    }
    if (travelAgain) {
        travelAgain.onclick = function () {
            location.href = "travel.html";
        };
    }
}