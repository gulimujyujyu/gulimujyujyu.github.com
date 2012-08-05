/*
Color System:
- 4 main color
- grey: #C7C7C7
  - dark background: #eee
  - bright background: #FFF
  - inbetween background: #F5F5F5
- red: #E90B00
  - tinted: #ff9e99
- blue: #015094
  - tinted: #99cfff
- yellow: # ffc700
  - tinted: #ffe999
*/

var CONFIG = {
	logo_offset: {x:2, y:2},
	site_entry_color: {
		"gv": "#FF9E99",
		"rp": "#99CFFF",
		"cs": "#FFE999",
		"pr": "#EEE",
		"label-dev":"#ff9e99",
		"label-vis":"#99cfff"
	}
};

$(document).ready(function() {
	/*init logo, interaction with logo*/
	(function(){
		var hc = new Raphael("header_canvas", 84, 84);
		
		var hc_ele = [];
		//halo effect
		hc_ele[0] = hc.rect(16,0,48,16).attr({"stroke-width":"3",opacity:0.4,stroke:"#E90B00"}).translate(CONFIG.logo_offset.x,CONFIG.logo_offset.y);
		hc_ele[1] = hc.rect(0,16,16,48).attr({"stroke-width":"3",opacity:0.4,stroke:"#E90B00"}).translate(CONFIG.logo_offset.x,CONFIG.logo_offset.y);
		hc_ele[2] = hc.rect(32,16,48,16).attr({"stroke-width":"3",opacity:0.4,stroke:"#015094"}).translate(CONFIG.logo_offset.x,CONFIG.logo_offset.y);
		hc_ele[3] = hc.rect(16,32,16,48).attr({"stroke-width":"3",opacity:0.4,stroke:"#015094"}).translate(CONFIG.logo_offset.x,CONFIG.logo_offset.y);
		hc_ele[4] = hc.path("M32,32H80V48H48V64H64V56H80V80H32V32").attr({"stroke-width":"3",opacity:0.4,stroke:"#ffc700"}).translate(CONFIG.logo_offset.x,CONFIG.logo_offset.y);
		//content
		hc_ele[5] = hc.rect(16,0,48,16).attr("stroke-width","2").translate(CONFIG.logo_offset.x,CONFIG.logo_offset.y);
		hc_ele[6] = hc.rect(0,16,16,48).attr("stroke-width","2").translate(CONFIG.logo_offset.x,CONFIG.logo_offset.y);
		hc_ele[7] = hc.rect(32,16,48,16).attr("stroke-width","2").translate(CONFIG.logo_offset.x,CONFIG.logo_offset.y);
		hc_ele[8] = hc.rect(16,32,16,48).attr("stroke-width","2").translate(CONFIG.logo_offset.x,CONFIG.logo_offset.y);
		hc_ele[9] = hc.path("M32,32H80V48H48V64H64V56H80V80H32V32").attr("stroke-width","2").translate(CONFIG.logo_offset.x,CONFIG.logo_offset.y);
		
		hc_ele[10] = hc.rect(0,0,80,80).attr({fill:"transparent","stroke-width":"4",opacity:0.05}).translate(CONFIG.logo_offset.x,CONFIG.logo_offset.y);
		
		var HeaderHover = function(){
			//console.log("hover");
			hc_ele[0].stop().animate({opacity:0},50);
			hc_ele[1].stop().animate({opacity:0},50);
			hc_ele[2].stop().animate({opacity:0},50);
			hc_ele[3].stop().animate({opacity:0},50);
			hc_ele[4].stop().animate({opacity:0},50);
			hc_ele[5].stop().animate({fill:"#E90B00"},50);
			hc_ele[6].stop().animate({fill:"#E90B00"},50);
			hc_ele[7].stop().animate({fill:"#015094"},50);
			hc_ele[8].stop().animate({fill:"#015094"},50);
			hc_ele[9].stop().animate({fill:"#ffc700"},50);
			hc_ele[10].stop().animate({opacity:1},50);
		};
		
		var HeaderHoverOver = function(){
			//console.log("hover");
			hc_ele[0].stop().animate({opacity:0.4},100);
			hc_ele[1].stop().animate({opacity:0.4},100);
			hc_ele[2].stop().animate({opacity:0.4},100);
			hc_ele[3].stop().animate({opacity:0.4},100);
			hc_ele[4].stop().animate({opacity:0.4},100);
			hc_ele[5].stop().animate({fill:"none"},100);
			hc_ele[6].stop().animate({fill:"none"},100);
			hc_ele[7].stop().animate({fill:"none"},100);
			hc_ele[8].stop().animate({fill:"none"},100);
			hc_ele[9].stop().animate({fill:"none"},100);
			hc_ele[10].stop().animate({opacity:0.05},50);
		};
		
		//start
		for (var i=0; i < hc_ele.length; i++) {
			hc_ele[i].hover(function(){
				HeaderHover();
			},function(){
				HeaderHoverOver();
			});
		}
		
		//vav response
		$("li.nav-dev").hover(function(){
			console.log("hover in");
			hc_ele[0].stop().animate({opacity:0},50);
			hc_ele[1].stop().animate({opacity:0},50);
			hc_ele[5].stop().animate({fill:"#E90B00"},50);
			hc_ele[6].stop().animate({fill:"#E90B00"},50);
		}, function(){
			hc_ele[0].stop().animate({opacity:0.4},100);
			hc_ele[1].stop().animate({opacity:0.4},100);
			hc_ele[5].stop().animate({fill:"none"},100);
			hc_ele[6].stop().animate({fill:"none"},100);
		});
		
		$("li.nav-vis").hover(function(){
			console.log("hover in");
			hc_ele[2].stop().animate({opacity:0},50);
			hc_ele[3].stop().animate({opacity:0},50);
			hc_ele[7].stop().animate({fill:"#015094"},50);
			hc_ele[8].stop().animate({fill:"#015094"},50);
		}, function(){
			hc_ele[2].stop().animate({opacity:0.4},100);
			hc_ele[3].stop().animate({opacity:0.4},100);
			hc_ele[7].stop().animate({fill:"none"},100);
			hc_ele[8].stop().animate({fill:"none"},100);
		});
		
		$("li.nav-con").hover(function(){
			hc_ele[4].stop().animate({opacity:0},50);
			hc_ele[9].stop().animate({fill:"#ffc700"},50);
		}, function(){
			hc_ele[4].stop().animate({opacity:0.4},100);
			hc_ele[9].stop().animate({fill:"none"},100);
		});
	})();
	
	/*init motto*/
	(function(){
		//random select one
		var len = $("div.motto").children().size();
		var rn = Math.floor(Math.random()*(len+1));
		$("div.motto").children().eq(rn%len).removeClass("hidden");
	})();
	
	/*add hover for images*/
	(function(){
		$(".item-inner").hover(
			function(){
				//hover function
				////console.log("invoke");
				$(this).children(".caption").fadeIn("fast");
				var tmp_id = $(this).parent().hasClass("label-dev")?
					"label-dev":"label-vis";
				console.log(tmp_id);
				//console.log(site_entry_color[tmp_id]);
				$(this).children("a").fadeTo("fast", 0.1);
				$(this).stop().animate({backgroundColor:CONFIG.site_entry_color[tmp_id]},"fast");
				console.log(CONFIG.site_entry_color[tmp_id]);
			}, 
			function() {
				//unhover function
				$(this).children(".caption").fadeOut("fast");
				$(this).children("a").fadeTo("fast", 1);
				$(this).stop().animate({backgroundColor:""},"fast");
			}
		);
	})();
	
	/*response the menu*/
	(function(){
		$("div.site-logo").click(function(){
			$("div.item").fadeIn("fast");
		});
		$("li.nav-dev").click(function(){
			$("div.item").stop().fadeOut("fast");
			$("div.item.label-dev").fadeIn("fast");
		});
		$("li.nav-vis").click(function(){
			$("div.item").stop().fadeOut("fast");
		  $("div.item.label-vis").fadeIn("fast");				
		});
		$("li.nav-con").click(function(){
			$('#page-contact').modal('show');
		});
	})();
	
	/*hover the footer*/
	(function(){
		$("li.one-icon").hover(function(){
			$(this).find("a span svg path").attr('fill','#000')
		},function(){
			$(this).find("a span svg path").attr('fill','#C7C7C7')
		});
	})();
});