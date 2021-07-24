$(document).ready(function(){

	//STICKY NAVBAR ACTIVE
$('.sticky-menu').waypoint(function(direction){
	if(direction == "down"){
			$('nav').addClass("sticky");
	} else{
			$('nav').removeClass("sticky");
	}
});

	//MIX IT UP ACTIVE
	var mixer = mixitup('.container');

	//ACTIVE LINK
	$('nav ul li a').click(function(){
		$('nav ul li a').removeClass("active");
		$(this).addClass("active");
	});
	$('nav .logo').click(function(){
		$('nav ul li a').removeClass("active");
		$('nav ul li:first-child a').addClass("active");
	});
})


function openNav(){
	document.getElementById("myNav").style.width="70%";
}

function closeNav(){
	document.getElementById("myNav").style.width="0%";
}