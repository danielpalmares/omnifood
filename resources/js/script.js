$(document).ready(function () {

  /* ---- Sticky navigation ---- */
  $('.js--section-features').waypoint(
    function (direction) {
      if (direction == 'down') {
        $('nav').addClass('sticky');
      } else {
        $('nav').removeClass('sticky');
      }
    },
    { offset: '60px' }
  );

  /* ---- Scroll on hero buttons ---- */
  $('.js--scroll-to-plans').click(function () {
    $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000);
  });

  $('.js--scroll-to-start').click(function () {
    $('html, body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000);
  });

  /* ---- Smooth scroll on nav links ---- */
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({ scrollTop: target.offset().top }, 1000, function () {
            var $target = $(target);
            $target.focus();
            if (!$target.is(':focus')) {
              $target.attr('tabindex', '-1');
              $target.focus();
            }
          });
        }
      }
    });

  /* ---- Mobile nav toggle ---- */
  $('.js--nav-icon').click(function () {
    $('.js--main-nav').slideToggle(200);
  });

  /* ---- WhatsApp form ---- */
  $('#btn-whatsapp').click(function () {
    var name    = $('#name').val().trim();
    var phone   = $('#phone').val().trim();
    var goal    = $('#goal').val();
    var message = $('#message').val().trim();

    if (!name) {
      alert('Por favor, informe seu nome.');
      return;
    }

    var text = 'Olá, Physical Space! 👋\n\n';
    text += '📋 *Nome:* ' + name + '\n';
    if (phone) text += '📱 *Telefone:* ' + phone + '\n';
    text += '🎯 *Objetivo:* ' + goal + '\n';
    if (message) text += '\n💬 *Mensagem:* ' + message;
    text += '\n\nVim pelo site e gostaria de mais informações!';

    var url = 'https://wa.me/5524981216872?text=' + encodeURIComponent(text);
    window.open(url, '_blank');
  });

});
