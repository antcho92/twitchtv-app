$(document).ready(function() {

	var streams = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff"];

	$.ajax({
		url: 'https://api.twitch.tv/kraken/streams/ESL_SC2',
		type: 'GET',
		dataType: 'jsonp',
		success: function(data) {
			var channelLogo = data.stream.channel.logo,
				channelUrl = data.stream.channel.url,
				channelName = data.stream.channel.name,
				channelGame = data.stream.channel.game;
			var html = "<div class='row'> <div class='col-sm-1'><img src='" + data.stream.channel.logo +
				"'> </div> <div class='col-sm-2'> <h3>" + channelName + "</h3> </div> </div>";
			$('#fccChannel').append(html);
			//$('#fccChannel').append("<img src='"+data.stream.channel.logo+"'> <a href=\'" + data.stream.channel.url +
				//"'> <h3>" + data.stream.channel.name + "</h3> </a> <br> <p>" + data.stream.channel.game + "</p>");
		}
	});
});
