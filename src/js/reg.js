jQuery(function ($) {
    $(".js-profileType").on("click", function () {
        if (!$(this).hasClass("active")) {
            $(".js-profileType").toggleClass("active");
            $(".js-institution").toggleClass("d-none");
        }
    });
    $('.js-selectize').selectize({
        create: true,
        sortField: 'text'
    });
});