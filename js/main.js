'use strict';

$(function () {
  $('#lang').selectmenu();
});
['left', 'center', 'right'].forEach(function (el) {
  var slider = $('.slider__item--'.concat(el));
  var sliderWrapper = slider.children('.slider__item-wrapper');
  sliderWrapper.clone().appendTo(sliderWrapper);
});
var menu = $('#menu');
$('#menu-open').on('click', function () {
  $(this).toggleClass('active');
  menu.toggleClass('active');
});

//# sourceMappingURL=main.js.map
