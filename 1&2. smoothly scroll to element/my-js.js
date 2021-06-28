$(function () {
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
