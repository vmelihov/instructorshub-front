jQuery(function ($) {
    $(".js-fav").on("click", function () {
        $(this).toggleClass("fas");
    });

    $(".js-view").on("click", function () {
        $(this).toggleClass("active").parents(".js-content").find(".js-body").slideToggle();
    });
    $(".js-openFilter").on("click", function () {
        $(this).toggleClass("active");
        $(".js-filterContent").slideToggle();
    });
});