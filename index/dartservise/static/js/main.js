"use strict";

$(document).ready(function () {
  $('.slick-vertical').slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 2,
    prevArrow: '<img src="static/images/top.png">',
    nextArrow: '<img src="static/images/bottom.png">'
  });
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });
  $(".team_avatar").on("click", ".team_block-img", function () {
    $(this).toggleClass("active");
  });
  var tab = $('.tab');
  tab.click(function () {
    console.log('клик по табу');
    var target = $(this).attr('data-target');
    console.log('эта вкладка ведет к содержимому' + target);
    $('.tab-content').hide();
    $('.' + target).show();
  });
}); // Полифилы
// forEach IE 11

if ('NodeList' in window && !NodeList.prototype.forEach) {
  console.info('polyfill for IE11');

  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;

    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
} // closest IE 11


(function () {
  if (!Element.prototype.closest) {
    Element.prototype.closest = function (css) {
      var node = this;

      while (node) {
        if (node.matches(css)) return node;else node = node.parentElement;
      }

      return null;
    };
  }
})(); // matches IE 11


(function () {
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
  }
})(); //Array.form IE 11


if (!Array.from) {
  Array.from = function (object) {
    'use strict';

    return [].slice.call(object);
  };
}