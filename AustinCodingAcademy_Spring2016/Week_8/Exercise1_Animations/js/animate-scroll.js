$(document).ready(function () {

    $(window).scroll(function () {

        var verticalScroll = $(this).scrollTop();

        if (verticalScroll >= 100) {

            $('.horse').addClass('animated wobble');
        }


    });

    $(window).scroll(function () {

        var verticalScroll = $(this).scrollTop();

        if (verticalScroll >= 300) {

            $('#myjello').addClass('animated jello');
        }
        console.log(verticalScroll);

    });


});