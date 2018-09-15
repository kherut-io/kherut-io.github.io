var logoSize;
var sizeOnScreeen = 0.5;
var fontSizeFactor = 1.5;
var marginFactor = 22.375;
var borderWidthFactor = 26.43;
var fadingTime = 350;
var fontLoaded = false;

($(window).width() > $(window).height()) ? logoSize = sizeOnScreeen * $(window).height() : logoSize = sizeOnScreeen * $(window).width();

logoSize *= 0.71;
logoSize = Math.round(logoSize);

$(".animation .frame").width(logoSize);
$(".animation .frame").height(logoSize);
$(".animation .frame").css("border-width", Math.round(logoSize / borderWidthFactor));

$(".animation .letter").css("font-size", Math.round(logoSize * fontSizeFactor) + "px");
$(".animation .letter").css("margin-left", "-" + Math.round(logoSize / marginFactor) + "px");

var interval = setInterval(function() {
    if(document.fonts.check(Math.round(logoSize * fontSizeFactor) + "px Poppins")) {
        clearInterval(interval);

        setInterval(function() { $(".animation .letter").fadeIn(fadingTime); }, 50);

        setTimeout(function() {
            $(".animation").fadeOut(fadingTime);
            setTimeout(function() { $("body").css("overflow", "auto"); }, fadingTime);
        }, 3500);
    }
}, 50);