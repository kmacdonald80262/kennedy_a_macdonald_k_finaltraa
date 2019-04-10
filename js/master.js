// JavaScript Document

(function(){

	let links = document.querySelectorAll(".mainNav a");
	let targetArea;

	console.log(links);


	function scrollLink(e) {
		console.log(e.currentTarget.id);
		//console.log(e.currentTarget.id.slice(0,-3));//
		e.preventDefault();
		targetArea = e.currentTarget.id.slice(0,-6);
		TweenLite.to(window, 1, {scrollTo:{y:`#${targetArea}`, offsetY:70, autoKill:false}})


	}

	for(var i=0; i < links.length; i++) {

		//link[0] access first link in nodelist//
		links[i].addEventListener("click", scrollLink);
	}

})();


// By default, the ScrollToPlugin will automatically sense if the scroll position was changed outside of itself 
// (like if the user manually started dragging the scrollbar mid-tween) and cancel that portion of the tween.
// If, however, you'd like to prevent the auto-killing behavior, set autoKill:false