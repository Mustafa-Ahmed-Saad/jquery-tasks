$(function () {
   // calculate body padding top deppend on navbar height
   $('body').css('paddingTop', $('.navbar').innerHeight());

   // smoothly scroll to element
   $('.navbar li a:first').click(function (e) {
      e.preventDefault();
   });

   $('.navbar li a:not(:first)').click(function (e) {
      e.preventDefault();
      // console.log();
      $('html, body').animate(
         {
            scrollTop: $(`#${$(this).data('scrollto')}`).offset().top - $('.navbar').innerHeight() - 10,
         },
         1000
      );
      // $(this).data('scrollto')
      // or
      // $(this).attr('data-scrollto');
   });
   // add active class on nav bar link and remove from siblings
   $('.navbar li a').click(function () {
      // $(this).addClass('active').parent().siblings().find('a').removeClass('active');
      // or can use children to search in drop 1 level or use find to search in all level
      $(this).addClass('active').parent().siblings().children('a').removeClass('active');

      // another way
      // $('.navbar a').removeClass('active')
      // $(this).addClass('active')
   });
});
