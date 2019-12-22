"use strict";

$(document).ready(function () {
  svg4everybody({});
});
$(document).ready(function () {
  var tab = $('.tab');
  tab.click(function () {
    console.log('клик по табу');
    var target = $(this).attr('data-target');
    console.log('эта вкладка ведет к содержимому' + target);
    $('.tab-content').hide();
    $('.' + target).show();
  });
  var work = $('.work');
  work.click(function () {
    console.log('клик по табу');
    var target = $(this).attr('data-target');
    console.log('эта вкладка ведет к содержимому' + target);
    $('.work-content').hide();
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