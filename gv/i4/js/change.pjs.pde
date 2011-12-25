void setup() 
{
  size(600, 200);
  background(125);
  noStroke();
}

void draw()
{
  
  int i;
  color bg;
  //hue
  colorMode(RGB, 255,255,255);
  fill(255);
  text("Hue", 10, 25);
  colorMode(HSB, 255,255,255);
  for( i=0; i<256; i = i+5) {
    bg = color(i,255,255);
    fill(bg);
    rect(40+i/5*10, 10, 10, 20);
  }
  //saturation
  colorMode(RGB, 255,255,255);
  fill(255);
  text("Sat.", 10, 55);
  colorMode(HSB, 255,255,255);
  for( i=0; i<256; i = i+5) {
    bg = color(255,i,255);
    fill(bg);
    rect(40+i/5*10, 40, 10, 20);
  }
  //value
  colorMode(RGB, 255,255,255);
  fill(255);
  text("Val.", 10, 85);
  colorMode(HSB, 255,255,255);
  for( i=0; i<256; i = i+5) {
    bg = color(255,255,i);
    fill(bg);
    rect(40+i/5*10, 70, 10, 20);
  }
  //r
  colorMode(RGB, 255,255,255);
  fill(255);
  text("Red", 10, 115);
  for( i=0; i<256; i = i+5) {
    bg = color(i,0,0);
    fill(bg);
    rect(40+i/5*10, 100, 10, 20);
  }
  //g
  colorMode(RGB, 255,255,255);
  fill(255);
  text("Gre.", 10, 145);
  for( i=0; i<256; i = i+5) {
    bg = color(0,i,0);
    fill(bg);
    rect(40+i/5*10, 130, 10, 20);
  }
  //b
  colorMode(RGB, 255,255,255);
  fill(255);
  text("Blu.", 10, 175);
  for( i=0; i<256; i = i+5) {
    bg = color(0,0,i);
    fill(bg);
    rect(40+i/5*10, 160, 10, 20);
  }
}
