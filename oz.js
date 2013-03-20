(function() {
    var delay = $('script').last().attr('data-delay');
	var url = $('script').last().attr('data-remote');
	var ozLastDestination = null;
	var ozUpdatePage = function(){
		$.getJSON(url, function(destination) {
			if(ozLastDestination!=destination){
				ozLastDestination=destination;
				window.location='#'+destination;
			}
		});
	
	}
	
    $(document).ready(function() {
		setInterval(ozUpdatePage, delay)
    });
})();
