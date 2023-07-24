//your parameter variables go here!
let cir_width  = 120;
let cir_height = cir_width;
//let Night_background = color(233, 245, 2);

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(45, 12, 48); // dark purple 
  
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 
  fill(233, 245, 2); // Yellow
  strokeWeight(1);
  stroke(233, 245, 2); // skyline color
  line(0,150,200,150); // skyline
  strokeWeight(0);
  arc(100,150,cir_width,cir_height,180,360); // moon
  strokeWeight(3);
  stroke(233, 245, 2);
  line(50,158,150,158);
  strokeWeight(2);
  line(70,166,130,166);
  strokeWeight(2);
  line(90,174,110,174);


 
}
