window.addEventListener("scroll", function () {
    if (window.pageYOffset > 30) {
        document.querySelector("nav").classList.add("header-active");
    } else {
        document.querySelector("nav").classList.remove("header-active");
    }
});
// const iconBoxes = document.querySelectorAll(".box");
// for (const box of iconBoxes) {
//     box.addEventListener("click", function (e) {
//         e.preventDefault();
//         window.location.href = box.children[0].children[0].getAttribute("href");
//     })
// }