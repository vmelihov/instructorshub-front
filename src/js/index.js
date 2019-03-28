jQuery(function () {
    $(".js-niceScroll").niceScroll({
        cursorborder: "#b3a598",
        background: "",
        cursorcolor: "#b3a598",
        autohidemode: !1,
    });

    var xlBlockLink = ".js-pageBlockLink",
        xlBlock = ".js-pageBlock",
        ww = $(window).width(),
        modalTopOffset = 50;

    if (ww < 600) {
        modalTopOffset = 10;
    }

    if (ww > 1281) {
        var currentXlBlock = $(xlBlock + ".active").index(),
            startPagesDelay = 150,
            pagesDelay = startPagesDelay;

        function showPages(i) {
            setTimeout(function () {
                $(xlBlock).eq(i).addClass("active");
                currentXlBlock = i;
            }, pagesDelay);
            pagesDelay += startPagesDelay;
        }

        function hidePages(i) {
            setTimeout(function () {
                $(xlBlock).eq(i).removeClass("active");

                if (i > 0) {
                    currentXlBlock = i - 1;
                } else {
                    currentXlBlock = 0;
                }
            }, pagesDelay);
            pagesDelay += startPagesDelay;
        }

        function modalClose() {
            $(".js-modal.active").removeClass("active");
            $(".js-shadow").fadeOut();
        }

        $(xlBlockLink).on("click", function () {
            var _this = $(this),
                _next = _this.parent().index();

            if (_next != currentXlBlock) {
                $(xlBlockLink).removeClass("active");
                _this.addClass("active");

                if (_next > currentXlBlock) {
                    for (var i = currentXlBlock; i < _next + 1; i++) {
                        showPages(i);
                    };
                } else {
                    for (var i = currentXlBlock; i > _next; i--) {
                        hidePages(i);
                    };
                }

                pagesDelay = startPagesDelay;

                modalClose();
            }
        });

        $(".js-distributorOpen").on("click", function () {
            $(".js-shadow").fadeIn();
        });

        $(".js-modalOpen").on("click", function () {
            $("#" + $(this).data("modal")).addClass("active");
        });

        $(".js-modalClose").on("click", function () {
            modalClose();
        });
    } else {
        // До 1280
        $(xlBlockLink).on("click", function () {
            $("html, body").animate({
                scrollTop: $(xlBlock).eq($(this).parent().index()).offset().top
            }, 800);
            $(".js-mobi").slideUp();
        });

        $(".js-modalOpen").on("click", function () {
            $(".js-shadow").fadeIn();
            $("#" + $(this).data("modal")).css("top", $(window).scrollTop() + modalTopOffset).addClass("active").fadeIn();
        });

        $(".js-modalClose").on("click", function () {
            $(".js-modal.active").removeClass("active").fadeOut().attr("style", "");
            $(".js-shadow").fadeOut();
        });
    }

    var newsOnDisplay = 1,
        nbNext = ".js-nbNext",
        nbPrev = ".js-nbPrev",
        nb = ".js-nb";

    if (ww > 400) {
        newsOnDisplay = 4;
    }
    if (ww > 1100) {
        newsOnDisplay = 6;
    }

    checkSliderBtns = function (_next, _prev, _page, _pagesAll) {
        if (_page <= 1) {
            _prev.addClass("disabled");
        } else {
            _prev.removeClass("disabled");
        }
        if (_page >= _pagesAll) {
            _next.addClass("disabled");
        } else {
            _next.removeClass("disabled");
        }
    }

    fromRightToDisplay = function (_page, _slider, _pagesAll) {
        _slider.find(".js-nbDisplayed").removeClass("js-nbDisplayed").addClass("n-left");

        for (var i = newsOnDisplay * (_page - 1); i < newsOnDisplay * _page; i++) {
            _slider.find(nb).eq(i).removeClass("n-right").addClass("js-nbDisplayed");
        };

        checkSliderBtns(_slider.find(nbNext), _slider.find(nbPrev), _page, _pagesAll);
    }
    fromLeftToDisplay = function (_page, _slider, _pagesAll) {
        _slider.find(".js-nbDisplayed").removeClass("js-nbDisplayed").addClass("n-right");

        for (var i = newsOnDisplay * _page; i > newsOnDisplay * (_page - 1); i--) {
            _slider.find(nb).eq(i - 1).removeClass("n-left").addClass("js-nbDisplayed");
        };

        checkSliderBtns(_slider.find(nbNext), _slider.find(nbPrev), _page, _pagesAll);
    }

    $(".js-slider").each(function () {
        var _this = $(this),
            _nbCurr = _this.find(".js-nbCurrent"),
            _nbPrev = _this.find(".js-nbPrev"),
            _nbNext = _this.find(".js-nbNext"),
            _pageCurrent = 1,
            _pagesAll = Math.ceil(_this.find(".js-nb").length / newsOnDisplay);

        if (_pagesAll == 0) {
            _pagesAll = 1;
        }
        _nbCurr.text("1");
        _this.find(".js-nbAll").text(_pagesAll);

        fromRightToDisplay(_pageCurrent, _this, _pagesAll);

        _nbPrev.on("click", function () {
            if ($(this).hasClass("disabled") == false) {
                _pageCurrent--;
                fromLeftToDisplay(_pageCurrent, _this, _pagesAll);
                _nbCurr.text(_pageCurrent);
            }
        });
        _nbNext.on("click", function () {
            if ($(this).hasClass("disabled") == false) {
                _pageCurrent++;
                fromRightToDisplay(_pageCurrent, _this, _pagesAll);
                _nbCurr.text(_pageCurrent);
            }
        });
    });


    $(".js-federalMain").on("click", function () {
        $(".js-federalSelectContent").slideToggle();
    });

    $(".js-federalLink").on("click", function () {
        $(".js-federalSelected").text($(this).text());
        $(".js-federalSelectContent").slideToggle();
    });

    $(".js-mobiOpen").on("click", function () {
        $(".js-mobi").slideToggle();
    });
})