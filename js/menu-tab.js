$(document).ready(function() {
  var menu = $('.main-menu > li');
  var tab = $('.notice-heading, .pds-heading');
  var related = $('.related-list');
  var last = $('.related-list li:last-child  a');

  // 메인메뉴 
  menu.hover(function() {
    $(this).find('.sub-menu').toggleClass('menu-act');
  });
  menu.focusin(function() {
    $(this).siblings().find('.sub-menu').removeClass('menu-act');
    $(this).find('.sub-menu').addClass('menu-act');
  });

  // 탭메뉴
  tab.on('click focusin', function() {
    $(this).parent().addClass('board-act').siblings().removeClass('board-act');
  });

  // 관련 사이트
  related.focusin(function() {
    $(this).addClass('list-act');
  });
  last.focusout(function() {
    $(this).parents().removeClass('list-act');
  });
});