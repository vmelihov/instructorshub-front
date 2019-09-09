jQuery(function ($) {
    $(".js-profileType").on("click", function () {
        if (!$(this).hasClass("active")) {
            $(".js-profileType").toggleClass("active");
            $(".js-institution").toggleClass("d-none");
        }
    });
    $('.js-selectize').selectize({
        create: true,
        sortField: 'text'
    });

    var form = $(".js-form"),
        fieldsNum = form.data("validate"),
        okFieldsNum = 0,

        isEmail = function (email) {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(email);
        },
        checkForm = function (_boolean, _parent) {
            if (_boolean) {
                _parent.removeClass("error");

                if (!_parent.hasClass("checked")) {
                    _parent.addClass("checked");
                    okFieldsNum++;
                }
            } else {
                _parent.addClass("error");

                if (_parent.hasClass("checked")) {
                    _parent.removeClass("checked");
                    okFieldsNum--;
                }
            }

           //console.log(okFieldsNum + " " + fieldsNum);
            if (okFieldsNum == fieldsNum) {
                form.find(".js-submit").removeAttr("disabled");
            } else {
                form.find(".js-submit").attr("disabled", "disabled");
            }
        };

    $(".js-mailValidation").focusout(function () {
        var _this = $(this),
            _parent = _this.parents(".js-validateblock");

        checkForm(isEmail(_this.val()), _parent);
    });
    $(".js-textValidation").focusout(function () {
        var _this = $(this),
            _parent = _this.parents(".js-validateblock"),
            _a;

        if (_this.val() == "") {
            _a = false
        } else {
            _a = true;
        }
        checkForm(_a, _parent);
    });

    var checkPass = function (_this) {
        var _parent = _this.parents(".js-validateblock");

        //console.log($(".js-passValidation1").val() + " " + $(".js-passValidation2").val());
        if ($(".js-passValidation1").val() == $(".js-passValidation2").val()) {
            if (_this.val() == "") {
                checkForm(false, _parent);
            } else {
                checkForm(true, _parent);
                checkForm(true, $(".js-passValidation2").parents(".js-validateblock"));
            }
        } else {
            if (_this.val() == "") {
                checkForm(false, _parent);
            } else {
                checkForm(true, _parent);
                checkForm(false, $(".js-passValidation2").parents(".js-validateblock"));
            }
        }
    }
    $(".js-passValidation").change(function () {
        checkPass($(this));
    });

    $('.js-passInput').change(function () {
        var _this = $(this);
        _this.parents(".js-passParent").find(".js-notPassInput").focus().val(_this.val());
    });
    $('.js-notPassInput').change(function () {
        var _this = $(this)
        _pass = _this.parents(".js-passParent").find(".js-passInput");
        _pass.focus().val(_this.val());
        checkPass(_pass);
    });
    $(".js-passEye").on("click", function () {
        var _this = $(this);

        _this.parents(".js-passParent").find(".js-passLine").removeClass("d-none");
        _this.parents(".js-passLine").addClass("d-none");
    });
});