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

   // show popup
   $('.show-popup').click(function () {
      $('.popup').fadeIn();
   });
   // hide popup
   $('.popup, button.close').click(function (e) {
      e.preventDefault(); /* we prevent defolt of button because if it inside form we wnat it dont send form when we click on it */
      $('.popup').fadeOut();
   });
   // to fix problem of when click on popup or inner the popup fideout and we dont wnt to do that but we wnt to when click on popup the pop up fade out but when click on inner div.inside popup dont fadeout popup
   // so we will stop propagation when click on inner
   $('.popup .inner').click(function (e) {
      e.stopPropagation();
   });

   // when click escape key in keyboard fadeout popup if it has display block
   $(document).keydown(function (e) {
      console.log(e.code);
      if (e.code === 'Escape') {
         if (!($('.popup').css('display') === 'none')) {
            $('.popup').fadeOut();
         }
      }
   });

   // button with effect
   $('.from-left, .border-left').hover(
      function () {
         $(this).find('span').eq(0).animate(
            {
               width: '100%',
            },
            200
         );
      },
      function () {
         $(this).find('span').eq(0).animate(
            {
               width: 0,
            },
            200
         );
      }
   );

   $('.from-top, .border-top').hover(
      function () {
         $(this).find('span').eq(0).animate(
            {
               height: '100%',
            },
            200
         );
      },
      function () {
         $(this).find('span').eq(0).animate(
            {
               height: 0,
            },
            200
         );
      }
   );

   // animated progress
   // we use each because if we have more than 1 progress
   $('.animated-progress span').each(function () {
      $(this).animate(
         {
            width: $(this).attr('data-progress') + '%',
         },
         1000,
         function () {
            $(this).text($(this).attr('data-progress') + '%');
         }
      );
   });

   // fexed menu
   $('.fixed-menu i').click(function () {
      $(this).parent('.fixed-menu').toggleClass('is-visible');
      if ($(this).parent('.fixed-menu').hasClass('is-visible')) {
         $(this).parent('.fixed-menu').animate(
            {
               left: 0,
            },
            500
         );

         //if we want to body move right when menu is opened
         $('body').animate(
            {
               paddingLeft: $('.fixed-menu').innerWidth(),
            },
            500
         );
      } else {
         $(this)
            .parent('.fixed-menu')
            .animate(
               {
                  left: '-' + $('.fixed-menu').innerWidth(),
               },
               500
            );

         //if we want to body move right when menu is opened
         $('body').animate(
            {
               paddingLeft: 0,
            },
            500
         );
      }
   });

   //change color
   $('.change-colors li').click(function () {
      $('body').attr('data-default-color', $(this).data('color'));
   });

   // this way (handel any number of thumbnails with % or px) handel any munber of img and if you add or remove any img There will be no problem
   // handel any number of thumbnails with %
   let numberOfThumbnails = $('.thumbnails').children().length,
      // you can use
      // $('.thumbnails img').length
      // let numberOfThumbnails = document.querySelectorAll('.thumbnails img').length;
      MarginRightThumbnailsImg = 0.5;
   // you can use this if the margin right in css
   // MarginRightThumbnailsImg = (parseFloat($('.thumbnails img:first').css('marginRight')) / parseFloat($('.thumbnails').css('width'))) * 100,
   (AllMarginBetweenThumbnails = MarginRightThumbnailsImg * (numberOfThumbnails - 1)), (thumbnailsWidth = 100 - AllMarginBetweenThumbnails), (imgThumbnailsWidth = thumbnailsWidth / numberOfThumbnails);
   $('.thumbnails img').css({
      width: imgThumbnailsWidth + '%',
      'margin-right': MarginRightThumbnailsImg + '%',
   });
   $('.thumbnails img:last').css({
      'margin-right': 0,
   });

   // this way (handel any number of thumbnails with % or px) handel any munber of img and if you add or remove any img There will be no problem
   // handel any number of thumbnails with px
   // let numberOfThumbnails = $('.thumbnails').children().length,
   //    // you can use
   //    // $('.thumbnails img').length
   //    // let numberOfThumbnails = document.querySelectorAll('.thumbnails img').length;
   //    AllMarginBetweenThumbnails = parseFloat($('.thumbnails img:first').css('marginRight')) * (numberOfThumbnails - 1),
   //    thumbnailsWidth = parseFloat($('.thumbnails').css('width')) - AllMarginBetweenThumbnails,
   //    imgThumbnailsWidth = thumbnailsWidth / numberOfThumbnails;
   // $('.thumbnails img').css({
   //    width: imgThumbnailsWidth,
   // });

   // thumbnails gallery
   $('.thumbnails img').on('click', function () {
      $(this).addClass('selected').siblings().removeClass('selected');
      $('.master-img img').hide().attr('src', $(this).attr('src')).fadeIn(500);
   });

   // click on fa-chevron-right
   $('.master-img .fa-chevron-right').on('click', function () {
      if ($('.thumbnails .selected').is(':last-child')) {
         $('.thumbnails img').eq(0).click();
         // or you can use
         // $('.thumbnails img:first').click();
      } else {
         $('.thumbnails .selected').next().click();
      }
   });

   // click on fa-chevron-left
   $('.master-img .fa-chevron-left').on('click', function () {
      if ($('.thumbnails .selected').is(':first-child')) {
         $('.thumbnails img').eq(-1).click();
         // or you can use
         // $('.thumbnails img:last').click();
      } else {
         $('.thumbnails .selected').prev().click();
      }
   });

   // toggle product description
   $('.products .product i, .items .item i').on('click', function () {
      $(this).next('p').slideToggle(400).end().toggleClass('fa-plus fa-minus');
      // or
      // $(this).toggleClass('fa-plus fa-minus').next('p').slideToggle(400);
   });

   // switch list and grid view
   $('.view-options i').on('click', function () {
      $(this).addClass('active').siblings().removeClass('active');
      $('.items').removeClass('list-view grid-view').addClass($(this).data('class'));
   });

   // error message effect
   $('.btn-error').on('click', function () {
      $('.btn-error').css('pointer-events', 'none');

      $('.error-message').each(function () {
         console.log('csec');
         $(this).animate(
            {
               right: 0,
            },
            1000,
            function () {
               $(this)
                  .delay(3000)
                  .fadeOut(1000, function () {
                     $(this)
                        .animate({
                           right: -600,
                        })
                        .fadeIn(0, function () {
                           $('.btn-error').css('pointer-events', 'unset');
                        });
                  });
            }
         );
      });

      // or you can use this to disable click
      // document.querySelector('.btn-error').disabled = true;
   });

   // hide placeholder on focus & restore on blur
   let placeattr;
   $('[placeholder]').on({
      // or you can use
      // $('input:not([type="submit"]), textarea')
      focus: function () {
         placeattr = $(this).attr('placeholder');
         $(this).attr('placeholder', '');
      },
      blur: function () {
         $(this).attr('placeholder', placeattr);
      },
   });

   // show message when field is empty
   $('[required]').blur(function () {
      if ($(this).val() == '') {
         $(this).next('span').fadeIn(500).delay(3000).fadeOut(500);
      }
   });

   // add asterisk to all required fields
   // this selector :input return all input and button and textarea that have the attripute required
   $('<span class="asterisk">*</span>').insertBefore(':input[required]');
   $('.asterisk').parent('div').css('position', 'relative');
   $('.asterisk').each(function () {
      $(this).css({
         position: 'absolute',
         top: $(this).parent('div').find(':input').innerHeight() / 2.5,
         left: $(this).parent('div').find(':input').innerWidth() - 15,
         color: '#f00',
      });
   });

   // customize the input Field
   $('.our-form input[type="file"]').wrap('<div class="custom-file"></div>');
   $('.custom-file').prepend('<span>Upload your file</span>');
   $('.custom-file').append('<i class="fa fa-upload fa-lg skin-color"></i>');

   // when upload file make its name show instead of string upload your file
   $('.our-form input[type="file"]').change(function () {
      // here i want this happend when input happend to it change
      $(this).prev('span').text($(this).val().slice(12));
   });

   // detect unicode of keys
   $('.detect-unicode').on('keyup', function (e) {
      // we use or || because if e.keyCode dont work th e.which work
      let keyboard = e.keyCode || e.which;
      // make text = unicode
      $('.unicode').text(`the unicode for the key you pressed is: ${keyboard}`);
   });

   // change input direction depend on the language
   // how yo know this litter or this caracter is english or arabic
   $('.auto-direction').on('keyup', function () {
      // if this cahrCode or unicode of caracter is less than 200  then this caracter is english
      if ($(this).val().charCodeAt(0) < 200 || $(this).val() === '') {
         $(this).css('direction', 'ltr');
      } else {
         $(this).css('direction', 'rtl');
      }
   });

   // show all unicode of litter (capital and smolle) of english
   let english = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
      textEnglish = '';

   for (let i = 0; i < english.length; i = i + 1) {
      textEnglish += english[i] + ': ' + english.charCodeAt(i) + '<br>';
   }
   $('.english').html(textEnglish);

   // show all unicode of litter of arabic
   let arabic = 'ابتثجحخدذرزسشصضطظعغفقكلمنهوي',
      textArabic = '';

   for (let i = 0; i < arabic.length; i = i + 1) {
      textArabic += arabic[i] + ': ' + arabic.charCodeAt(i) + '<br>';
   }
   $('.arabic').html(textArabic);
});
