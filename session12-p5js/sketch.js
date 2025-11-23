var count = 0;
var count1 = 0;

function setup() {
  createCanvas(1290,800);
}

function draw() {
  background(0,0,0);
  
  let offset = 280;
  let offset1= 520;
  let shiftY = 450;
  
   fill(random(255), 0, 0); 
  ellipse(10+ count, random(100), 100, 100);
  
   fill(0, random(150), 0); 
  ellipse(10+ count1, (300), random(150), 150);
  
   fill(0,0 , random(255));
  ellipse(10+ count1, (200), (150), random(150));
  
  fill(255, 0, 255);
  ellipse(10 + count, random(300),random(30),random(30));

  // side by side//
  
  fill(random(255), 0, 0);
  ellipse(offset + 10 + count, random(100), 100, 100);

  fill(0, random(150), 0);
  ellipse(offset + 10 + count1, 300, random(150), 150);

  fill(0, 0, random(255));
  ellipse(offset + 10 + count1, 200, 150, random(150));

  fill(255, 0, 255);
  ellipse(offset + 10 + count, random(300), random(30), random(30));

  fill(255, 0, 255);
  ellipse(10 + count, random(300),random(30),random(30));

  //2nd side by side//
  
  fill(random(255), 0, 0);
  ellipse(offset1 + 10 + count, random(100), 100, 100);

  fill(0, random(150), 0);
  ellipse(offset1 + 10 + count1, 300, random(150), 150);

  fill(0, 0, random(255));
  ellipse(offset1 + 10 + count1, 200, 150, random(150));

  fill(255, 0, 255);
  ellipse(offset1 + 10 + count, random(300), random(30), random(30));
  
  //up and down//

  fill(random(255), 0, 0); 
  ellipse(10 + count, random(100) + shiftY, 100, 100);

  fill(0, random(150), 0); 
  ellipse(10 + count1, 300 + shiftY, random(150), 150);

  fill(0, 0, random(255));
  ellipse(10 + count1, 200 + shiftY, 150, random(150));

  fill(255, 0, 255);
  ellipse(10 + count, random(300) + shiftY, random(30), random(30));
  
  //2nd up and down//
  fill(random(255), 0, 0); 
  ellipse(offset + 10 + count, random(100) + shiftY, 100, 100);

  fill(0, random(150), 0); 
  ellipse( offset + 10 + count1, 300 + shiftY, random(150), 150);

  fill(0, 0, random(255));
  ellipse(offset + 10 + count1, 200 + shiftY, 150, random(150));

  fill(255, 0, 255);
  ellipse(offset + 10 + count, random(300) + shiftY, random(30), random(30));

  //3rd up and down//
fill(random(255), 0, 0); 
  ellipse(offset1 + 10 + count, random(100) + shiftY, 100, 100);

  fill(0, random(150), 0); 
  ellipse( offset1 + 10 + count1, 300 + shiftY, random(150), 150);

  fill(0, 0, random(255));
  ellipse(offset1 + 10 + count1, 200 + shiftY, 150, random(150));

  fill(255, 0, 255);
  ellipse(offset1 + 10 + count, random(300) + shiftY, random(30), random(30));


// loop and repeat//
  count++;
  count1++;
  
  if (count > width) {
    count = 3;
  }

  if (count1 > width) {
    count1 = 3;
  }
}
