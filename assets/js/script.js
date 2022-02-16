(function ($) {

    'use strict';
    
    $(document).ready(() => {
        let menu = [$('.menu__list'), false];
        let burger = $('.menu__mobile');

        burger.on('click', () => {
            menuToggler(menu, burger);
        });

        $('.menu__link').on('click', (e) => {
    
            e.preventDefault();
            scrollToEl(e.target);

            if(screen.width <= 990){
                menuToggler(menu, burger);
            }
        });


        $('.to-contacts, .about-us__default-btn > *').on('click', (e) => {
            e.preventDefault();
            scrollToEl(e.target);
        })


        // Final Animations{

        let titles = [];

        $('h2').each((i, obj) => {
            titles.push({obj, 'top': $(obj).offset().top})
        });
        
        //}
        // Scroll Animations
        let benefitsItems = [];

        $('.benefits__item').each((i, obj) => {
            benefitsItems.push({obj, 'top': $(obj).offset().top})
        });
        let viewBenefits = true,
        viewAnimationLine = true,
        viewAboutUs = true,
        viewTitles = [];
        
        $(document).scroll(() => {
        // Final Animations{
            titles.forEach(element => {
                if($(window).scrollTop() >= (element.top - (window.innerHeight / 3 * 2.5))){
                    $(element.obj).css({'transform': 'translate(0)'});
                }
            });
        //}
            if($(window).scrollTop() >= (benefitsItems[0].top - (window.innerHeight / 3 * 2.5)) && viewBenefits){
                let iteration = 1;
                for(let item of benefitsItems){
                    setTimeout(() => {
                        $(item.obj).css({'opacity': 1});
                    }, iteration * 300);
                    iteration++;
                }
                viewBenefits = false;
            }

            if($(window).scrollTop() >= ($('.working__item:first-child').offset().top - (window.innerHeight / 3 * 2.5)) && viewAnimationLine){
                $('.animation-line').css({'width': '100%'});
                viewAnimationLine = false;
            }

            if($(window).scrollTop() >= ($('.about-us').offset().top - (window.innerHeight / 3 * 2)) && viewAboutUs){
                $('.about-us__right-line').css({'opacity': 1});
                setTimeout(() => {
                    $('.about-us__left-line').css({'opacity': 1});
                    setTimeout(() => {
                        $('.about-us__text p').css({'top': 0});
                        $('.about-us__text p').css({'opacity': 1});

                        setTimeout(() => {
                            $('.about-us .default-btn').css({'opacity': 1});
                        }, 1000);
                    }, 200);
                }, 500);
                viewAboutUs = false;
            }
        });

        $('.splide__arrow, .splide__pagination').on('click', () => {
            $('.slide__number').css({'opacity': 0});
            setTimeout(() => {
                let currentNumb = $('.splide__slide.is-active').attr('title');
                $('.slide__number').text(currentNumb);
                $('.slide__number').css({'opacity': 1});

            }, 500)
        });

        $('.service__title > span').hover(e => {
            $(e.target).parent().parent().children('div.service__image').css({'opacity': 1});
            $(e.target).parent().parent().children('div.service__image').css({'transform': 'scale(1)'});
        },e => {
            $(e.target).parent().parent().children('div.service__image').css({'opacity': 0});
            $(e.target).parent().parent().children('div.service__image').css({'transform': 'scale(.9, 1.2)'});
        });
        
        
        $('.arrow-link').on('mouseover',(e) => {
            
        });


        var star = document.querySelector(".star");        
        $(window).scroll(function() {
        var theta = $(window).scrollTop() / 5;
        $(star).css({ transform: 'rotate(' + theta + 'deg)' });
        });
        

        $('.popup__close, .popup__overlay').on('click', () => {
            $('.popup').fadeOut();
        });

        $('.service__btn').on('click', e => {

            e.preventDefault();
            
            let popupTitle = $('.popup__title');
            let current = $(e.target);
            let title = current.parent().children('.service__title').text();
            let attribute = $('.popup input[name="product"]');

            popupTitle.html(title);
            title = popupTitle.text().replace('/\s+/g', ' ').trim();
            attribute.val(title);
            
            $('.popup').fadeIn();
        })

        $('.kit .default-btn__text').on('click', e => {
            e.preventDefault();
            
            let popupTitle = $('.popup__title');
            let current = $(e.target);
            let title = current.parent().parent().children('.kit__title').text();
            let attribute = $('.popup input[name="product"]');

            popupTitle.html(title);
            title = popupTitle.text().replace('/\s+/g', ' ').trim();
            attribute.val(title);
            
            $('.popup').fadeIn();
        })

        $('.popup .form').submit(e => {
            e.preventDefault();

            $('.popup .thanks-text').fadeIn();
            setTimeout(() => {
                $('.popup .thanks-text').fadeOut();
            }, 3000);
        });

        $('.contacts__form').submit(e => {
            e.preventDefault();

            $('.contacts .thanks-text').fadeIn();
            setTimeout(() => {
                $('.contacts .thanks-text').fadeOut();
            }, 3000);
        })

        
        // Functions
        function scrollToEl(el){
            let scrollEl = $(el).attr('href');
    
            document.querySelector('.' + scrollEl)
            .scrollIntoView({behavior: "smooth"});

            return scrollEl;
        }
        
        function menuToggler(menu, burger){
            if(!menu[1]){
                menu[0].slideDown();
                menu[1] = true;
                $('.qodef-m-circles').css({'display' : 'none'});
                $(burger).children('span').css({'display': 'block'});
            }else{
                menu[0].slideUp();
                menu[1] = false;
                $('.qodef-m-circles').css({'display' : 'flex'});
                $(burger).children('span').css({'display': 'none'});
            }
        }
    });
})(jQuery);