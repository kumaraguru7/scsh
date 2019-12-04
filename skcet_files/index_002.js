//current position
var pos = 0;
//number of slides
var totalSlides = $('#slider_wrap ul li').length;
//get the slide width
var sliderWidth = $('#slider_wrap').width();
//var sliderWidth = screen.width;

$(document).ready(function(){

	/*****************
	 BUILD THE SLIDER
	*****************/
	//set width to be 'x' times the number of slides
	$('#slider_wrap ul#slider_area').width(sliderWidth*totalSlides);
	
	//next slide 	
	$('#next').click(function(){
		slideRight();
	});
	
	//previous slide
	$('#previous').click(function(){
		slideLeft();
	});
	
	//automatic slider
	var autoSlider = setInterval(slideRight, 8000);
	
	countSlides();
	
	//pagination
	pagination();
	
	
	//for each slide 
	$.each($('#slider_wrap ul li'), function() { 
	   //set its color
	   var c = $(this).attr("data-color");
	   $(this).css("background",c);
	   
	   //create a pagination
	   var li = document.createElement('li');
	   $('#pagination_wrap ul').append(li);	   
	});
	
	//hide/show controls/btns when hover
	//pause automatic slide when hover
	$('#slider_wrap').hover(
	  function(){ $(this).addClass('active'); clearInterval(autoSlider); }, 
	  function(){ $(this).removeClass('active'); autoSlider = setInterval(slideRight, 8000); }
	);
	
});

/***********
 SLIDE LEFT
************/
function slideLeft(){
	pos--;
	if(pos==-1){ pos = totalSlides-1; }
	$('#slider_wrap ul#slider_area').css('left', -(sliderWidth*pos)); 	
	
	//*> optional
	countSlides();
	pagination();
}


/************
 SLIDE RIGHT
*************/
function slideRight(){
	pos++;
	if(pos==totalSlides){ pos = 0; }
	$('#slider_wrap ul#slider_area').css('left', -(sliderWidth*pos)); 
	
	//*> optional 
	countSlides();
	pagination();
}



	
/************************
 //*> OPTIONAL SETTINGS
************************/
function countSlides(){
	$('#counter').html(pos+1 + ' / ' + totalSlides);
}

function pagination(){
	$('#pagination_wrap ul li').removeClass('active');
	$('#pagination_wrap ul li:eq('+pos+')').addClass('active');
	
	$('#slider_wrap ul li h3').removeClass('anima');
	$('#slider_wrap ul li h2').removeClass('anima1');
	
	$('.a'+pos+' h3').addClass('anima');
	$('.a'+pos+' h2').addClass('anima1');
}



/************************
 //* menu SETTINGS
************************/


function updateMenuButton() {
	$('.js-menu-button').find('.menu_icon').toggleClass('is-active');
}
$switch = 0;
function myFunction() {
  document.getElementById("onn").style.display = "block";
}
function myFunction2() {
  document.getElementById("onn").style.display = "none";
}
$(document).ready(function() {

	$('.js-menu-button').click(function(e){

		e.preventDefault();
		updateMenuButton();
		if( $switch == 0)
		{
			myFunction();
			$switch =1;
			
		}
		else
		{
			myFunction2();
			$switch = 0;
		}
		

	});

});


