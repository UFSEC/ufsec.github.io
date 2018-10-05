jQuery(document).ready(function() {
  // TODO: set ufsec.com as a preferred domain in the google developer console.
  var API_KEY = "AIzaSyAPeIfli7HBgjq92ag5-tNhthOXxOpKV0w"
  var CHANNELS_URL = "https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=UCFZc1xBy9_cBRz2zHJ1Y4Qg&key=" + API_KEY
  var PLAYLIST_URL = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId="

  // Returns a list of the 50 most recent tutorials we've done
  function getUploads(callback) {
    getUploadsID(function(id){
      console.log("The channel ID is: " + id)
      getUploadsListWithID(id, function(uploads) {
        console.log("The list of uploads is: ")
        console.log(uploads)
        // Return the results
        callback(uploads)
      } )
    })
  }

  // Gets the playlist id which represents the list of uploads for a channel
  function getUploadsID(callback) {
    $.ajax({
      type: "GET",
      url: CHANNELS_URL,
      dataType: 'json',
      success: function(json) {
        console.log(json)
        var channelID = json.items[0].contentDetails.relatedPlaylists.uploads
        callback(channelID)
      }
    });
  }

  // Gets a list of uploads
  function getUploadsListWithID(channelID, callback) {
    $.ajax({
      type: "GET",
      url: PLAYLIST_URL+channelID+"&key="+API_KEY,
      dataType: 'json',
      success: function(json) {
        console.log(json)
        var uploads = json.items
        callback(uploads)
      }
    });
  }

  // Finds the github link in the description of the youtube videoId
  function findGithubLink(text) {
    var github = text.match(/(https:\/\/github\.com.*)/)
    if (github) {
      return github[0]
    }
    else{
      return ""
    }
  }

  function trimTitle(title) {
    idxOfColon = title.indexOf(":")
    if (idxOfColon > -1) {
      return title.substring(idxOfColon+2)
    }
  }

  // Generates the html for a tutorial item.
  function tutorialItemGenerator(upload) {
    var itemHTML = "<div class=\"feed-item col-sm-8 col-sm-offset-2\">" +

      "<h2>" + trimTitle(upload.snippet.title) + "</h2>" +
      "<div class=\"embed-responsive embed-responsive-16by9\">" +
        "<iframe class=\"embed-responsive-item\" src=\"http://www.youtube.com/embed/" + upload.snippet.resourceId.videoId + "\"></iframe>" +
      "</div>"
      // "<p>" + upload.snippet.description + "</p>" +
      var githubLink = findGithubLink(upload.snippet.description)
      if (githubLink.length > 0) {
        var githubButtonHTML =
        "<div class=\"feed-item-info\">" +
          "<p><a href=\" " + githubLink + "\"><i class=\"fa fa-github\" aria-hidden=\"true\"></i> See the code</a></p>" +
        "</div>"
        itemHTML += githubButtonHTML
      }
      itemHTML +="</div>";

    return itemHTML;
  }

  // Get the tutorial feed and list of youtube videos.
  var tutorialFeed = $(this).find('#feed-content');
  getUploads(function(uploads) {
    // Loop through all the uploads and add each item to the feed.
    uploads.forEach(function(upload){
      tutorialFeed.append(tutorialItemGenerator(upload));
    });
  });

});
