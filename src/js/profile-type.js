jQuery(function ($) {
    $('.js-select2').select2({
        width: "100%"
    });

    $(".js-showLink").on("click", function () {
        $("#" + $(this).data("show")).show();
    })
    $(".js-hideLink").on("click", function () {
        $("#" + $(this).data("hide")).hide();
    })

    $('[data-toggle="tooltip"]').tooltip();
});