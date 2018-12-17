function setBackground(path) {
    if(!noloading) {
        var img = new Image();
        img.load(path);
    } else {
        document.getElementsByClassName("background")[0].innerHTML += "<img id=\"bg-img\" src=\"" + path + "\">";
        var watching = fit(document.getElementById("bg-img"), document.getElementsByClassName("background")[0], { hAlign: fit.CENTER, vAlign: fit.CENTER, cover: true, apply: true, watch: true });

        document.getElementById("bg-img").onload = function() {
                window.dispatchEvent(new Event('resize'));
        };
    }
}