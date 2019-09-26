jQuery(function ($) {
    if ($(window).width() < 769) {
        $(".js-vacanciesBtn").on("click", function () {
            $(".js-vacanciesList").toggle();
        });

        $(document).on("click", function (event) {
            if (!$(event.target).closest('.js-vacancies').length) {
                $(".js-vacanciesList").hide();
            }
        });

        $(".dropdown").on("click", function () {
            $(".js-vacanciesList").hide();
        });
    }

    $(".js-openFilter").on("click", function () {
        $(this).toggleClass("active");
        $(".js-filterContent").slideToggle();
    });

    $(".js-vacanciesList div").on("click", function () {
        $(".js-vacanciesBtnText").text($(this).text());
        $(".js-vacanciesList").toggle();
    });

    $(".js-sortItems div").on("click", function () {
        $(".js-sortText").text($(this).text());
        $(".js-sortItems").toggleClass("show");
    });



    $('.js-selectize').selectize({
        create: true,
        sortField: 'text'
    });
});