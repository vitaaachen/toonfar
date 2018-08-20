$(document).ready(function(){

    /*---電腦下拉選單---*/

    var isdropshow=false;

    $(".menu-content>ul>li").mouseenter(
        function() {
            var arrow=$(this).find(".droplist-arrow");
            var droplist = $(this).attr("data-droplist");
            if(isdropshow){
                //刪除舊的
                $(".menu-content>ul>li").removeClass("menu-active");//菜單藍底
                $(".droplist-arrow").removeClass("vertical-flip");//菜單箭頭
                $(".dropdown-list").removeClass("dropdown-list-show");//下拉選單
                //顯示新的
                $(this).addClass("menu-active");
                $(arrow).addClass("vertical-flip");
                $("#"+droplist).addClass("dropdown-list-show");
            }else{
                $(this).addClass("menu-active");
                $(arrow).addClass("vertical-flip");
                $("#"+droplist).addClass("dropdown-list-show");
                isdropshow=true;
            }
        }
    );

    $(".dropdown-list").mouseleave(
        function() {
            var arrow=$(this).attr("id");
            console.log("arrow"+arrow);
            $("[data-droplist='"+arrow+"'] .droplist-arrow").removeClass("vertical-flip");
            $(".menu-content>ul>li").removeClass("menu-active");
            $(this).removeClass("dropdown-list-show");
            isdropshow=false;
        }
    );



    /*---手機下拉選單---*/
    $(".mb-list-content>li").click(function() {
        var clickitem=$(this).find(".mb-list-drop");//下拉選單內容
        var arrow=$(this).find(".droplist-arrow");//箭頭
        if($(arrow).hasClass("vertical-flip")){
            //console.log("A");
            $(arrow).removeClass("vertical-flip");
            $(clickitem).hide();
            $(this).removeClass("darlblue");
        }else{
           //console.log("B");
            $(this).addClass("darlblue");
            $(arrow).addClass("vertical-flip");
            $(clickitem).show();
        }
    });

    /*---手機菜單---*/
    $(".mb-menu").click(function() {
        $(".mb-menu-list-bg").fadeToggle();
        $(".mb-menu-list").fadeToggle();
    });

});