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


$(function(){
//add
	$('#topp').adcd('#topp','#text1');
	$('#down').adcd2('#down','#text1');
//border
	$('#jingd select').bd('#jingd select','cred');		 
	$('#jingd input').bd('#jingd input','cred');

//显示隐藏
	$('#bak').shide('#bak','bakred','#input_box');
	$('#show').shide('#show','bakred','#showbox');
	$('#updown').shide3('#updown','qcolor','#updown b','upp');
	$('#updown_d').shide3('#updown_d','qcolor','#updown_d b','dowpp');
	
//显示隐藏2	
	$('#zxtop div').shide2('#zxtop div','bakred');
	
	
	
});		
	

		
 











