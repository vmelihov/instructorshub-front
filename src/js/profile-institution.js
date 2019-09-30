jQuery(function ($) {
    $(".js-settingsOpen").on("click", function () {
        $(this).toggleClass("active");
        $(".js-settingsContent").slideToggle();
    });

    if ($(window).width() < 769) {
        $(".js-vacanciesBtn").on("click", function () {
            $(".js-vacanciesList").toggle();
        });

        $(document).on("click", function (event) {
            if (!$(event.target).closest('.js-vacancies').length) {
                $(".js-vacanciesList").hide();
            }
        });
    }

    $(".js-vacanciesList div").on("click", function () {
        $(".js-vacanciesBtnText").text($(this).text());
        $(".js-vacanciesList").toggle();
    });
});