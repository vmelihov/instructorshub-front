jQuery(function ($) {
    $('.js-select2').select2();

    var $expirience = $(".js-expirience")
    $(".js-expYes").on("click", function () {
        $expirience.show();
    })
    $(".js-expNo").on("click", function () {
        $expirience.hide();
    })
});