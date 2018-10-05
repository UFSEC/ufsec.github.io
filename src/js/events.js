var eventURL = "https://ufacm.xyz/secEvents";
// var eventURL = "http://e6c762cf.ngrok.io/secEvents"

function getNextEvent(callback) {
  getAllEvents(function(events) {
    // Find the closest event to todays date/.
    if (events) {
      var today = new Date();
      for (var i = 0; i < events.length; i++) {
        if (new Date(events[i].starttime) > today) {
          callback(events[i]);
          return;
        }
      }
      callback(undefined);
    } else {
      callback(undefined);
    }
  });
}

// Returns all events sorted by start_time.
function getAllEvents(callback) {
  $.ajax({
    type: "GET",
    url: eventURL,
    dataType: 'json',
    success: function(json) {
      console.log(json);
      var groupEvents = json.concat(additionalEvents); // Joins the server events with any additional ones we add manually. TODO: Possibly check for duplicates? We're doing this by manually anyway so just check beforehand before adding an event.
      callback(sortEvents(groupEvents));
    },
    error: function(error) {
      console.log(error);
      callback(undefined);
    }
  });
}

function sortEvents(groupEvents) {
  // Sort em brah.
  groupEvents.sort(function(e1, e2) {
    if (e1.starttime < e2.starttime)
      return -1;
    if (e1.starttime > e2.starttime)
      return 1;
    return 0;
  });
  return groupEvents;
}

// Put additional events here
var additionalEvents = [
  {
    "starttime": "2016-09-19T18:30:00-04:00",
    "name": "Command Line Workshop Introductory Workshop",
    "description": "Next Monday (9/19) at 6:30 in LIT 101, Max will be hosting this Command Line Workshop to learn how to use that scary little black box on your computer! All are welcome and this tutorial is applicable for Windows, Linux, and Mac OSX. No experience is needed so beginners are welcome and encouraged to attend!",
    "__v": 0,
    "place": {
      "name": "LIT 101"
    }
  }, {
    "starttime": "2016-09-22T17:00:00-04:00",
    "name": "Introduction to iOS Workshop #1",
    "description": "We are teaming up with UF ACM and ACE to host a 3 part series, Introduction to iOS, taught by Nick Miller. Next Thursday (9/22) at 5:00pm (location TBD)." + "Part One of this Workshop will introduce mobile development on the iOS platform and will cover Xcode, Swift, Storyboard, Navigation, and Emulators." + "Please have Xcode already installed prior to this workshop because it usually takes a while to download!",
    "__v": 0,
    "place": {
      "name": "TBD"
    }
  }, {
    "starttime": "2016-09-29T18:30:00-04:00",
    "name": "Git/GitHub Workshop",
    "description": "Ever heard of the word Git, or GitHub, but you have no idea what it is? " + "Come to our GitHub workshop and learn how to use one of the most useful tools in the software development industry." + "We will be collaborating with WiCSE and ACE to host a set of presentations to help equip you with a new set of tools" + "that will really help you moving forward with software developent. Even if you have used git before, but aren't really sure" + "of why/ what is really going on when you type those commands in the terminal, this would be a great oppourtunity for you to learn more." + "All levels of experience are welcome. We hope to see you there!",
    "__v": 0,
    "place": {
      "name": "CSE E404"
    }
  }, {
    "starttime": "2016-12-02T18:15:00-04:00",
    "name": "Supplements 3: Java GUI w/ SEC",
    "description": "Co-Hosted by UF First Time Programmers (FTP)." + "\n" + "We will be focusing on making a Graphical User Interface in Java." + "\n" + "Using Java Swing, we hope that you can put all the skills you learned to work." + "\n" + "Please come out to this event as it will be out last meeting for the semester!",
    "__v": 0,
    "place": {
      "name": "BLK 0315"
    }
  }, {
    "starttime": "2017-01-21T20:00:00-04:00",
    "name": "Swamphacks - Basic Android",
    "description": "Please come out to this event! Hosted by our officer Michael.",
    "__v": 0,
    "place": {
      "name": "Marston"
    }
  },
  /*{
		"starttime": "2017-02-01T18:15:00-04:00",
		"name": "Game Dev Tutorial w/ PyGame - Spring 2017 GBM #1",
		"description": "Hey guys, join us Wednesday 2/1/2017 in **TBD** for our first GBM and tutorial this semester. "+
									"We will have a quick introduction of the club and then go right into our first tutorial. "+
									"Have basic programming skills and interested in making a simple, cool, usable game but don't know where to start? Come to this! " +
									"If that doesn't convince you, how about spending a little over an hour of your time to learn a usable new skill and add a project to your resume/portfolio!? "+
									"We will be making a simple game with PyGame (http://www.pygame.org/download.shtml). "+
									"No Python experience is required.",
		"__v": 0,
		"place": {
			"name": "TBA"
		}
	},*/
  {
    "starttime": "2017-02-15T19:15:00-04:00",
    "name": "GBM #2: Frontend JavaScript Workshop w/ AngularJS",
    "description": "Interested in learning more about frontend web development? Have you heard of JavaScript and all of its different frameworks and libraries? " + "Angular, React, Vue.js, Ember, Knockout? Come out to our second GBM and learn all about JavaScript libraries and specifically Angular1.x! " + "- https://angular.io/ Sakthivel Arunachalam, a UF CISE alum who now works at Akamai Technoligies will be giving this awesome workshop. " + "Even if you have minimal or 0 frontend experience, still come out to learn and hear about all there is to learn in the JavaScript world.",
    "__v": 0,
    "place": {
      "name": "LIT 0113"
    }
  }, {
    "starttime": "2017-09-20T18:15:00-04:00",
    "name": "Personal Website with Daniela Travieso - Fall 2017 GBM #1",
    "description": "Hey guys, join us Wednesday 9/20/2017 in **TBA** for our first GBM and tutorial this semester. " + "We will have a quick introduction of the club and then go right into our first tutorial. " + "Our first tutorial will be building your own personal website using the basics of html, css, and JavaScript. " + "No experience is necessary so please come to our GBM! ",
    "__v": 0,
    "place": {
      "name": "LIT 0235"
    }
  }, {
    "starttime": "2017-10-04T18:15:00-04:00",
    "name": "Chrome Extension - Fall 2017 GBM #2",
    "description": "Have you ever wondered how your AD blocker works? " + "Come to this event to create your very own chrome extension! " + "We will help you get started so that you can build the next useful extension. ",
    "__v": 0,
    "place": {
      "name": "MCCA G186"
    }
  }, {
    "starttime": "2017-10-18T18:15:00-04:00",
    "name": "Fireside Chat with SEC && More! - Fall 2017 GBM #3",
    "description": "In lieu of recruiting season and deadlines, we are hosting a fireside chat with previous interns from some of the top tech companies! We will be talking with you about the interview process, company culture, and everything in between" + "Interns from Microsoft, Facebook, Lyft, Pixar, HP, Airbnb, Ultimate Software, and Shopify will all be present and look forward to answering any questions you may have." + "Feel free to bring along a copy of your resume to have it looked over and edited!",
    "__v": 0,
    "place": {
      "name": "CSE E121"
    }
  }, {
    "starttime": "2017-11-01T18:15:00-04:00",
    "name": "Slack Bot! - Fall 2017 GBM #4",
    "description": "Slack? What's that? Slack is a messaging platform with a lot of built in functionality. " + "At this gbm we are going to be using Slack's API to create a chatbot (also known as a slackbot) " + "that can do almost anything you want it to! We are actually using this tutorial as an opportunity for our members to start joining the SEC slack. " + "Join ufsec.slack.com to get better updates and make it easier to be involved",
    "__v": 0,
    "place": {
      "name": "LIT 0109"
    }
  }, {
    "starttime": "2017-11-15T18:15:00-04:00",
    "name": "Corona! - Fall 2017 GBM #5",
    "description": "Join us for our 5th and final GBM of the semester where we will be making a balloon popping game using Corona! What is Corona? Corona is a 2d game/app engine. It is free" + "and uses an easy programming language called Lua. Make sure to come check it out!" + "No experience is necessary!",
    "__v": 0,
    "place": {
      "name": "WEIL 0270"
    }
  }, {
    "starttime": "2018-01-24T18:15:00-05:00",
    "name": "Career Showcase Prep - Spring 2018 GBM #1",
    "description": "Come out to our first GBM of the Spring semester! We are going to help you prep for Career Showcase by going over good questions to ask recruiters, what to expect in an interview and an overview of how to get the most out of Career Showcase. Feel free to bring your resume to be reviewed too! Can't wait to see you all there!",
    "__v": 0,
    "place": {
      "name": "CSE E121"
    }
  }, {
    "starttime": "2018-02-05T18:15:00-04:45",
    "name": "iTunes API Tutorial - Spring 2018 GBM #2",
    "description": "Our second GBM will take place this coming Monday, February 5th (2/5) and we will be going over how to use the iTunes API. In this tutorial you will be learning how to make a web client that makes a request to the iTunes search API. This request will allow you to type in the name of an artist and get back a list of the artist's top songs with a link to the iTunes music store!",
    "__v": 0,
    "place": {
      "name": "LIT 0113"
    }
  }, {
    "starttime": "2018-02-19T18:15:00-05:00",
    "name": "An Introduction to Block Chain, Smart Contracts, and Ethereum - Spring 2018 GBM #3",
    "description": "Come learn about smart contract programming on the Ethereum blockchain! Smart contracts are pieces of code that can run independently of human involvement. These allow for decentralized applications which can reduce middlemen and overhead/costs. We'll work with Solidity (similar to JavaScript) and truffle to build a decentralized web application! Please follow the setup guide provided below before attending this event.",
    "__v": 0,
    "place": {
      "name": "LIT 0113"
    }
  }, {
    "starttime": "2018-04-26T18:15:00-04:00",
    "name": "Dave Small's Final Lecture: The Importance of Self-Education - Spring 2018's Last GBM",
    "description": "This is certainly an event you don't want to miss. Join Software Engineering Club in listening to one of the most esteemed and notorious professors in UF CISE. Dave Small will be delivering his 'Final Lecture' regarding the importance of self-education.",
    "__v": 0,
    "place": {
      "name": "LIT 0121"
    }
  }
];
