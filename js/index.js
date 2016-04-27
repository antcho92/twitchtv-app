var channels = ["FreeCodeCamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas", "beohoff", "WagamamaTV", "brunofin", "sing_sing", "Arteezy"];

channels.forEach(function(channel) {
	$.ajax({
		url: 'https://api.twitch.tv/kraken/streams/' + channel,
		type: 'GET',
		dataType: 'jsonp',
		success: function(data) {
			var game,
				status,
				description,
				logo,
				url = 'https://www.twitch.tv/' + channel,
				channelName = channel;
	    if (data.stream === null) {
	      game = "Offline";
	      status = "offline";
				logo = 'images/offline.jpg';
				description = "";
	    } else if (data.stream === undefined) {
	      game = "Account Closed";
	      status = "offline";
				logo = 'images/offline.jpg';
				description = "";
	    } else {
	      game = data.stream.game;
	      status = "online";
				description = ": " + data.stream.channel.status;
				logo = data.stream.channel.logo;
	    };
			var html = "<div class='row " + status + "'> <div class='col-xs-1'><img class='logo' src='" + logo +
				"'> </div> <div class='col-xs-3'> <a href='" + url + "'>" + channelName + "</a></div> <div class='col-xs-8'>" + game +
				"<span class='hidden-xs'>" + description + "</span> </div> </div>";
			status === "online" ? $('#channels').prepend(html) : $('#channels').append(html);
		}
	});
});

$(document).ready(function() {

});
