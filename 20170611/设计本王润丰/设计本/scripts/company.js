

index_rank_img.onmouseover = function () {
    var vLeftTwo = $('.index_rank_img_2').position().left,
        vLeftThree = $('.index_rank_img_3').position().left,
        vLeftFour = $('.index_rank_img_4').position().left;
    if ($(this).hasClass('index_rank_img_1') && vLeftTwo != '' + picPos[0] + '') {
        $('.index_rank_img_2').stop().animate({
            left: picPos[0]
        }, 500);
        $('.index_rank_img_3').stop().animate({
            left: picPos[1]
        }, 500);
        $('.index_rank_img_4').stop().animate({
            left: picPos[2]
        }, 500);
    } else if ($(this).hasClass('index_rank_img_2') && vLeftTwo == '' + picPos[0] + '') {
        $('.index_rank_img_2').stop().animate({
            left: picPos[3]
        }, 500);
    } else if ($(this).hasClass('index_rank_img_2') && vLeftTwo == '' + picPos[3] + '' && vLeftThree == '' + picPos[4] + '') {
        $('.index_rank_img_3').stop().animate({
            left: picPos[1]
        }, 500);
        $('.index_rank_img_4').stop().animate({
            left: picPos[2]
        }, 500);
    } else if ($(this).hasClass('index_rank_img_2') && vLeftTwo == '' + picPos[3] + '' && vLeftThree == '' + picPos[4] + '' && vLeftFour == '' + picPos[5] + '') {
        $('.index_rank_img_3').stop().animate({
            left: picPos[1]
        }, 500);
        $('.index_rank_img_4').stop().animate({
            left: picPos[2]
        }, 500);
    } else if ($(this).hasClass('index_rank_img_3') && vLeftThree == '' + picPos[1] + '') {
        $('.index_rank_img_3').stop().animate({
            left: picPos[4]
        }, 500);
        $('.index_rank_img_2').stop().animate({
            left: picPos[3]
        }, 500);
    } else if ($(this).hasClass('index_rank_img_3') && vLeftTwo == '' + picPos[3] + '' && vLeftThree == '' + picPos[4] + '' && vLeftFour == '' + picPos[5] + '') {
        $('.index_rank_img_4').stop().animate({
            left: picPos[2]
        }, 500);
    } else if ($(this).hasClass('index_rank_img_4') && (vLeftThree >= '' + picPos[1] + '' || vLeftThree >= '' + picPos[3] + '')) {
        $('.index_rank_img_2').stop().animate({
            left: picPos[3]
        }, 500);
        $('.index_rank_img_3').stop().animate({
            left: picPos[4]
        }, 500);
        $('.index_rank_img_4').stop().animate({
            left: picPos[5]
        }, 500);
    }
    ;
}