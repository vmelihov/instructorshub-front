jQuery(function ($) {

    $('[data-toggle="tooltip"]').tooltip();

    $('.js-selectize').selectize({
        create: true,
        sortField: 'text'
    });
});