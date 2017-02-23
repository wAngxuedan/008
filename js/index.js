$(document).ready(function() {
	$(".circle:nth-child(1)").css("background-color","#FF595F");
	$(".circle" ).click(function(){
		$(this).css("background-color","#FF595F");
	})
	$(".circle,#content2-div .content-right").hover(function(){
		$(this).css("cursor","pointer");
	})
  // 这部分实现最上面导航条的控制
  $("#title1,#content2 .button2,#content4-part1 a").click(function(){
    $("#title2 .circle ,#title2 .line").css("background-color","#BDBDBD");	
    $("#title3 .circle ,#title3 .line").css("background-color","#BDBDBD");
    $("#title4 .circle ,#title4 .line").css("background-color","#BDBDBD");	
    $("#content1").css("display","block");
    $("#content2").css("display","none");
    $("#content3").css("display","none");
    $("#content4").css("display","none");
  })
  $("#title2 ,#content1 button,#content3 .button2,#content4-part2 a").click(function(){
    $("#title2 .circle ,#title2 .line").css("background-color","#FF595F");
    $("#title3 .circle ,#title3 .line").css("background-color","#BDBDBD");
    $("#title4 .circle ,#title4 .line").css("background-color","#BDBDBD");	
    $("#content2").css("display","block");
    $("#content1").css("display","none");
    $("#content3").css("display","none");
    $("#content4").css("display","none");
  })
  $("#title3,#content2 .button1,#content4.button2,#content4-part3 a").click(function(){
    $("#title2 .circle ,#title2 .line").css("background-color","#FF595F");		
    $("#title3 .circle ,#title3 .line").css("background-color","#FF595F");
    $("#title4 .circle ,#title4 .line").css("background-color","#BDBDBD");		
    $("#content3").css("display","block");
    $("#content1").css("display","none");
    $("#content2").css("display","none");
    $("#content4").css("display","none");
  })
  $("#title4, #content3 .button1 ").click(function(){
    $("#title2 .circle ,#title2 .line").css("background-color","#FF595F");		
    $("#title3 .circle ,#title3 .line").css("background-color","#FF595F");		
    $("#title4 .circle ,#title4 .line").css("background-color","#FF595F");	 	
    $("#content4").css("display","block");
    $("#content2").css("display","none");
    $("#content3").css("display","none");
    $("#content1").css("display","none");
  })
  // 这部分实现页面二添加团员的功能
  $("#content2-div .content-right").click(function(){
    $("#content2-div select,#content2-div button") .css("display","block");
    $(this).css("left","35%");
    $("#content2-div select").css("margin-bottom","10px");
    $("#member").css("display","none");

  })

  $("#content2-div select").click(function(){ 
   var x=$("#content2-div select option");
   var y=23*x.length+"px";
   $("#content2-div select").css("margin-bottom",y);
 })

  $("#content2-div button").click(function(){ 
   $("#content2-div select,#content2-div button").css("display","none");
   var z=$("#content2-div select option:selected").text();
   $("#member p").append(z+"　");
   $("#member").css("display","block");
 })

  $("content2-div select option").click(function(){
    $("#content2-div select").css("margin-bottom","10px");
  })


})