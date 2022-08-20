
const form = document.getElementById("qrform");
const qr = document.getElementById("qrcode");

form.addEventListener("submit", e => {
    e.preventDefault();
    const url = document.getElementById("url").value;
    const size = document.getElementById("size").value;
    const color = document.getElementById("color").value;

    qr.innerHTML = "";
    createQRCode(url, size, color);
})

const createQRCode = (url, size, color) => {
    document.getElementById("card__url").innerHTML = url;
    new QRCode(document.getElementById("qrcode"), {
        text: url,
        width: size,
        height: size,
        colorDark: color,
        colorLight: "#FFFFFF",
        correctLevel: QRCode.CorrectLevel.H
    });
}

document.querySelectorAll(".form__control__input").forEach(input => {
    input.addEventListener("focusin", e => {
        input.classList.add("focus")
    })
});
document.querySelectorAll(".form__control__input").forEach(input => {
    input.addEventListener("focusout", e => {
        if (input.children[1].value.trim() === "") {
            input.classList.remove("focus")
        }
    })
});


document.getElementById("download__qr").addEventListener("click", e => {
    let buttonDownload = document.getElementById("download__qr");
    buttonDownload.style.display = "none";
    var c = document.querySelector('.qrcode__container');
    html2canvas(c).then(canvas => {
        document.querySelector("#img").innerHTML = "";
        document.querySelector("#img").appendChild(canvas)
        var dataUrl = canvas.toDataURL();
        var imageFoo = document.createElement('img');
        imageFoo.src = dataUrl;
        let finalImg = document.getElementById("imgf");
        finalImg.innerHTML = "";
        finalImg.appendChild(imageFoo);
        const image = document.querySelector("#imgf img").src;
        const link = document.createElement("a");
        link.href = image;
        link.download = "qrcode.png";
        link.click();
    });
    buttonDownload.style.display = "flex";
})