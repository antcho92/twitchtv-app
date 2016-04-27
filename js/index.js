var streams = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff"];

$.ajax({
	url: 'https://api.twitch.tv/kraken/streams/ESL_SC2',
	type: 'GET',
	dataType: 'jsonp',
	success: function(data) {
		var game,
			status,
			description,
			logo = data.stream.channel.logo,
			url = data.stream.channel.url,
			channelName = data.stream.channel.name;
    if (data.stream === null) {
      game = "Offline";
      status = "offline";
    } else if (data.stream === undefined) {
      game = "Account Closed";
      status = "offline";
    } else {
      game = data.stream.game;
      status = "online";
			description = data.stream.channel.status;
    };
		var html = "<div class='row online'> <div class='col-xs-1'><img class='logo' src='" + logo +
			"'> </div> <div class='col-xs-2'> <a href='" + url + "'>" + channelName + "</a></div> <div class='col-xs-8'>" + game +
			"<span class='hidden-xs'>: " + description + "</span> </div> </div>";
		$('#fccChannel').append(html);
	}
});

$(document).ready(function() {

});
