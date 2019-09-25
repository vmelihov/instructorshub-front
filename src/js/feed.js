jQuery(function ($) {
    $(".js-fav").on("click", function () {
        $(this).toggleClass("fas");
    });

    if ($(window).width() < 769) {
        $(".js-one").each(function () {
            var _this = $(this);
            _this.find(".js-body").hide();
            _this.find(".js-footer").hide();
            _this.find(".js-view").removeClass("active");
        });
    }

    $(".js-view").on("click", function () {
        var _this = $(this),
            _parent = _this.parents(".js-one");

        _this.toggleClass("active");
        _parent.find(".js-body").slideToggle();

        if ($(window).width() < 769) {
            _parent.find(".js-footer").slideToggle();
        }
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