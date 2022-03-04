jQuery(function ($) {
  "use strict";

  /* ========================================================================= */
  /*	Magnific popup
  /* =========================================================================  */
  $('.image-popup').magnificPopup({
    type: 'image',
    removalDelay: 160, // Delay removal by X to allow out-animation.
    closeOnContentClick: false,
    image: {
      titleSrc: 'title',
      markup: '<div class="mfp-figure">' +
        '<div class="mfp-close"></div>' +
        '<div class="mfp-top-bar"></div>' +
        '<div class="mfp-img"></div>' +
        '<div class="mfp-bottom-bar">' +
        '<div class="mfp-title"></div>' +
        '<div class="mfp-counter"></div>' +
        '</div>' +
        '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button
    },
    callbacks: {
      beforeOpen: function () {
        // Just a hack that adds mfp-anim class to markup.
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
        this.st.mainClass = this.st.el.attr('data-effect');
      }
    },
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: false,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function (element) {
        return element.find('img');
      }
    }
  });

});