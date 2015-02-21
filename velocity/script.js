var x = 0;
var y = 0;
var dx = 1;
var dy = 1;
var $element = $('.element');
/*
setTimeout(function(){
	$(".element").velocity({translateX: 100}, 300, function(){
		x ++;
	})
}, 1000);
*/
/*
setInterval(function animate(){
	if(x > $(window).width() || x < 0) dx *= -1;
	x += dx*100;
	if(y > $(window).height() || y < 0) dy *= -1;
		y += dy*100;
	$element.velocity({translateX: x}, 300, function(){
		$element.velocity({translateY: y}, 300, function(){
		});
	})
}, 100);
*/
setInterval(function animate(){
	$element
		.velocity({translateX: 100}, 300) 
		.velocity({translateY: 100}, 300) 
		.velocity({translateX: 0}, 300) 
		.velocity({translateY: 0}, 300, animate);
}, 100);