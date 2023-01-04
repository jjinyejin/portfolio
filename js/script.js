$(function(){
    /*scrolling*/
    function scrolling(){
        $(window).scroll(function(){
            var scrollTOP = parseInt($(window).scrollTop() + $(window).height()/1.5);

            $('.cntWrap').each(function(){
                if(scrollTOP >= $('.cntWrap02').offset().top){
                    $('.cntWrap02 .back-to-position').addClass('on');
                }else{
                    $('.cntWrap02 .back-to-position').removeClass('on');
                }
                if(scrollTOP >= $('.cntWrap03').offset().top){
                    $('.cntWrap03 .back-to-position').addClass('on');
                }else{
                    $('.cntWrap03 .back-to-position').removeClass('on');
                }
                if(scrollTOP >= $('.cntWrap04').offset().top){
                    $('.cntWrap04 .back-to-position').addClass('on');
                }else{
                    $('.cntWrap04 .back-to-position').removeClass('on');
                }
                if(scrollTOP >= $('.cntWrap05').offset().top){
                    $('.cntWrap05 .back-to-position').addClass('on');
                }else{
                    $('.cntWrap05 .back-to-position').removeClass('on');
                }
                if(scrollTOP >= $('.cntWrap06').offset().top){
                    $('.cntWrap06 .back-to-position').addClass('on');
                }else{
                    $('.cntWrap06 .back-to-position').removeClass('on');
                }
                if(scrollTOP >= $('.cntWrap07').offset().top){
                    $('.cntWrap07 .back-to-position').addClass('on');
                }else{
                    $('.cntWrap07 .back-to-position').removeClass('on');
                }
                if(scrollTOP >= $('.cntWrap08').offset().top){
                    $('.cntWrap08 .back-to-position').addClass('on');
                }else{
                    $('.cntWrap08 .back-to-position').removeClass('on');
                }
            });
        }); 

    }
    scrolling();

    /*menu*/
    var menuList01=$('.cntWrap01 .menu ul li:nth-child(1)');
    var menuList02=$('.cntWrap01 .menu ul li:nth-child(2)');
    var menuList03=$('.cntWrap01 .menu ul li:nth-child(3)');
    var menuList04=$('.cntWrap01 .menu ul li:nth-child(4)');
    var menuList05=$('.cntWrap01 .menu ul li:nth-child(5)');

    menuList01.click(function(){
        var cntTop = $('.cntWrap01').offset().top;

        $('html, body').animate({scrollTop : cntTop}, 600);
    });
    menuList02.click(function(){
        var cntTop = $('.cntWrap02').offset().top;

        $('html, body').animate({scrollTop : cntTop}, 600);
    });
    menuList03.click(function(){
        var cntTop = $('.cntWrap03').offset().top;

        $('html, body').animate({scrollTop : cntTop}, 600);
    });
    menuList04.click(function(){
        var cntTop = $('.cntWrap08').offset().top;

        $('html, body').animate({scrollTop : cntTop}, 600);
    });
    menuList05.click(function(){
        var cntTop = $('.cntWrap09').offset().top;

        $('html, body').animate({scrollTop : cntTop}, 600);
    });
    

    /*modal*/
    function Modal(){
        var modal=$('.cntWrap08 .cnt08 .modal');
        var modal01=$('.cntWrap08 .cnt08 ul.firstLine li');
        var modal02=$('.cntWrap08 .cnt08 ul.secondLine li');
        var modalBox01=$('.cntWrap08 .cnt08 .modal .modalBox div.first img');
        var modalBox02=$('.cntWrap08 .cnt08 .modal .modalBox div.second img');
        var close=$('.cntWrap08 .cnt08 .modal p.close, .cntWrap08 .cnt08 .modal');
        
        close.click(function(){
            modal.removeClass('show');
        });
        modal01.click(function(){
            var modalIdx01=$(this).index();

            modal.addClass('show');
            modalBox01.removeClass('show');
            modalBox02.removeClass('show');
            modalBox01.eq(modalIdx01).addClass('show');
        });

        modal02.click(function(){
            var modalIdx02=$(this).index();

            modal.addClass('show');
            modalBox01.removeClass('show');
            modalBox02.removeClass('show');
            modalBox02.eq(modalIdx02).addClass('show');
        });
    };
    






    /*디바이스별로 적용*/
    var wd = $('html').width();
    function wdr(){
        if(wd>=1026){
            Modal();
        }else if(420<=wd && wd<=1025){
            Modal();
        }else{
            
        }
    }

    wdr();
});