jQuery(function ($) {
    select2Events = function () {
        $('.js-categoryFaculty .js-select2').select2({
            width: "100%"
        });
        $('.js-categoryFaculty .js-select2').on('select2:select', function (e) {
            $(this).closest(".js-cfBlock").find(".d-none").removeClass("d-none");
        });
    }

    select2Events();

    $(".js-cfAddBlock").on("click", function () {
        $(".js-categoryFaculty").append($(".js-cfBlockParent").html());
        select2Events();
    });

    $(".js-showLink").on("click", function () {
        $("#" + $(this).data("show")).show();
    })
    $(".js-hideLink").on("click", function () {
        $("#" + $(this).data("hide")).hide();
    })

    $('[data-toggle="tooltip"]').tooltip();
});