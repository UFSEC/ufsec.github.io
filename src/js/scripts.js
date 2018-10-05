jQuery(document).ready(function() {
    /*
	    Countdown initializer
    */
  getNextEvent(function(nextEvent) {
    if(nextEvent){
      var countTo = new Date(nextEvent.starttime);
    	$('.timer').countdown(countTo, function(event) {
    		$(this).find('.days').text(event.offset.totalDays);
    		$(this).find('.hours').text(event.offset.hours);
    		$(this).find('.minutes').text(event.offset.minutes);
    		$(this).find('.seconds').text(event.offset.seconds);
    	});

      // Populate event info
      $('.event-title').text(nextEvent.name);
      $('.event-description').text(nextEvent.description);

      let locationName = "TBD"

      if (nextEvent.place) {
        locationName = nextEvent.place.name
      }

      var locationText = "This event will be held at <strong>" + locationName + "</strong> and is starting in:"

      $('.event-location').html(locationText)

      // Set the actual event time aslso
      $('.event-time').text("aka " + getFormattedDate(nextEvent))
    } else {

      // There are no upcomming events.
      $('.event-title').text("No upcoming events.");
      $('.timer').hide();
    }
    $('.coming-soon').backstretch([
      "src/img/sec-banner.png"
    ]);
  });

    /*
      Event feed initializer
    */

    // Helps return the date in a way that is formatted nicely :)
    function getFormattedDate(event){
      // Some time formatting options.
      var startTimeFormat = {
        weekday: "long", year: "numeric", month: "short",
        day: "numeric", hour: "2-digit", minute: "2-digit"
      };
      var endTimeFormat = {
        hour: "2-digit", minute: "2-digit"
      }

      // Create the date string with the start time.
      var startDate = new Date(event.starttime);
      var dateString = startDate.toLocaleTimeString("en-is", startTimeFormat);

      // Try to extract and end time and add it if there is one.
      if(event.end_time){
        var endDate = new Date(event.endtime);
        dateString += " - " + endDate.toLocaleTimeString("en-is", endTimeFormat);
      }

      return dateString;
    }

    // Generates the html for an event item.
    function eventItemGenerator(event){
      var locationName = "TBD"
      if (event.place) {
        locationName = event.place.name
      }
      var eventItemHtml = "<div class=\"feed-item col-sm-8 col-sm-offset-2\">" +
        "<h2>" + event.name + "</h2>" +
        "<p>" + event.description + "</p>" +
        "<div class=\"feed-item-info\">" +
          "<p><span class=\"glyphicon glyphicon-time\"></span>" + getFormattedDate(event) +"</p>" +
          "<p><span class=\"glyphicon glyphicon-map-marker\"></span>" + locationName + "</p>" +
        "</div>" +
      "</div>";

      return eventItemHtml;
    }

    // Get the event feed and events.
    var eventFeed = $(this).find('#feed-content');
    var events = getAllEvents(function(events) {
      if (events) {
        var today = new Date();
        // Loop through all the events and add each item to the feed.
        events.forEach(function(event){
          if(new Date(event.starttime) > today){
            eventFeed.append(eventItemGenerator(event));
          }
        });
      } else {
        $('#upcoming-events-feed-title').hide();
        eventFeed.append("<h4>Please check back again later.</h4>")
      }
    });


    /*
        Tooltips
    */
    $('.social a').tooltip();

});
