var channels = ["FreeCodeCamp", "WagamamaTV", "brunofin", "sing_sing", "Arteezy", "n0thingtv", "EternaLEnVyy", "Aui_2000", "w33haa", "ArmadaUGS", "ESL_SC2"];

function getChannels() {
    channels.forEach(function(channel) {
        $.ajax({
            url: 'https://api.twitch.tv/kraken/streams/' + channel,
            type: 'GET',
            dataType: 'jsonp',
            data: {
                client_id: 'pmcte01j2cpswcmn55ne7v1bc6qg8jo'
            },
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
                    "'> </div> <div class='col-xs-3' id='channel'> <a href='" + url + "'>" + channelName +
                    "</a></div> <div class='col-xs-8' id='streaming'>" + game +
                    "<span class='hidden-xs'>" + description + "</span> </div> </div>";
                status === "online" ? $('#channels').prepend(html) : $('#channels').append(html);
            }
        });
    });
}

$(document).ready(function() {
    getChannels();
    $(".selector").on('click', function(e) {
        e.preventDefault();
        var status = $(this).attr('id');
        if (status === "all") {
            $(".online, .offline").removeClass("hidden");
        } else if (status === "online") {
            $(".offline").addClass("hidden");
            $(".online").removeClass("hidden");
        } else {
            $(".online").addClass("hidden");
            $(".offline").removeClass("hidden");
        }
    });
});
