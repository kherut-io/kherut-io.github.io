var logoSize;
var sizeOnScreeen = 0.5;
var fontSizeFactor = 1.5;
var marginFactor = 22.375;
var borderWidthFactor = 26.43;
var fadingTime = 350;

($(window).width() > $(window).height()) ? logoSize = sizeOnScreeen * $(window).height() : logoSize = sizeOnScreeen * $(window).width();

logoSize *= 0.71;
logoSize = Math.round(logoSize);

$(".animation .frame").width(logoSize);
$(".animation .frame").height(logoSize);
$(".animation .frame").css("border-width", Math.round(logoSize / borderWidthFactor));

$(".animation .letter").css("font-size", Math.round(logoSize * fontSizeFactor) + "px");
$(".animation .letter").css("margin-left", "-" + Math.round(logoSize / marginFactor) + "px");

var font = new FontFace("Poppins Thin", "url(fonts/Poppins-Thin.ttf)");

font.load().then(function(loaded_face) {
    document.fonts.add(loaded_face);

    $(".animation .letter").fadeIn(fadingTime);

    setTimeout(function() {
        $(".animation").fadeOut(fadingTime);
        setTimeout(function() { $("body").css("overflow", "auto"); }, fadingTime);
    }, 2500);
});
