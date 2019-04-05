jQuery(function () {
    $(".js-activeOnOff").on("click", function () {
        $("#" + $(this).data("id")).toggleClass("active");
    });
})