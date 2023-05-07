$(function(){ //문서다읽고 실행

    AOS.init();

    //여기에 작성
    let lastScroll = 0;
    let numFlag = 0;

    $(window).scroll(function(){
        curr=$(this).scrollTop();//현재스크롤위치;

        dashOffset = $('.sc-dashborad').offset().top;

        if (curr >= 80) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
        if (curr > lastScroll) {
            $('.header').removeClass('show');
        } else {
            $('.header').addClass('show');
        }

        lastScroll = curr;

        if (curr >= dashOffset - (window.innerHeight/2)){
            if(numFlag === 0){
                numFlag = 1;
                $('.val').CRnumber({
                    delay : 600,
                    speed : 1200,
                    startNum : '0'
                });
            }
        } 
    });

    

    var swiper = new Swiper(".main-slide", {
        // touchRatio:0, 마우스컨트롤
        effect:'fade',
        pagination:{
            el:'.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 8000,
            disableOnInteraction: false,
        }

    });


    var swiper = new Swiper(".poly-slide", {
        // touchRatio:0, 마우스컨트롤
        loop:true,
        effect:'fade',
        navigation:{
            nextEl:".next",
            prevEl:".prev"
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        }
    });


    $('.gnb-list').hover(function(){
        $(this).find('.gnb-item .sub').addClass('on');
        $('.header').addClass('open');  
    },function(){
        $('.gnb-item .sub').removeClass('on');
        $('.header').removeClass('open');  
    });
   

    $('.utill .lang').on('click',function(){
        $(this).toggleClass('on');
    });	


    $('.news-wrap .news-list>li').on('mouseenter',function(){
        let idx = $(this).index() + 1;	 
        let imgUrl = './assets/img/news_imgcrop_'+idx+'.png'		
        $('.news-wrap .news-img img').attr("src",imgUrl);	
    });


   



})//지우지마세요