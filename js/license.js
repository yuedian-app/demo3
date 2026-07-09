document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".license-image");
    images.forEach(function (img) {
        img.addEventListener("click", function () {
            showPreview(this.src, this.alt);
        });
    });
});

function showPreview(src, title) {
    let mask = document.createElement("div");
    mask.className = "preview-mask";
    let close = document.createElement("div");
    close.className = "preview-close";
    close.innerHTML = "✕";
    let image = document.createElement("img");
    image.className = "preview-image";
    image.src = src;
    image.alt = title;
    mask.appendChild(close);
    mask.appendChild(image);
    document.body.appendChild(mask);
    close.onclick = function () {
        mask.remove();
    };

    mask.onclick = function (e) {
        if (e.target === mask) {
            mask.remove();
        }
    };
}