jQuery(function ($) {
    $('.js-passInput').change(function () {
        var _this = $(this);
        _this.parents(".js-passParent").find(".js-notPassInput").focus().val(_this.val());
    });
    $('.js-notPassInput').change(function () {
        var _this = $(this);
        _this.parents(".js-passParent").find(".js-passInput").focus().val(_this.val());
    });
    $(".js-passEye").on("click", function () {
        var _this = $(this);

        _this.parents(".js-passParent").find(".js-passLine").removeClass("d-none");
        _this.parents(".js-passLine").addClass("d-none");
    });
});