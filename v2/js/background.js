function setBackground() {
    var path = "img/backgrounds/danakil.jpg";

    if(!noloading) {
        var img = new Image();
        img.load(path);
    } else {
        document.getElementsByClassName("background")[0].innerHTML += "<img src=\"" + path + "\">";
    }
}