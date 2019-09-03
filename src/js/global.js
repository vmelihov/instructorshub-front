jQuery(function () {
    $(".js-activeOnOff").on("click", function () {
        $("#" + $(this).data("id")).toggleClass("active");
    });


    //Hard Select
    var checkCat = function (_parent, _catName) {
        var i = 0,
            _cat = _parent.find("li[data-name='" + _catName + "']");

        _cat.removeClass("chosen");
        while (_cat.find("ul li").length > i) {
            if (_cat.find("ul li").eq(i).hasClass("chosen") == true) {
                _cat.addClass("chosen");
                return false;
            }
            i++;
        }
    };
    $(".js-hardSelectBtn").on("click", function () {
        $(this).parents(".js-hardSelect").toggleClass("opened");
    });
    $(".js-hardSelect ul li ul li").on("click", function () {
        var _this = $(this),
            _catName = _this.parents("li").data("name");

        if (!_this.hasClass("chosen")) {
            _this.addClass("chosen");
            checkCat(_this.parents(".js-hardSelect"), _catName);

            _this.parents(".js-hardSelect").find(".js-hardSelectBody").append("<div class='ui-hardselect__body-item'><div class='ui-hardselect__body-item-text'>" + _this.text() + "</div><i class='ui-hardselect__body-item-icon fal fa-times' data-cat='" + _catName + "' data-item='" + _this.data("name") + "'></i></div>");
            _this.parents(".js-hardSelect").removeClass("opened");
        }
    });
    $(".js-hardSelectBody").on("click", "i", function () {
        var _this = $(this),
            _parent = _this.parents(".js-hardSelect");

        _parent.find("li[data-name='" + _this.data("item") + "']").removeClass("chosen");
        checkCat(_parent, _this.data("cat"));
        _this.parent().remove();
    });
    $(document).on("click", function (event) {
        if (!$(event.target).closest('.js-hardSelectS').length) {
            $(".js-hardSelect").removeClass("opened");
        }
    });
    //Hard Select
})