"use strict";

$.fn.formObject = function() {
    var form = {};
    return $.each($(this).serializeArray(), function(i, field) {
        form[field.name] = field.value || "";
    }), form;
};