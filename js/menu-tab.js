$(document).ready(function() {
  var menu = $('.main-menu > li');
  var tab = $('.notice-heading, .pds-heading');
  // var box = $('.box');

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

  // 클릭 애니메이션
  // box.click(function() {
  //   $(this).toggleClass('box-act');
  // });
});

// $(document).ready(function() {
//   var menu = $('.main-menu > li');
//   var subMenu = $('.sub-menu');
//   var last = $('.sub-menu li:last-child a');

//   menu.hover(function() {
//     $(this).find('.sub-menu').toggleClass('menu-act');
//   });
//   menu.focusin(function() {
//     $(this).find('.sub-menu').addClass('menu-act');
//   });
//   last.focusout(function() {
//     $(this).parents('.sub-menu').removeClass('menu-act');
//   });
// });