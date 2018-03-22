(() => {
    console.debug('App started');
    /**
     * I wasn't sure if I should hide the button, or make it visible all the time for someone with js disabled.
     * I decided to trust the user with disabled js and give them the full experience without js.
     * JS will just make it look preety.
     */
    $('.toTop').hide();
    // Makes the .toTop button appear depending on user's position
    $(window).on('scroll', function() {
            if ($(window).scrollTop() > ($('#books').offset().top) * 1.5) {
                $('.toTop').fadeIn(500);
            } else {
                $('.toTop').fadeOut(500);
            }
        })
        /**
         * Making .toTop animate.
         * I decided to go with a longer scroll time.
         * I didn't want user to feel lost.
         * + if the user has a slow machine, a quick scroll would look broken.
         */
    $('.toTop').on('click', function(event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: 0 }, 800);
    })

})()