const IMAGEPICKER = (imageElement, callback) => {
    const input = document.createElement("input");
    input.type = "file";
    input.style.display = "none";
    input.accept = "image/*";
    document.body.appendChild(input);
    input.addEventListener("change", function () {
        var file = this.files[0];
        if (!file) return;
        var reader = new FileReader();
        reader.onload = function (event) {
            var image = new Image();
            image.src = event.target.result;
            image.onload = function () {
                var maxWidth = 800;
                var maxHeight = 600;
                var canvas = document.createElement("canvas");
                var ctx = canvas.getContext("2d");
                var width = image.width;
                var height = image.height;
                if (width > height) {
                    if (width > maxWidth) {
                        height *= maxWidth / width;
                        width = maxWidth;
                    }
                } else {
                    if (height > maxHeight) {
                        width *= maxHeight / height;
                        height = maxHeight;
                    }
                }
                canvas.width = width;
                canvas.height = height;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(image, 0, 0, width, height);
                var base64Data;
                if (file.type === "image/png") {
                    base64Data = canvas.toDataURL("image/png");
                } else {
                    var quality = 0.7;
                    base64Data = canvas.toDataURL("image/jpeg", quality);
                    while (base64Data.length > 49800 && quality > 0) {
                        quality -= 0.1;
                        base64Data = canvas.toDataURL("image/jpeg", quality);
                    }
                }
                if (base64Data.length < 49800) {
                    imageElement.src = base64Data;
                    callback(base64Data);
                } else {
                    TOAST("Image Format Error");
                }
            };
        };
        reader.readAsDataURL(file);
    });
    input.click();
    input.remove();
};
export{IMAGEPICKER};