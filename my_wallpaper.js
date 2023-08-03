//your parameter variables go here!
let isDay = false;
let OrangeSize  = 100;
let OrangePosX = 100;
let OrangePosY = 100;
let KiwiSize = 100;
let KiwiPosX = 100;
let KiwiPosY= 100

//let orangeColor = fill(245, 234, 186);
function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  if(isDay){
  background(232, 224, 209); // Light orange background (day)
} else{
  background(112, 39, 115); // dark purple background (night)
}
}


function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  if(isDay){
  Orange(OrangePosX,OrangePosY,OrangeSize,OrangeSize);
  } else{Kiwi(KiwiPosX,KiwiPosY,KiwiSize,KiwiSize);}


}

  //Orange(100,100,OrangeSize,OrangeSize);
function Orange(circle_posX,circle_posY,circle_scaleW,circle_scaleH)  {
 
  strokeWeight(5)
  stroke(255, 149, 0) // Orange
  fill(245, 234, 186) // Orange inner color
  circle(circle_posX,circle_posY,circle_scaleW,circle_scaleH);
  strokeWeight(0.3);
  fill(255, 149, 0) // Orange
  arc(circle_posX,circle_posY,circle_scaleW - 10,circle_scaleH - 10,0,67);
  arc(circle_posX,circle_posY,circle_scaleW - 10,circle_scaleH - 10,72,139);
  arc(circle_posX,circle_posY,circle_scaleW - 10,circle_scaleH - 10,144,211);
  arc(circle_posX,circle_posY,circle_scaleW - 10,circle_scaleH - 10,216,283);
  arc(circle_posX,circle_posY,circle_scaleW - 10,circle_scaleH - 10,288,355);

  fill(252, 163, 38);  // Lighter inner Orange
  arc(circle_posX,circle_posY,circle_scaleW - 20,circle_scaleH - 20,0,67);
  arc(circle_posX,circle_posY,circle_scaleW - 20,circle_scaleH - 20,72,139);
  arc(circle_posX,circle_posY,circle_scaleW - 20,circle_scaleH - 20,144,211);
  arc(circle_posX,circle_posY,circle_scaleW - 20,circle_scaleH - 20,216,283);
  arc(circle_posX,circle_posY,circle_scaleW - 20,circle_scaleH - 20,288,355);
  fill(245, 234, 186);
  strokeWeight(3); 
  stroke(252, 163, 38); //Lighter inner Orange
  circle(circle_posX,circle_posY,circle_scaleW/8,circle_scaleH/8); // Orange core
}



  //Kiwi(100,100,100,100);
function Kiwi(kiwi_posX,kiwi_posY,kiwi_scaleW,kiwi_scaleH){
  stroke(105, 70, 23) // dark brown
  fill(140, 86, 10) // brown
  circle(kiwi_posX,kiwi_posY,kiwi_scaleW,kiwi_scaleH);
  fill(94, 214, 75); // light green
  circle(kiwi_posX,kiwi_posY,kiwi_scaleW - 10,kiwi_scaleH - 10);
  fill(232, 224, 209);
  strokeWeight(0);
  ellipse(kiwi_posX,kiwi_posY,kiwi_scaleW - 70,kiwi_scaleH - 95);
  ellipse(kiwi_posX,kiwi_posY,kiwi_scaleW - 95,kiwi_scaleH - 70);
  circle(kiwi_posX,kiwi_posY,kiwi_scaleW - 85,kiwi_scaleH - 85); // Kiwi core

  }

  
  

 

