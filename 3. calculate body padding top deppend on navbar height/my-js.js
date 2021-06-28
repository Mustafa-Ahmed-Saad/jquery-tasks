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
            scrollTop: $(`#${$(this).data('scrollto')}`).offset().top,
         },
         1000
      );
      // $(this).data('scrollto')
      // or
      // $(this).attr('data-scrollto');
   });
});
