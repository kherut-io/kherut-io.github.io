Image.prototype.load = function(url){
    var thisImg = this;
    var xmlHTTP = new XMLHttpRequest();

    xmlHTTP.open('GET', url,true);
    xmlHTTP.responseType = 'arraybuffer';

    xmlHTTP.onload = function(e) {
        var blob = new Blob([this.response]);
        thisImg.src = window.URL.createObjectURL(blob);

        document.getElementsByClassName("background")[0].appendChild(thisImg);
        var watching = fit(thisImg, document.getElementsByClassName("background")[0], { hAlign: fit.CENTER, vAlign: fit.CENTER, cover: true, apply: true, watch: true });

        setTimeout(function() {
            window.dispatchEvent(new Event('resize'));
            document.getElementsByClassName("loading")[0].classList.add("hidden");

            setTimeout(function() { document.getElementsByClassName("loading")[0].style.display = "none"; }, 300);
        }, 250);
    };

    xmlHTTP.onprogress = function(e) {
        thisImg.completedPercentage = parseInt((e.loaded / e.total) * 100);
        drawLines(thisImg.completedPercentage);
    };

    xmlHTTP.onloadstart = function() {
        thisImg.completedPercentage = 0;
    };

    xmlHTTP.send();
};

Image.prototype.completedPercentage = 0;

function drawLines(percentage) {
    if(percentage <= 16) document.getElementsByClassName("left")[0].style.height = (parseInt(percentage / 16 * document.getElementsByClassName("outline-logo")[0].offsetHeight) + 3) + "px";
    else if(percentage <= 50)  { document.getElementsByClassName("bottom")[0].style.width = (parseInt((percentage - 16) / 34 * document.getElementsByClassName("outline-logo")[0].offsetWidth) + 3) + "px"; drawLines(16); }
    else if(percentage <= 66) { document.getElementsByClassName("right")[0].style.height = (parseInt((percentage - 50) / 16 * document.getElementsByClassName("outline-logo")[0].offsetHeight) + 3) + "px"; drawLines(50); }
    else { document.getElementsByClassName("top")[0].style.width = (parseInt((percentage - 66) / 34 * document.getElementsByClassName("outline-logo")[0].offsetWidth) + 3) + "px"; drawLines(66); }
}