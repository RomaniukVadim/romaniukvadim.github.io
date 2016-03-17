var $animText = $("#anim_text");

$animText.html( $animText.html().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;"));
//TweenMax.staggerFromTo( $animText.find("span"), 0.1, {autoAlpha:0}, {autoAlpha:1}, 0.1 );
$animText.find("span").each(function(){
						TweenMax.fromTo(this, 2.5, {autoAlpha:0, rotation:randomNum(-360, 360), rotationX:randomNum(-360, 360), rotationY:randomNum(-360, 360), rotationZ:randomNum(-360, 360), scale:0}, {autoAlpha:1, rotation:0, rotationX:0, rotationY:0, rotationZ:0, scale:1});					
					});		
		//helper random function
function randomNum (min, max) {
    return Math.random() * (max - min) + min;
}		
