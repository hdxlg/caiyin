
//add
$.fn.extend({
	adcd:function(id,obj){
		
		$(id).click(function(){
			var count =$(obj).val();
			count++;
			$(obj).val(count);
		})
	}
});
//splice
$.fn.extend({
	adcd2:function(id,obj){
		$(id).click(function(){
			var count = $(obj).val();
			count--;
			if(count<1){
				count=1;
			}
			$(obj).val(count);
		})
	}
});

//border

$.fn.extend({
	bd:function(id,sClass){
		$(id).click(function(){
			$(this).addClass(sClass);
		});
	}	
});
//显示隐藏1
$.fn.extend({
	shide:function(id,sClass,obj){
		$(id).toggle(function(){
			$(id).removeClass(sClass);
			$(this).addClass(sClass);
			$(obj).show();
		},function(){
			$(id).removeClass(sClass);
			$(obj).hide();
		})
	}
});
//显示隐藏2
$.fn.extend({
	shide2:function(id,sClass){
		$(id).toggle(function(){

			$(this).addClass(sClass);
		},function(){
			$(id).removeClass(sClass);
		})
	}
});
//显示隐藏3
$.fn.extend({
	shide3:function(id,sClass,obj,sClass2){
		$(id).toggle(function(){
			$(id).removeClass(sClass);
			$(id).removeClass(sClass2);
			$(this).addClass(sClass);
			$(this).addClass(sClass2);
			$(obj).show();
		},function(){
			$(id).removeClass(sClass);
			$(id).removeClass(sClass2);
			$(obj).hide();
		})
	}
}); 
 


$(function(){
//add
	$('#up').adcd('#up','#text1');
	
//splice
	$('#down').adcd2('#down','#text1');
	


//	 border	 
	$('#asset1 select').bd('#asset1 select','red');
	$('#henum1 input').bd('#henum1 input','red');
	$('#zzcc select').bd('#zzcc select','red');
	$('#chicn input').bd('#chicn input','red');
	$('#gy2 select').bd('#gy2 select','red');
	$('#gongy select').bd('#gongy select','red');
	$('#gongy input').bd('#gongy input','red');
	

   
//尺寸显示隐藏

  $('.ch_box').shide('.ch_box','redd','.chicn');
  $('#hq').shide('#hq','redd','#gongy');
  $('#color').shide('#color','color','#c_text');
  $('#color2').shide('#color2','color','#c_text2');
  $('#upbox').shide3('#upbox','red','#upbox b','upp');
  $('#downbox').shide3('#downbox','red','#downbox b','dowpp');
  
//尺寸显示隐藏2
  $('#div1').shide2('#div1','redd');
  $('#div2').shide2('#div2','redd');
 
	 
});			
 
 
