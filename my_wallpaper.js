//your parameter variables go here!
let isDay = false;
let OrangeSize  = 100;
let OrangePosX = 100;
let OrangePosY = 100;
let KiwiSize = 80;
let KiwiPosX = 120;
let KiwiPosY= 190;


function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
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
  } else{ 
    Kiwi(KiwiPosX - 30,KiwiPosY - 50,KiwiSize/1.25,KiwiSize/1.25);
    Kiwi(KiwiPosX + 40,KiwiPosY + 40,KiwiSize/1.25,KiwiSize/1.25);
  } 
  }


  //Orange(100,100,OrangeSize,OrangeSize);
function Orange(circle_posX,circle_posY,circle_scaleW,circle_scaleH)  {
  let Orange_color1 = color(255, 149, 0); // Original color | color(153, 31, 59) // Magenta color  
  let Orange_innercolor1 = color(245, 234, 186); // Original color | color(176, 48, 77) // Inner Magenta color 
  let Orange_lighterinnercolor1 = color(252, 163, 38); // Original color | color(212, 72, 104); // Lighter magenta color
  strokeWeight(5)
  stroke(Orange_color1) // Orange
  fill(Orange_innercolor1) // Orange inner color
  circle(circle_posX,circle_posY,circle_scaleW,circle_scaleH);
  strokeWeight(0.3);
  fill(Orange_color1) // Orange
  arc(circle_posX,circle_posY,circle_scaleW - 10,circle_scaleH - 10,0,67);
  arc(circle_posX,circle_posY,circle_scaleW - 10,circle_scaleH - 10,72,139);
  arc(circle_posX,circle_posY,circle_scaleW - 10,circle_scaleH - 10,144,211);
  arc(circle_posX,circle_posY,circle_scaleW - 10,circle_scaleH - 10,216,283);
  arc(circle_posX,circle_posY,circle_scaleW - 10,circle_scaleH - 10,288,355);

  fill(Orange_lighterinnercolor1);  // Lighter inner Orange
  arc(circle_posX,circle_posY,circle_scaleW - 20,circle_scaleH - 20,0,67);
  arc(circle_posX,circle_posY,circle_scaleW - 20,circle_scaleH - 20,72,139);
  arc(circle_posX,circle_posY,circle_scaleW - 20,circle_scaleH - 20,144,211);
  arc(circle_posX,circle_posY,circle_scaleW - 20,circle_scaleH - 20,216,283);
  arc(circle_posX,circle_posY,circle_scaleW - 20,circle_scaleH - 20,288,355);
  fill(Orange_innercolor1);
  strokeWeight(3); 
  stroke(Orange_lighterinnercolor1); //Lighter inner Orange
  circle(circle_posX,circle_posY,circle_scaleW/8,circle_scaleH/8); // Orange core
}



  //Kiwi(100,100,100,100);
function Kiwi(kiwi_posX,kiwi_posY,kiwi_scaleW,kiwi_scaleH){
  stroke(105, 70, 23) // dark brown
  fill(140, 86, 10) // brown
  circle(kiwi_posX,kiwi_posY,kiwi_scaleW,kiwi_scaleH); // Outer brown of the kiwi
  fill(50, 168, 64); // green
  circle(kiwi_posX,kiwi_posY,kiwi_scaleW - 10,kiwi_scaleH - 10); // Inner green of the kiwi
  strokeWeight(0);
  fill(232, 224, 209); // light orange for the core
  strokeWeight(0);
  ellipse(kiwi_posX,kiwi_posY,kiwi_scaleW/3.3,kiwi_scaleH/6.3); // Horizontal ellipse core
  ellipse(kiwi_posX,kiwi_posY,kiwi_scaleW/6.3,kiwi_scaleH/3.3); // Vertical ellipse core
  circle(kiwi_posX,kiwi_posY,kiwi_scaleW/6,kiwi_scaleH/6); // Kiwi core

  }

  
  

 

