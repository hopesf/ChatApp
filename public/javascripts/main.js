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
    $(".giris").hide();
    $(".kayit").show();
});

$('#girislink').click(function(){
    $(".giris").show();
    $(".kayit").hide();
});