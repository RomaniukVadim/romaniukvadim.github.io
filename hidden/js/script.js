$(document).ready(function(){
			$('.tab-container').easytabs({
			defaultTab: 'li:nth-child(2)',
			transitionIn: 'slideDown',
			transitionOut: 'slideUp'
			});
			$(".fancybox").fancybox({
			        padding : 0,
			          helpers : {
				        overlay : {
				            css : {
				                'background' : 'rgba(35, 40, 48, 1)'
				            }
				        }
				    }
			    });
			$('#arch').fancybox({
			        padding : 0,
			          helpers : {
				        overlay : {
				            css : {
				                'background' : 'rgba(35, 40, 48, 1)'
				            }
				        }
				    }
			    });
			$('.bxslider').bxSlider({
				 minSlides: 1,
			  maxSlides: 1,
			  slideMargin: 10,
			  infiniteLoop: false,
			  moveSlides: 1,
			  controls: false,
			  auto: true
			});
});

function toggleFullScreen() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
   (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {  
      document.documentElement.requestFullScreen();  
    } else if (document.documentElement.mozRequestFullScreen) {  
      document.documentElement.mozRequestFullScreen();  
    } else if (document.documentElement.webkitRequestFullScreen) {  
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
    }  
  } else {  
    if (document.cancelFullScreen) {  
      document.cancelFullScreen();  
    } else if (document.mozCancelFullScreen) {  
      document.mozCancelFullScreen();  
    } else if (document.webkitCancelFullScreen) {  
      document.webkitCancelFullScreen();  
    }  
  }  
}
