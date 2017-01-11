"use strict";
//image screen size based on window
$(document).ready(function() {
    $("#home-section").css("height", $(window).height());
});

//Type Write function
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

$('.refer-win-modal').click(function() {
    $('.modal')
        .prop('class', 'modal fade') // revert to default
        .addClass( $(this).data('direction') );
    $('.modal').modal('show');
});

//
//$(function () {
//    $('#datetimepicker5').datetimepicker({
//        defaultDate: "11/1/2013",
//        disabledDates: [
//            moment("12/25/2013"),
//            new Date(2013, 11 - 1, 21),
//            "11/22/2013 00:53"
//        ]
//    });
//});
var obj = {};
$(document).ready(function() {
$("#register-form").on('submit', function(e){

    // prevent default submit action
    e.preventDefault();

    var serialized = $(this).serializeArray();

    // build key-values
    $.each(serialized, function(){
        obj [this.name] = this.value;
    });

    // and the json string
    var json = JSON.stringify(obj);

    console.log(json);
    // send your data here...
    console.log(obj.name);

    $("div.demo-request").css("display", "none");
    $("div.submit-request").css("display", "inline-block");
    $('p.p-name').text('Name: ' + obj.name);
    $('p.p-email').text('Email: ' + obj.email);

});
});
