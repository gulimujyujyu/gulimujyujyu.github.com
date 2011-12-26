var site_entry_color = {
  "gv": "#FF9E99",
  "rp": "#99CFFF",
  "cs": "#FFE999",
  "pr": "#EEE"
}

$(document).ready(function() {
  $(".site-entry").hover(
    function(){
      //hover function
      ////console.log("invoke");
	    $(this).children(".entry-mask-title").fadeIn("fast");
	    $(this).children(".entry-mask-content").fadeIn("fast");
	    $(this).children(".entry-mask-link").fadeIn("fast");
	    var tmp_id = $(this).attr("id");
	    ////console.log(tmp_id);
	    //console.log(site_entry_color[tmp_id]);
	    $(this).children("img").fadeTo("fast", 0);
	    $(this).stop().animate({backgroundColor:site_entry_color[tmp_id]},"fast");
	  }, 
	  function() {
	    //unhover function
	    $(this).children(".entry-mask-title").fadeOut("fast");
	    $(this).children(".entry-mask-content").fadeOut("fast");
	    $(this).children(".entry-mask-link").fadeOut("fast");
	    $(this).children("img").fadeTo("fast", 1);
	    $(this).stop().animate({backgroundColor:""},"fast");
    }
  );
  
  $("#site-fun").popover({
    trigger: "hover",
    placement: "below"
  });
});