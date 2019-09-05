jQuery(function () {
    $(".js-activeOnOff").on("click", function () {
        $("#" + $(this).data("id")).toggleClass("active");
    });


    //Hard Select
    var checkCat = function (_parent, _catName) {
        var i = 0,
            _cat = _parent.find("li[data-name='" + _catName + "']"),
            _val = "";

        if (_parent.find(".js-hardSelectBody div").length == 0) {
            _parent.find(".js-hardSelectBody").hide();
        } else {
            _parent.find(".js-hardSelectBody").show();
        }

        _parent.find("ul li").each(function () {
            var _this = $(this),
                j = 0;

            while (_this.find("ul li").length > j) {
                var __item = _this.find("ul li").eq(j);
                if (__item.hasClass("chosen") == true) {
                    _val += " " + __item.data("name");
                }
                j++;
            }
        });
        _parent.find(".js-hardSelectInput").val(_val);

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
            _catName = _this.parents("li").data("name"),
            _body = _this.parents(".js-hardSelect").find(".js-hardSelectBody"),
            _itemId = _this.data("name");

        if (!_this.hasClass("chosen")) {
            _this.addClass("chosen");

            _body.append("<div class='ui-hardselect__body-item'><div class='ui-hardselect__body-item-text'>" + _this.text() + "</div><i class='ui-hardselect__body-item-icon fal fa-times' data-cat='" + _catName + "' data-item='" + _itemId + "'></i></div>");
            _this.parents(".js-hardSelect").removeClass("opened");
            checkCat(_this.parents(".js-hardSelect"), _catName);
        }
    });
    $(".js-hardSelectBody").on("click", "i", function () {
        var _this = $(this),
            _parent = _this.parents(".js-hardSelect");

        _parent.find("li[data-name='" + _this.data("item") + "']").removeClass("chosen");
        _this.parent().remove();
        checkCat(_parent, _this.data("cat"));
    });
    $(document).on("click", function (event) {
        if (!$(event.target).closest('.js-hardSelectS').length) {
            $(".js-hardSelect").removeClass("opened");
        }
    });
    //Hard Select
})