var site_entry_color = {
  "gv": "#FF9E99",
  "rp": "#99CFFF",
  "cs": "#FFE999",
  "pr": "#EEE"
}

$(document).ready(function() {
  $("#term_d3_js").popover({
    trigger: "hover",
    placement: "below"
  });
  $("a.site-link-button").click(function(){
    var ele_id = $(this).attr("href");
    //console.log(ele_id);
    var ele_type = $(ele_id).attr("color-type");
    $(".site-post").removeClass("site-on-chosen-col1");
    $(".site-post").removeClass("site-on-chosen-col2");
    $(".site-post").removeClass("site-on-chosen-col3");
    if(ele_type == "yellow") {
      $(ele_id).addClass("site-on-chosen-col3");
    } else if(ele_type == "blue") {
      $(ele_id).addClass("site-on-chosen-col2");
    } else if(ele_type == "red") {
      $(ele_id).addClass("site-on-chosen-col1");
    }
  });
});