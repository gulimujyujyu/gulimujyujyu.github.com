var data; // loaded asynchronously
var colorFun;
var flag;
var clist = {"Country":"Country",
             "CostOfLiving":"Cost Of Living",
             "LeisureAndCulture":"Leisure And Culture",
             "Economy":"Economy",
              "Environment":"Environment",
              "Freedom":"Freedom",
              "Health":"Health",
              "Infrastructure":"Infrastructure",
              "RiskAndSafety":"Risk And Safety",
              "Climate":"Climate",
              "Final":"Final"};
var thres = 0;
var currentState = "CostOfLiving";
var xy = d3.geo.mercator();
xy.scale(800);
var translate = xy.translate();
    translate[0] = 480;
    translate[1] = 330;
    xy.translate(translate);

var path = d3.geo.path().projection(xy);
var svg = d3.select("#chart")
  .append("svg:svg");

var states = svg.append("svg:g")
    .attr("id", "states")
    .attr("class", "Reds");

var caption = states.append("svg:text")
  .text(clist["CostOfLiving"])
  .attr("x","20")
  .attr("y","460")
  .attr("class","caption");

var note = states.append("svg:text")
  .text("Basically, the darker, the worse.")
  .attr("x","40")
  .attr("y","480")
  .attr("class","note");

d3.json("world-countries.json", function(collection) {
  states.selectAll("path")
      .data(collection.features)
    .enter().append("svg:path")
      .attr("class", data ? quantize : null)
      .attr("d", path);
});

d3.csv("data.csv", function(csv) {
  data = d3.nest()
    .key(function(d){ return d.Abbreviation})
    .rollup(function(d){ return d[0]})
    .map(csv);
  
  colorFun = d3.scale.quantile()
    .domain(d3.range(101))
    .range(d3.range(9).reverse());
  
  states.selectAll("path")
    .attr("class",quantize)
    .append("svg:title")
      .text(function(d) { return d.properties.name+(data[d.id]?"":": No data"); });
  
  initMap();
  caption.text("Investigated Countries");
  note.text("Brightter one means no data collected.")
});

function initMap()
{
  flag = d3.select("#flag");
  for(var key in data) {
    flag.append("img")
      .attr("class","flag")
      .attr("title",data[key].Country)
      .attr("src","./countryflag/png/"+key.toLowerCase()+".png");
  }
}

function quantize(d) 
{
  return "q" + (data[d.id]?"5":"1") + "-9";
}

function resetAllButtons() {
  var lg = d3.selectAll("#chart");
  lg.selectAll("button").attr("class","");
  lg.select("#col").attr("class","first");
  lg.select("#fin").attr("class","last");
}

$("#slider").slider({
  min: 0,
  max: 100,
  value: 100,
  slide: function(event, ui) {
    thres = ui.value;
    d3.select("#indi")
      .text("Below shows the countries with the higher value than w.r.t "+clist[currentState]+": "+thres);
    updateFlag();
  }
});

/*
 * Country,
 * CostOfLiving,
 * LeisureAndCulture,
 * Economy,
 * Environment,
 * Freedom,
 * Health,
 * Infrastructure,
 * RiskAndSafety,
 * Climate,
 * Final
 */
function updateMap(col,noteStr) {
  states.selectAll("path")
    .attr("class",function(d){return "q" + (data[d.id]?colorFun(data[d.id][col]):"0") + "-9";});
  
  caption
    .text(clist[col]);
  
  note
    .text(noteStr);
    
  states.selectAll("svg title")
    .text(function(d) { return d.properties.name+":"+(data[d.id]?data[d.id][col]:"No data")});
  
  currentState = col;
  d3.select("#indi")
      .text("Below shows the countries with the higher value than w.r.t "+clist[currentState]+": "+thres);
  updateFlag();
}

function updateFlag() {
  $("#flag").empty();
  for(var key in data) {
    if(parseInt(data[key][currentState],10)>thres) { 
      flag.append("img")
        .attr("class","flag")
        .attr("title",data[key].Country)
        .attr("src","./countryflag/png/"+key.toLowerCase()+".png");
    } else {
      flag.append("img")
        .attr("class","flag")
        .attr("title",data[key].Country)
        .attr("src","./countryflag/png_g/"+key.toLowerCase()+".png");
    }
  }
}

function transitionCoL() {
  var group = d3.selectAll("#chart");
  resetAllButtons();
  group.select("#col").attr("class","first active");
  updateMap("CostOfLiving","Basically, the darker, the lower cost of living.");
}

function transitionLnC() {
  var group = d3.selectAll("#chart");
  resetAllButtons();
  group.select("#lnc").attr("class","active");
  updateMap("LeisureAndCulture","Basically, the darker, the worse.");
}

function transitionEco() {
  var group = d3.selectAll("#chart");
  resetAllButtons();
  group.select("#eco").attr("class","active");
  updateMap("Economy","Basically, the brighter, the stronger.");
}

function transitionEnv() {
  var group = d3.selectAll("#chart");
  resetAllButtons();
  group.select("#env").attr("class","active");
  updateMap("Environment","Basically, the darker, the worse.");
}

function transitionFre() {
  var group = d3.selectAll("#chart");
  resetAllButtons();
  group.select("#fre").attr("class","active");
  updateMap("Freedom","Basically, the darker, the less.");
}

function transitionHea() {
  var group = d3.selectAll("#chart");
  resetAllButtons();
  group.select("#hea").attr("class","active");
  updateMap("Health","Basically, the darker, the worse.");
}

function transitionInf() {
  var group = d3.selectAll("#chart");
  resetAllButtons();
  group.select("#inf").attr("class","active");
  updateMap("Infrastructure","Basically, the darker, the worse.");
}

function transitionRnS() {
  var group = d3.selectAll("#chart");
  resetAllButtons();
  group.select("#rns").attr("class","active");
  updateMap("RiskAndSafety","Basically, the darker, the worse.");
}

function transitionCli() {
  var group = d3.selectAll("#chart");
  resetAllButtons();
  group.select("#cli").attr("class","active");
  updateMap("Climate","Basically, the darker, the worse.");
}

function transitionFin() {
  var group = d3.selectAll("#chart");
  resetAllButtons();
  group.select("#fin").attr("class","last active");
  updateMap("Final");
}