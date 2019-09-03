jQuery(function ($) {
    $(".js-showLink").on("click", function () {
        $("#" + $(this).data("show")).show();
    })
    $(".js-hideLink").on("click", function () {
        $("#" + $(this).data("hide")).hide();
    })

    $('[data-toggle="tooltip"]').tooltip();

    $('.js-selectize').selectize({
        create: true,
        sortField: 'text'
    });
});