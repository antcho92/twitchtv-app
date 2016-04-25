$(document).ready(function() {
	$.ajax({
		url: 'https://api.twitch.tv/kraken/streams/wagamamatv',
		type: 'GET',
		dataType: 'jsonp',
		success: function(data) {
			$('#fccChannel').append("<img src=\'"+data.stream.preview.medium+"\'>");

		}
	});
});
