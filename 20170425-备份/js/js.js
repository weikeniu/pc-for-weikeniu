$(function(){
	//新增js部分(控制顶部)
	$(".top-bar").wrap("<div class='wrap__header'></div>");
	//页码
      function nextDis(){
          if($(".page-num-zujian").find(".type2").next().hasClass("next-btn")){
            return true;
          }else{
            return false;
          }
      }
      function prevDis(){
          if($(".page-num-zujian").find(".type2").prev().hasClass("prev-btn")){
            return true;
          }else{
            return false;
          }
      }      
      $(".next-btn").click(function(){
          $(".prev-btn").removeClass("type1").addClass("type3");
          if(!nextDis()){
           $(".page-num-zujian").find(".type2").addClass("type3").removeClass("type2").next().addClass("type2").removeClass("type3");
           if(nextDis()){
             $(".next-btn").removeClass("type3").addClass("type1");
           }
            }
      })  
      $(".prev-btn").click(function(){
          $(".next-btn").removeClass("type1").addClass("type3");
          if(!prevDis()){
            $(".page-num-zujian").find(".type2").addClass("type3").removeClass("type2").prev().addClass("type2").removeClass("type3");
            if(prevDis()){
               $(".prev-btn").removeClass("type3").addClass("type1");
            }            
          }
      })

      $(".page-num-zujian").on("click",".type3",function(){
        if(!($(this).hasClass("prev-btn")||$(this).hasClass("next-btn"))){
          // $(this).addClass("type2").removeClass("type3").siblings(".type2").removeClass("type2").addClass("type3");
            $(".page-num-zujian>li").removeClass("type2").addClass("type3");
            $(this).addClass("type2").removeClass("type3");
          if(nextDis()){
               $(".next-btn").removeClass("type3").addClass("type1");
            }else if(prevDis()){
               $(".prev-btn").removeClass("type3").addClass("type1");
            }                
        }
      })
      //页码end	
})
	

	
