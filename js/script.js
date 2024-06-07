curr = 2;
lim = 1;
clicked = false;

function resetSlides(){
	TweenMax.to($(".slider, .slider .info"), 0.5, {opacity:0})
	TweenMax.to($(".content h4"), 0.5, {color:"#fff"})		
}

function showSlide(n){
	resetSlides();
	TweenMax.to($(".content h4")[n], 0.5, {color:"#3a505e"})		
	TweenMax.to($(".slider")[n], 0.5, {opacity:1})		
	TweenMax.to($(".slider .info")[n], 0.5, {delay:0.5, opacity:1})		
}	

function scrollToSection(n){
	TweenMax.to(window, 0.5, {scrollTo:{y:n*window.innerHeight}})
}

function paginate(dir){
	switch(dir){
		case 'prev':
			if(curr > 2){				
				curr-=lim;
				TweenMax.to(".page4 .content-inner", 0.5, {left:"+="+ $(".pkg-item").width()*1.4})
			}
		break;
		
		case 'next':
			if(curr <= $(".pkg-item").length){				
				curr+=lim;
				TweenMax.to(".page4 .content-inner", 0.5, {left:"-="+ $(".pkg-item").width()*1.4})
			}				
		break;
	}
}

$(document).ready(function(){
	
	$("img.menu-o").on("mouseenter", function(e){
		TweenMax.to($(e.currentTarget), 0.5, {opacity:0})
		TweenMax.to($(e.currentTarget).parent().siblings(".menu-o"), 0.5, {opacity:0, visibility:"hidden"})
		TweenMax.to($(e.currentTarget).parent().find(".menu"), 0.5, {opacity:1, visibility:"visible"})
		TweenMax.to($(e.currentTarget).parent().siblings(".menu"), 0.5, {opacity:1, visibility:"visible"})
	})

	$(".nav-btn").on("mouseleave", function(e){
		TweenMax.to($(e.currentTarget).find(".menu"), 0.5, {opacity:0, visibility:"hidden"})
		TweenMax.to($(e.currentTarget).find(".menu-o"), 0.5, {opacity:1, visibility:"visible"})
	})

	showSlide(0)

	var width;

	$(".pkg-bottom").on("mouseenter", function(e){
		var idx = $(".pkg-bottom").toArray().indexOf(e.currentTarget);
		TweenMax.to($(".pkg-middle")[idx], 0.3, {
			visibility:"visible",
			height:150,
			paddingTop:20
		})
	})

	$(".pkg-item").on("mouseleave", function(e){		
		TweenMax.to($(".pkg-middle"), 0.2, {
			visibility:"hidden",
			height:0,
			paddingTop:0
		})
		TweenMax.to(".pkg-bottom", 0.2, {height:70, width:300, left:0})
	    $(".pkg-bottom").addClass("closed");

		TweenMax.to($(".more-info"), 0.2, {opacity:0})
	})

	$(".pkg-bottom").on("click", function(e){

		if(!$(this).hasClass("closed")){
			TweenMax.to(this, 0.5, {height:70})
		    $(this).addClass("closed");
		}else{
			TweenMax.set(this, {
		      height: "auto"
		    });
		    TweenMax.from(this, 0.5, {
		      height: 70
		    });
			TweenMax.to(this, 0.5, {width:400, left:"-=50"})
			$(this).removeClass("closed")
			var idx = $(".pkg-bottom").toArray().indexOf(e.currentTarget);
			TweenMax.to($(".more-info")[idx], 0.5, {delay:0.5, opacity:1})
			
			var a = $(".pkg-item")[idx];
			if($(a).offset().left + $(a).width() > $(".page4 .content").offset().left + $(".page4 .content").width()){
				console.log("next")
				paginate('next')
			}else if($(a).offset().left < $(".page4 .content").offset().left){
				console.log("prev")
				paginate('prev')
			}
		}
	});

	$(".arrow-left").on("click", function(e){
		paginate('prev')
	})

	$(".arrow-right").on("click", function(e){
		paginate('next')
	})
	
	var controller = new ScrollMagic.Controller();
	
	var scene = new ScrollMagic.Scene({
		triggerElement: "#trigger1"
	})
	.setTween(".page1 .inner", 3, {opacity:1}) // trigger a TweenMax.to tween
	//.addIndicators({name: "1 (duration: 1)"}) // add indicators (requires plugin)
	.addTo(controller);

	scene = new ScrollMagic.Scene({
		triggerElement: "#trigger2",
		offset:200
	})
	.setTween(".page2 .inner", 1, {top:"-=80"}) // trigger a TweenMax.to tween
	//.addIndicators({name: "2 (duration: 0.5)"}) // add indicators (requires plugin)
	.addTo(controller);

	scene = new ScrollMagic.Scene({
		triggerElement: "#trigger3",
		offset:-200
	})
	.setTween(".spacer1", 1, {backgroundPosition:"0% 70%"}) // trigger a TweenMax.to tween
	//.addIndicators({name: "2 (duration: 0.5)"}) // add indicators (requires plugin)
	.addTo(controller);	
	
	scene = new ScrollMagic.Scene({
		triggerElement: "#trigger3",
		offset:200
	})
	.setTween(".page3 .inner", 0.5, {top:"-=20"}) // trigger a TweenMax.to tween
	//.addIndicators({name: "3 (duration: 0.5)"}) // add indicators (requires plugin)
	.addTo(controller);

	scene = new ScrollMagic.Scene({
		triggerElement: "#trigger4",
		offset:-200
	})
	.setTween(".spacer2", 1, {backgroundPosition:"0% 70%"}) // trigger a TweenMax.to tween
	//.addIndicators({name: "3 (duration: 0.5)"}) // add indicators (requires plugin)
	.addTo(controller);

	scene = new ScrollMagic.Scene({
		triggerElement: "#trigger4"
	})
	.setTween(".page4 .inner", 0.5, {top:"-=50"}) // trigger a TweenMax.to tween
	//.addIndicators({name: "4 (duration: 0.5)"}) // add indicators (requires plugin)
	.addTo(controller);

	scene = new ScrollMagic.Scene({
		triggerElement: "#trigger5",
		offset:-200
	})
	.setTween(".spacer3", 1, {backgroundPosition:"0% 70%"}) // trigger a TweenMax.to tween
	//.addIndicators({name: "4 (duration: 0.5)"}) // add indicators (requires plugin)
	.addTo(controller);

	scene = new ScrollMagic.Scene({
		triggerElement: "#trigger5"
	})
	.setTween(".page5 .inner", 0.5, {top:"-=50"}) // trigger a TweenMax.to tween
	//.addIndicators({name: "5 (duration: 0.5)"}) // add indicators (requires plugin)
	.addTo(controller);
})