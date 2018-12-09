Image.prototype.load = function(url){
    var thisImg = this;
    var xmlHTTP = new XMLHttpRequest();
    xmlHTTP.open('GET', url,true);
    xmlHTTP.responseType = 'arraybuffer';
    xmlHTTP.onload = function(e) {
        var blob = new Blob([this.response]);
        thisImg.src = window.URL.createObjectURL(blob);
    };
    xmlHTTP.onprogress = function(e) {
        thisImg.completedPercentage = parseInt((e.loaded / e.total) * 100);
    };
    xmlHTTP.onloadstart = function() {
        thisImg.completedPercentage = 0;
    };
    xmlHTTP.send();
};

Image.prototype.completedPercentage = 0;

function drawLines(percentage) {
    console.log(percentage);

    if(percentage <= 16) document.getElementsByClassName("left")[0].style.height = parseInt(percentage / 16 * 205) + "px";
    else if(percentage <= 50) document.getElementsByClassName("bottom")[0].style.width = parseInt((percentage - 16) / 34 * 428) + "px";
    else if(percentage <= 66) document.getElementsByClassName("right")[0].style.height = parseInt((percentage - 50) / 16 * 205) + "px";
    else document.getElementsByClassName("top")[0].style.width = parseInt((percentage - 66) / 34 * 428) + "px";
}