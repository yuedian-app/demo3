/*
 * 约电出行 V3.1
 * 我的订单交互
 */
document.addEventListener(
    "DOMContentLoaded",
    function () {
        initMainTabs();
        initStatusTabs();
    }
);

/*
 ============================
 一级分类切换
 ============================
*/
function initMainTabs() {
    const tabs = document.querySelectorAll(
        ".main-tab"
    );
    tabs.forEach(
        function (tab) {
            tab.onclick = function () {
                tabs.forEach(
                    function (item) {
                        item.classList.remove(
                            "active"
                        );
                    }
                );
                tab.classList.add(
                    "active"
                );
                filterOrders();
            };
        }
    );
}

/*
 ============================
 状态切换
 ============================
*/
function initStatusTabs() {
    const tabs = document.querySelectorAll(
        ".status"
    );
    tabs.forEach(
        function (tab) {
            tab.onclick = function () {
                tabs.forEach(
                    function (item) {
                        item.classList.remove(
                            "active"
                        );
                    }
                );
                tab.classList.add(
                    "active"
                );
                filterOrders();
            };
        }
    );
}

/*
 ============================
 订单过滤
 Demo阶段简单实现

 后续可升级：
 1、订单JSON数据驱动
 2、接口查询
 3、分页加载

 ============================
*/
function filterOrders() {
    const mainActive =
        document.querySelector(
            ".main-tab.active"
        ).innerText;
    const statusActive =
        document.querySelector(
            ".status.active"
        ).innerText;
    const orders =
        document.querySelectorAll(
            ".order-card"
        );
    orders.forEach(
        function (order) {
            let show = true;
            const text =
                order.innerText;
            /*
             一级分类
            */
            if (
                mainActive === "出行"
            ) {
                if (
                    !(
                        text.includes("网约车")
                        ||
                        text.includes("顺风车")
                    )
                ) {
                    show = false;
                }
            }
            if (
                mainActive === "补能"
            ) {
                if (
                    !(
                        text.includes("移动补能")
                        ||
                        text.includes("聚合充电")
                    )
                ) {
                    show = false;
                }
            }
            /*
              状态
            */
            if (
                statusActive !== "全部"
            ) {
                if (
                    !text.includes(
                        statusActive
                    )
                ) {
                    show = false;
                }
            }
            order.style.display =
                show
                    ?
                    "block"
                    :
                    "none";
        }
    );
}