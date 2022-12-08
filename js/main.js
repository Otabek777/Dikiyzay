$(window).scroll(function(){
    if ( $(this).scrollTop() > 1) {
        $(".header").addClass("fixed");
    } else {
        $(".header").removeClass("fixed");
    }
});

$(".header .burgir").click(function() {
    if($(".header .burgir").hasClass("active")) {
        $(".header__navbar").removeClass("opacity");
        $(".header .burgir").removeClass("rotate");
        setTimeout(function() {
            $(".header__navbar").removeClass("open");
            $(".header .burgir").removeClass("active");
        },400);
    } else {
        $(".header__navbar").addClass("open");
        $(".header .burgir").addClass("active");
        setTimeout(function() {
            $(".header__navbar").addClass("opacity");
            $(".header .burgir").addClass("rotate");
        },400);
    };
});

if(document.querySelector(".question_answer__accordion .btn")) {
    $(".question_answer__accordion .btn").click(function() {
        $(this).toggleClass("active");
    });
};