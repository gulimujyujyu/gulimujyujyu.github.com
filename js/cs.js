var site_entry_color = {
  "gv": "#FF9E99",
  "rp": "#99CFFF",
  "cs": "#FFE999",
  "pr": "#EEE"
}

$(document).ready(function() {
  $("#term_vim").popover({
    trigger: "hover",
    placement: "below"
  });
  $("#term_curl").popover({
    trigger: "hover",
    placement: "below"
  });
  $("#term_git").popover({
    trigger: "hover",
    placement: "below"
  });
  $("#term_imagemagick").popover({
    trigger: "hover",
    placement: "below"
  });
  $("#term_markdown").popover({
    trigger: "hover",
    placement: "below"
  });
  $("table#cs_table").tablesorter({ sortList: [[1,0]] });
});