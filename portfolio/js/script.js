//배너 이미지 넘기기
//html 마크업 셋팅 -> css연동 -> 제이쿼리 연동 -> 제이쿼리 호출
$(".ban").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true
});

//버튼을 클릭하면 전체 메뉴를 보이게 하낟.
$(".tit .btn").click(function(e){
    e.preventDefault();//a링크에 걸려있는 #을 깨준다.
    //$("#cont_nav").css("display","block");// --> #cont_nav {display: block;}
    //$("#cont_nav").show();
    //$("#cont_nav").fadeIn()
    //$("#cont_nav").slideDown();
    $("#cont_nav").slideToggle(300);
    $(this).toggleClass("on");
});