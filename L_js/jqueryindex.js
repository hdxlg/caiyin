 
 
$(function(){
	//	所以商品分类
   $('#shopbox li').mouseover(function(){
   		$('#shopbox li').removeClass('lebak');
   		$(this).addClass('lebak');
   });  
   $('#spfl').mouseover(function(){
   		$('#shopbox').show();
   });
   $('#spfl').mouseout(function(){
   		$('#shopbox').hide();
   });
   
});

 
















