function slider1(cpadding,autoplay,speed,dott){
    var padding = '0';
    if(cpadding == true){
	padding = '48px';
    }
    $('#topslider_ul').slick({
          infinite: true,
          dots:dott,
          slidesToShow: 1,
          centerMode: true,
          centerPadding:padding,
          autoplay:autoplay,
	  autoplaySpeed:speed,
          responsive: [{
               breakpoint: 480,
                    settings: {
                         centerMode: false,
               }
          }]
     });
}

function  slider2(itemcnt,autoplay,speed,dott) {
    $('#topslider_ul').slick({
          infinite: true,
          dots:dott,
          slidesToShow: itemcnt,
          autoplay:autoplay,
	  autoplaySpeed:speed,
          responsive: [{
               breakpoint: 480,
                    settings: {
			 slidesToShow:2,
               }
          }]
     });
}