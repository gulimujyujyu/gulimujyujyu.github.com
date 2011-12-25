var utils = {
  rgb2hsv: function(rgb) {
    var fR = rgb['R'];
    var fG = rgb['G'];
    var fB = rgb['B'];
    var rgbmin = Math.min(fR,fG,fB);
    var rgbmax = Math.max(fR,fG,fB);
    //hsv
    var hsv_v = rgbmax;
    var hsv_h,hsv_s;
    if (hsv_v <= 0.0) {
      hsv_h = 0;
      hsv_s = 0;
    } else {
      hsv_s = (rgbmax-rgbmin)/rgbmax;
      var rp = (rgbmax-fR)/(rgbmax-rgbmin);
      var gp = (rgbmax-fG)/(rgbmax-rgbmin);
      var bp = (rgbmax-fB)/(rgbmax-rgbmin);
      if(hsv_s <= 0.0) {
        hsv_h = 0;
      } else {
        if(fR == rgbmax && fG == rgbmin) {
          hsv_h = 5+bp;
        } else if(fR == rgbmax && fG != rgbmin) {
          hsv_h = 1-gp;
        } else if(fG == rgbmax && fB == rgbmin) {
          hsv_h = 1+rp;
        } else if(fG == rgbmax && fB != rgbmin) {
          hsv_h = 3-bp;
        } else if(fB == rgbmax) {
          hsv_h = 3+gp;
        } else {
          hsv_h = 5-rp;
        }
        hsv_h = hsv_h*60;
      }
    }
    var hsv = {
      'H':hsv_h,
      'S':hsv_s,
      'V':hsv_v
    };
    console.log(hsv_h);
    return hsv;
  },
  rgb2hsi: function(rgb) {
    var fR = rgb['R'];
    var fG = rgb['G'];
    var fB = rgb['B'];
    var rgbmin = Math.min(fR,fG,fB);
    var rgbmax = Math.max(fR,fG,fB);
    var hsi_i = (fR+fG+fB)/3;
    //console.log(hsi_i);
    var hsi_s, hsi_h;
    if (hsi_i <= 0.0) {
      hsi_s = 0;
      hsi_h = 0;
    } else {
      hsi_s = 1-1/hsi_i*rgbmin;
      var num = 0.5*(fR-fG+fR-fB);
      var dom = Math.sqrt((fR-fG)*(fR-fG)+(fR-fB)*(fG-fB));
      //console.log(num/dom);
      hsi_h = Math.acos(num/dom)/Math.PI*180;
      if(fB/hsi_i > fG/hsi_i) {
        hsi_h = 360-hsi_h;
      }
    }
    var hsi = {
      'H':hsi_h,
      'S':hsi_s,
      'I':hsi_i
    };
    //console.log(hsv_h);
    return hsi;
  },
  rgb2cmyk: function(rgb) {
    var fR = rgb['R'];
    var fG = rgb['G'];
    var fB = rgb['B'];
    var rgbmin = Math.min(fR,fG,fB);
    var rgbmax = Math.max(fR,fG,fB);
    var cmyk_k = rgbmin;
    var cmyk_c, cmyk_m, cmyk_y;
    if( cmyk_k >= 1.0) {
      cmyk_c = 1;
      cmyk_m = 1;
      cmyk_y = 1;
    } else {
      cmyk_c = (1-fR-cmyk_k)/(1-cmyk_k);
      cmyk_m = (1-fG-cmyk_k)/(1-cmyk_k);
      cmyk_y = (1-fB-cmyk_k)/(1-cmyk_k);
    }
    var cmyk = {
      'C':cmyk_c,
      'M':cmyk_m,
      'Y':cmyk_y,
      'K':cmyk_k
    };
    //console.log(hsv_h);
    return cmyk;
  },
  hsv2rgb: function(hsv) {
    var r, g, b;
  	var i;
  	var f, p, q, t;

  	// Make sure our arguments stay in-range
  	h = Math.max(0, Math.min(360, hsv['H']));
  	s = Math.max(0, Math.min(1, hsv['S']));
  	v = Math.max(0, Math.min(1, hsv['V']));

  	if(s == 0) {
  		// Achromatic (grey)
  		r = g = b = v;
  		var rgb = {
  		  'R':r,
  		  'G':g,
  		  'B':b
  		}
  		return rgb;
  	}

  	h /= 60; // sector 0 to 5
  	i = Math.floor(h);
  	f = h - i; // factorial part of h
  	p = v * (1 - s);
  	q = v * (1 - s * f);
  	t = v * (1 - s * (1 - f));

  	switch(i) {
  		case 0:
  			r = v;
  			g = t;
  			b = p;
  			break;

  		case 1:
  			r = q;
  			g = v;
  			b = p;
  			break;

  		case 2:
  			r = p;
  			g = v;
  			b = t;
  			break;

  		case 3:
  			r = p;
  			g = q;
  			b = v;
  			break;

  		case 4:
  			r = t;
  			g = p;
  			b = v;
  			break;

  		default: // case 5:
  			r = v;
  			g = p;
  			b = q;
  	}
    
    var rgb = {
      'R':r,
      'G':g,
      'B':b
    }
    return rgb;
  },
  rgb2hex: function(rgb) {
    var r = parseInt(Math.floor(rgb['R']*255));
    var g = parseInt(Math.floor(rgb['G']*255));
    var b = parseInt(Math.floor(rgb['B']*255));
    //console.log(r+' '+g+' '+b);
    var hex = b | (g<<8) | (r<<16);
    //console.log('debug1');
    return '#'+hex.toString(16);
  },
  round_float: function(num,digi) {
    var base = Math.pow(10,digi);
    return Math.round(num*base)/base;
  },
  rgb2string: function(rgb) {
    var r = parseInt(Math.floor(rgb['R']*255));
    var g = parseInt(Math.floor(rgb['G']*255));
    var b = parseInt(Math.floor(rgb['B']*255));
    return '('+r+','+g+','+b+')';
  },
};

var deco = {
  update_color_swatch: function(ui_sel,rgb) {
    var ity = (rgb['R']+rgb['G']+rgb['B'])/3.0;
    var cl = utils.rgb2hex(rgb);
    var cl_str = utils.rgb2string(rgb);
    $(ui_sel).html(cl_str).css('background-color',cl);
    if(ity > 0.5) {
      $(ui_sel).css('color','#222');
    } else {
      $(ui_sel).css('color','#DDD');
    }
  },
  update_color_dialog: function(name,iR, iG, iB) {
    rgb = {};
    rgb['R'] = iR/255.0;
    rgb['G'] = iG/255.0;
    rgb['B'] = iB/255.0;
    //hsv
    var hsv = utils.rgb2hsv(rgb);
    //hsi
    var hsi = utils.rgb2hsi(rgb);
    //cmyk
    var cmyk = utils.rgb2cmyk(rgb);

    //analog
    var  tmp_hsv = $.extend(true, {}, hsv);
    tmp_hsv['H'] = (hsv['H'])%360;
    var ori = utils.hsv2rgb(tmp_hsv);
    tmp_hsv['H'] = (hsv['H']+30)%360;
    var ana1 = utils.hsv2rgb(tmp_hsv);
    tmp_hsv['H'] = (hsv['H']+60)%360;
    var ana2 = utils.hsv2rgb(tmp_hsv);

    //complementary
    tmp_hsv['H'] = (hsv['H']+180)%360;
    var com1 = utils.hsv2rgb(tmp_hsv);

    //tri
    tmp_hsv['H'] = (hsv['H']+120)%360;
    var tri1 = utils.hsv2rgb(tmp_hsv);
    tmp_hsv['H'] = (hsv['H']+240)%360;
    var tri2 = utils.hsv2rgb(tmp_hsv);

    //spl
    tmp_hsv['H'] = (hsv['H']+150)%360;
    var spl1 = utils.hsv2rgb(tmp_hsv);
    tmp_hsv['H'] = (hsv['H']+210)%360;
    var spl2 = utils.hsv2rgb(tmp_hsv);

    //stat
    $('div#color_dialog').children('h3#dia_name').html(name);
    $('div#color_dialog').children('p#dia_rgb').html('(R,G,B):'+iR+','+iG+','+iB);
    $('div#color_dialog').children('p#dia_hsv').html('(H,S,V):'+utils.round_float(hsv['H'],0)+','+utils.round_float(hsv['S'],2)+','+utils.round_float(hsv['V'],2));
    $('div#color_dialog').children('p#dia_hsi').html('(H,S,I):'+utils.round_float(hsi['H'],0)+','+utils.round_float(hsi['S'],2)+','+utils.round_float(hsi['I'],2));
    $('div#color_dialog').children('p#dia_cmyk').html('(C,M,Y,K):'+utils.round_float(cmyk['C'],2)+','+utils.round_float(cmyk['M'],2)+','+utils.round_float(cmyk['Y'],2)+','+utils.round_float(cmyk['K'],2));
    //colors
    deco.update_color_swatch('div#color_dialog>#ori1',ori);
    deco.update_color_swatch('div#color_dialog>#ori2',ori);
    deco.update_color_swatch('div#color_dialog>#ori3',ori);
    deco.update_color_swatch('div#color_dialog>#ori4',ori);
    deco.update_color_swatch('div#color_dialog>#ana1',ana1);
    deco.update_color_swatch('div#color_dialog>#ana2',ana2);
    deco.update_color_swatch('div#color_dialog>#com1',com1);
    deco.update_color_swatch('div#color_dialog>#tri1',tri1);
    deco.update_color_swatch('div#color_dialog>#tri2',tri2);
    deco.update_color_swatch('div#color_dialog>#spl1',spl1);
    deco.update_color_swatch('div#color_dialog>#spl2',spl2);
  }
};

$(document).ready(function(){
  
  $('div#color_dialog').hide();
  
  $('div.color_card').mouseenter(function(e){
    $('div#color_dialog').show();
  });
  
  $('div.color_card').hover(function(e){
    console.log('mouse enter');
    //console.log('set value');
    //console.dir($(this).children('div.color_info').html());
    var name = $(this).children('div.color_info').children('h3.color_name').text();
    var rgb = $(this).children('div.color_info').children('h4.color_rgb').text();
    var hex = $(this).children('div.color_info').children('h4.color_hex').text();
    
    //rgb
    var re_rgb = /R,G,B: (\d+),(\d+),(\d+)/g;
    //console.dir(rgb);
    var rslt = re_rgb.exec(rgb);
    //console.dir(rslt);
    
    var iR = parseInt(rslt[1]);
    var iG = parseInt(rslt[2]);
    var iB = parseInt(rslt[3]);
    
    deco.update_color_dialog(name,iR,iG,iB);
    
    $('div#color_dialog').offset({
      left:$(window).scrollLeft(),
      top:$(window).scrollTop()
    }).fadeIn('fast');
    console.log('dialog show');
    console.log('dialog fade out');
  });
  
  $('div.color_card').mouseleave(function(e){
    $('div#color_dialog').hide();
  });
});
