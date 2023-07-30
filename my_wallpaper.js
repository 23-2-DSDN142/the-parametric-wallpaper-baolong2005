//your parameter variables go here!
let circle_posX = 100;
let circle_posY = 100;
var circle_scaleW = 100;
var circle_scaleH = 100;

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
  background(232, 224, 209); // Light orange background
  
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 
  strokeWeight(5)
  stroke(255, 149, 0) // Orange
  fill(245, 234, 186) // Orange inner color
    //Orange
  circle(circle_posX,circle_posY,circle_scaleW,circle_scaleH);
  strokeWeight(1);
  fill(255, 149, 0) // Orange
  arc(circle_posX,circle_posY,circle_scaleW - 10,circle_scaleH - 10,0,67);
  arc(circle_posX,circle_posY,circle_scaleW - 10,circle_scaleH - 10,72,139);
  arc(circle_posX,circle_posY,circle_scaleW - 10,circle_scaleH - 10,144,211);
  arc(circle_posX,circle_posY,circle_scaleW - 10,circle_scaleH - 10,216,283);
  arc(circle_posX,circle_posY,circle_scaleW - 10,circle_scaleH - 10,288,355);

  fill(252, 163, 38);  
  arc(circle_posX,circle_posY,circle_scaleW - 20,circle_scaleH - 20,0,67);
  arc(circle_posX,circle_posY,circle_scaleW - 20,circle_scaleH - 20,72,139);
  arc(circle_posX,circle_posY,circle_scaleW - 20,circle_scaleH - 20,144,211);
  arc(circle_posX,circle_posY,circle_scaleW - 20,circle_scaleH - 20,216,283);
  arc(circle_posX,circle_posY,circle_scaleW - 20,circle_scaleH - 20,288,355);
  fill(245, 234, 186); 
  stroke(252, 163, 38);
  circle(circle_posX,circle_posY,15,15);

  //strokeWeight(0);
  //ellipse(110,90,10,5);
  
  

 
}
