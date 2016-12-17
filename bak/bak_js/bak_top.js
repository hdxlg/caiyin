		
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
	


     










