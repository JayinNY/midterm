$(function(){
var array = []

var index=0;

$("textarea").val("") 



var date = new Date();
var today = date.getFullYear() + "/" + (date.getMonth()+1) + "/" + date.getDate(); 
 var currentTime = date.getHours() + ':' + date.getMinutes();

$("button").click(function(){
	var text = $("textarea").val()
	if(text.length>0){  
		text+="<br><br>On "+today+" at "+currentTime; 
        
		array.push(text) 

		$(".post").html(array[array.length-1])

		$("textarea").val(""); 
	}
	
})


$(".left").click(function(){
	
	var  post = array.length;

	if (post>0) { 
        
		index-=1;
		if(index<0){
			index=post-1;
		}
		$(".post").html(array[index])
		
	}
	
})




$(".right").click(function(){
	// get the array length and see if there is anything inside
	var  post = array.length;

	if (post>0) { // it  means there was post
		index+=1;
		if(index>=post){
			index=0;
		}
		$(".post").html(array[index])
		
	}
	
})


 $("textarea").focus(function(){  

 	$(this).val("") 
 })



    
})