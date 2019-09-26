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
});