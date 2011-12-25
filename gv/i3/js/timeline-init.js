var tl;
function onLoad() {
    var eventSource = new Timeline.DefaultEventSource();
/*
    var zones = [
        {   start:    "Fri Nov 22 1963 00:00:00 GMT-0600",
            end:      "Mon Nov 25 1963 00:00:00 GMT-0600",
            magnify:  10,
            unit:     Timeline.DateTime.DAY
        },
        {   start:    "Fri Nov 22 1963 09:00:00 GMT-0600",
            end:      "Sun Nov 24 1963 00:00:00 GMT-0600",
            magnify:  5,
            unit:     Timeline.DateTime.HOUR
        },
        {   start:    "Fri Nov 22 1963 11:00:00 GMT-0600",
            end:      "Sat Nov 23 1963 00:00:00 GMT-0600",
            magnify:  5,
            unit:     Timeline.DateTime.MINUTE,
            multiple: 10
        },
        {   start:    "Fri Nov 22 1963 12:00:00 GMT-0600",
            end:      "Fri Nov 22 1963 14:00:00 GMT-0600",
            magnify:  3,
            unit:     Timeline.DateTime.MINUTE,
            multiple: 5
        }
    ];

*/

    var date = "Fri Jul 06 2005 13:00:00 GMT-0600"
    var bandInfos = [
	     Timeline.createBandInfo({
		     eventSource: eventSource,
	         width:          "70%", 
	         date: date, 
	         intervalUnit:   Timeline.DateTime.MONTH, 
	         intervalPixels: 50
	     }),
	     Timeline.createBandInfo({
		     eventSource: eventSource,
	         width:          "30%", 
	         date: date, 
	         intervalUnit:   Timeline.DateTime.YEAR, 
	         intervalPixels: 100
	     })
	];
    bandInfos[1].syncWith = 0;
    bandInfos[1].highlight = true;

    tl = Timeline.create(document.getElementById("p2_timeline"), bandInfos, Timeline.HORIZONTAL);
    tl.loadXML("pcg.xml", function(xml, url) { eventSource.loadXML(xml, url); });
}

var resizeTimerID = null;
function onResize() {
    if (resizeTimerID == null) {
        resizeTimerID = window.setTimeout(function() {
            resizeTimerID = null;
            tl.layout();
        }, 500);
    }
}