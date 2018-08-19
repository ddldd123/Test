var myPlayer = null;
var video = null;
$(document).ready(function() {
	$(".newvideo").mouseover(function() {
		video = $(this).children("video").attr("ID");
		$(this).children("img").hide();
		$("#" + video).show();
		myPlayer = videojs(video);
		videojs(video).ready(function() {
			var myPlayer = this;
			myPlayer.play();
		});
	});
	$(".newvideo").mouseleave(function() {});
});