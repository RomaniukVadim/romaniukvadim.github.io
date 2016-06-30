var tll = new TimelineLite();
var $animText = $("#anim_text");

$animText.html( $animText.html().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;"));
//TweenMax.staggerFromTo( $animText.find("span"), 0.1, {autoAlpha:0}, {autoAlpha:1}, 0.1 );
$animText.find("span").each(function(){
						TweenMax.fromTo(this, 1.5, {autoAlpha:0, rotation:randomNum(-360, 360), rotationX:randomNum(-360, 360), rotationY:randomNum(-360, 360), rotationZ:randomNum(-360, 360), scale:0}, {autoAlpha:1, rotation:0, rotationX:0, rotationY:0, rotationZ:0, scale:1});					
					});		
				//helper function
		function randomNum (min, max) {
		    return Math.random() * (max - min) + min;
		}		

TweenMax.to(".logo", 1.5, {
	x:800,
	opacity: 1, 
	 scale:1.25,
	 ease: Elastic.easeOut.config(1, 0.3)
});

tll.to(".anime_image", 1, {
	scale:1,
	delay:0.3,
	top:550,
	ease: Bounce.easeOut
});

tll.to(".second_image", 1, {
	scale:1.5,
	delay:-0.5,
	top:450,
	ease: Sine.easeInOut
});

