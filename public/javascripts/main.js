const app = angular.module('chatdad', []);


$(".kayit").hide();

function animateGiris(){
    $(".giris").slideUp(100,hideGiris);
    function hideGiris(){
        $(this).slideDown(500);
        stop();
    }
}
animateGiris();


$('#uyelink').click(function(){

    $(".giris").animate({
        opacity: 0.25,
        left: "+=50",
        height: "toggle"
    }, 500, function() {
        $(".giris").hide();

        $(".kayit").animate({
            opacity: 1,
            left: "+=50",
            height: "toggle"
        }, 500, function() {
            $(".kayit").show();
        });
    });
});

$('#girislink').click(function(){

    $(".kayit").animate({
        opacity: 0.25,
        left: "+=50",
        height: "toggle"
    }, 500, function() {
        $(".kayit").hide();

        $(".giris").animate({
            opacity: 1,
            left: "+=50",
            height: "toggle"
        }, 500, function() {
            $(".giris").show();
        });
    });

});