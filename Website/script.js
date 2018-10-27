$(document).ready(function(){
    $("h2").click(function(){
        $("p").slideToggle();
	});
		
	$("p2").mouseenter(handlerIn).mouseleave(handlerOut){
		$(this).hide();
    });
	
});
