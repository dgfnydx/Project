// banner轮播
$("#myCarousel").carousel('cycle');

function anchor(btnTag, boxTag, n) {
	$(btnTag).click(function() {
	    $("body,html").animate({
	        'scrollTop': $(boxTag).offset().top - n
	    }, '1000');
	});
}
anchor(".aboutus", ".about", 20)
anchor(".solve", ".solution", 20)
anchor(".beaut", ".display", 68)
anchor(".contact", ".contacts", 60)
// var timer = null;
// var clicks = true;
// function toTop() {
// 	if(clicks) {
// 		clearTimeout(timer);
// 		var about = document.getElementById("about");
// 		var ab = about.offsetTop
// 		window.scrollBy(0, 10);
// 		var top = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
// 		console.log(top)
// 		timer = setTimeout(toTop, 10);
// 		if(top >= ab) {
// 			clearTimeout(timer);
// 			clicks = false
// 		}
// 	}
// }
// $(".aboutus").click(function() {
// 	toTop()

// })
// function Anchor() {
// 	this.timer = null;
// 	this.clicks = true;
// 	this.btnTag = document.getElementById(tag);

// }

// function ScollPostion() {
//     var t, l, w, h;
//     if (document.documentElement && document.documentElement.scrollTop) {
//         t = document.documentElement.scrollTop;
//         l = document.documentElement.scrollLeft;
//         w = document.documentElement.scrollWidth;
//         h = document.documentElement.scrollHeight;
//     } else if (document.body) {
//         t = document.body.scrollTop;
//         l = document.body.scrollLeft;
//         w = document.body.scrollWidth;
//         h = document.body.scrollHeight;
//     }
//     return {
//         top: t,
//         left: l,
//         width: w,
//         height: h
//     };
// }
// console.log(ScollPostion())