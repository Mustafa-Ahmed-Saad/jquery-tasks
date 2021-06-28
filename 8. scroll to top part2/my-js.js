$(function () {
   // calculate body padding top deppend on navbar height
   $('body').css('paddingTop', $('.navbar').innerHeight());

   //// smoothly scroll to element brevent defolt only when click on a of home
   //// $('.navbar li a:first').click(function (e) {
   ////    e.preventDefault();
   //// });

   // smoothly scroll to element when click on a
   //// $('.navbar li a:not(:first)').click(function (e) {
   $('.navbar li a').click(function (e) {
      e.preventDefault();
      $('html, body').animate(
         {
            scrollTop: $(`#${$(this).data('scrollto')}`).offset().top - $('.navbar').innerHeight(),
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

   // sync navbar links with sections
   $(window).scroll(function () {
      // loop div.block and check if this div.block offset top < window scroll top or not
      $('.block').each(function () {
         // -100 because when click a in nav bar the active class add to the this link not the previous link
         if ($(window).scrollTop() >= $(this).offset().top - 100) {
            // get id of this div.block
            let blockId = $(this).attr('id');

            //remove class active from all a
            $('.navbar a').removeClass('active');

            // add class active for last a
            let aAttr = $(`.navbar li a[data-scrollto=${blockId}]`);
            if (!aAttr.hasClass('active')) {
               aAttr.addClass('active');
            }
         }
      });

      // scroll to top button
      // this way to best perfonmnce
      // الطريقة دي افضل طريقة لان الكود بتاع الفيد ان او الفيد اوت مش بيتكرر طول ما السكرول اكبر بيدخل و يعمل الفيد اوت لو الديسبلاس نان و لو الديسبلاي حاجة مش نان بيدخل علي الالس و يعمل فيداوت لو العنصر مش مواخد ديسبلاي بلوك فباالتالي كود الفيد ان او الفيد اوت بيتعمل مرة واحدة مش كل ا السكرول اكبر من الف تفضل تعملي فيد ان بس الكلام دا كلو م هيحصل غير لو انت عملت فيدان و فيد اوت في وقت صفر يعني لو خليك الوقت ثانية هيفضل يكرر في الكود لمدة ثانية طول ما انت بتعمل سكرول
      // we use 2 check pecause in the fade out opacity contradicts first and after that display block so we say when opacity = 1 and its display dont != none we can fade out this element
      let buttonScrollTop = $('.scroll-to-top');
      if ($(window).scrollTop() > 1000) {
         if (buttonScrollTop.is(':hidden')) {
            buttonScrollTop.fadeIn(500);
            console.log('fadeIn');
         }
      } else {
         // if ((buttonScrollTop.css('opacity') === '1') & !(buttonScrollTop.css('display') === 'none')) {
         if (!buttonScrollTop.is(':hidden') & (buttonScrollTop.css('opacity') === '1')) {
            buttonScrollTop.fadeOut(500);
            console.log('fadeOut');
         }
         // }
      }
      // or another way
      // if ($(window).scrollTop() > 1000) {
      //    if (buttonScrollTop.css('display') === 'none') {
      //       buttonScrollTop.fadeIn(500);
      //       console.log('fadeIn');
      //    }
      // }
      // if ($(window).scrollTop() <= 1000) {
      //    if ((buttonScrollTop.css('opacity') === '1') & !(buttonScrollTop.css('display') === 'none')) {
      //       buttonScrollTop.fadeOut(500);
      //       console.log('fadeOut');
      //    }
      // }
   });

   // click on botton scrollTop
   $('.scroll-to-top').click(function (e) {
      e.preventDefault();
      console.log('ew');
      $('html, body').animate(
         {
            scrollTop: 0,
         },
         1000
      );
   });
});
