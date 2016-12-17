		
//	搜索	
	;(function(){
		var oT = document.getElementById('text');
		var oSpan = document.getElementById('taili');
		oT.onfocus = function(){
			oSpan.style.display = 'none';
		}
		oT.onblur = function(){
			if(oT.value == ''){
				oSpan.style.display = 'block';
			}
		}
		oSpan.onclick = function(){
			oT.focus();
		}
	})();
	
//	轮播图

     ;(function(){
     	var oBanbox=document.getElementById('ban_box');
     	var oImg_box = document.getElementById('img_box');
     	var aLi = oImg_box.getElementsByTagName('li');
     	var oBtnbox = document.getElementById('btnbox');
     	var aBtn = oBtnbox.getElementsByTagName('li');
     	var oBtn_lr= document.getElementById('btn_l_r');
     	var oA = oBtn_lr.getElementsByTagName('a');
     	var count = 0;
     	var timer = null;
     	
     	for(var i=0;i<aBtn.length;i++){
     		aBtn[i].index=i;
     		aBtn[i].onclick=function(){
     		    count = this.index;		
     			tab();
     		}
     	}
     	function tab(){
 			for(var j=0;j<aBtn.length;j++){
 				aBtn[j].className='';
 				aLi[j].style.opacity=0;
 				aLi[j].style.filter='alpha(opacity:0)';
 			}
 				aBtn[count].className='active';
 				 move(aLi[count],{
 				 	 opacity:1
 				 },{type:'linear',time:400});
 		}
     	   oA[1].onclick=next;
     	   function next(){
     	      count++;
     	      if(count==aBtn.length){
     	      	count=0;
     	      }
     	      tab();
     	   }
     	   oA[0].onclick=function(){
	     	   	count--;
	     	   	if(count==-1){
	     	   		count=aBtn.length-1;
	     	   	}
     	   		tab();
     	   }
     	   clearInterval(timer);
     	   timer = setInterval(next,2000);
     	   oBanbox.onmouseover=function(){
     	   		oBtn_lr.style.display='block';
     	   		clearInterval(timer);
     	   }
     	   oBanbox.onmouseout=function(){
     	   	oBtn_lr.style.display='none';
     	   	clearInterval(timer);
     	   	timer = setInterval(next,2000);
     	   }
     })();

 

//	右悬窗
   ;(function(){
   		var oBtn = document.getElementById('des_btn');
   		var oBox = document.getElementById('desbox');
   		var timer = null;
   		oBtn.onmouseover=show;
   		function show(){
   			move(oBox,{
   				'right':80
   			},{type:'linear',time:800});
   		}
   		function hide(){
 				move(oBox,{
   				'right':-140
   			},{type:'linear',time:800});
 		}	
   			clearTimeout(timer);
 			timer=setTimeout(hide,3000);
   		
   		oBox.onmouseover=function(){
   			clearTimeout(timer);
   		}
   		oBox.onmouseout=function(){
   			clearTimeout(timer);
   			timer=setTimeout(hide,3000);
   		}   
   })();
  
  
  










