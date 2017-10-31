"use strict";

!function() {
    function t() {
        e() ? i() : n($(c).find(".input:invalid").first().parent());
    }
    function e() {
        return document.querySelector(c).checkValidity();
    }
    function n(t) {
        $(".step.active").removeClass("active"), t.addClass("active"), t.find(".input").focus();
        var e = t.index(".step") + 1;
        a($(".path-step:nth-child(" + e + ")"));
    }
    function a(t) {
        $(".path-step.active").removeClass("active"), t.addClass("active");
    }
    function i() {
        var t = $(c);
        $.ajax({
            url: t.attr("action"),
            method: "POST",
            data: t.formObject(),
            dataType: "json",
            success: function() {
                t.slideUp(), $("#info-contacto").html("Correo enviado");
            }
        });
    }
    var c = "#contact-form";
    $(".step textarea").on("keydown", function(t) {
        console.log(t.keyCode), 13 == t.keyCode && (t.preventDefault(), $(t.target).blur());
    }), $(".path-step").on("click", function(t) {
        var e = $(t.target);
        a(e);
        var i = e.index(".path-step") + 1;
        n($(".step:nth-child(" + i + ")"));
    }), $(c).find(".input").on("change", function(a) {
        var i = $(a.target).parent().next(".step");
        !e() && i.length > 0 ? n(i) : t();
    });
}();