const SLICE_COUNT = 12;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image_sequence("Heartwing","png",4);
  pScope.load_image("Arrow","png");
  pScope.load_image("3","png");
  pScope.load_image("z","png");
}

function setup_layers(pScope){

  //new PLayer(null, 	234	,153,	153);  //lets us draw the whole circle background, ignoring the boundaries
new PLayer(null,254	,240	,240);

  var Heart_Wing = new PLayer(Heartwing);
  Heart_Wing.mode(RING);
  Heart_Wing.set_boundary (800,1000);
  //var layer1 = new PLayer(faces);
  //layer1.mode( RING );
  //layer1.set_boundary( 800, 1000 );

  var layer2 = new PLayer(heart_f);
  layer2.mode(SWIRL(7));
  layer2.set_boundary(700,900);

  var layer3 = new PLayer(arrow);
  layer3.mode(SWIRL(3));
  layer3.set_boundary(200,800)

  var layer4 = new PLayer(heart_sequence);
  layer4.mode(RING);
  layer4.set_boundary(0,1000);

  var layer5 = new PLayer(center);
  layer5.mode(RING);
  layer5.set_boundary(0,1000);


  var layer7 = new PLayer(twinkle);
  layer7.mode(SWIRL(10))
  layer7.set_boundary(400,1000);
}

function Heartwing (x, y, animation, pScope){
scale(0.6)
  pScope.draw_image_from_sequence("Heartwing",353,1350,animation.frame);

fill(	234,153,153)


}
//function faces(x, y, animation, pScope){
  
  //scale(animation.frame*30);

  //ellipse(0,0,50,50); // draw head
  //fill(30);
  //ellipse(-10,-10,10,10); //draw eye
  //ellipse(10,-10,10,10); // draw eye
  //arc(0,10,20,10,0,180); // draw mouth

//}


  function heart_f(x, y, animation, pScope){
    
    fill(	203,	80,	80)
    stroke(	203,	80,	80)
    let StartColor = color(234,153,153)
    let endColor = color(115,84,203)
    let animatingColor = lerpColor(StartColor, endColor, animation.wave(1))
    scale(animation.wave(0.3));
    rect(-2,-200,5,5)
    rect(-7,-205,5,5)
    rect(3,-205,5,5)
    rect(-12,-210,5,5)
    rect(-17,-215,5,5)
    rect(-22,-220,5,5)
    rect(-22,-225,5,5)
    rect(-22,-230,5,5)
    rect(-17,-235,5,5)
    rect(-12,-235,5,5)
    rect(-7,-235,5,5)
    rect(-12,-240,5,5)
    rect(-2,-230,5,5)
    rect(3,-235,5,5)
    rect(8,-235,5,5)
    rect(8,-240,5,5)
    rect(13,-235,5,5)
    rect(18,-230,5,5)
    rect(18,-225,5,5)
    rect(18,-220,5,5)
    rect(13,-215,5,5)
    rect(8,-210,5,5)
    rect(3,-210,5,5)
    rect(-2,-210,5,5)
    rect(-7,-210,5,5)
    rect(-2,-215,5,5)
    rect(-2,-205,5,5)
    rect(-7,-215,5,5)
    rect(-12,-215,5,5)
    rect(3,-215,5,5)
    rect(8,-215,5,5)
    rect(8,-220,5,5)
    rect(13,-220,5,5)
    rect(3,-220,5,5)
    rect(-2,-220,5,5)
    rect(-7,-220,5,5)
    rect(-12,-220,5,5)
    rect(-17,-220,5,5)
    rect(-17,-225,5,5)
    rect(-12,-225,5,5)
    rect(-7,-225,5,5)
    rect(-2,-225,5,5)
    rect(3,-225,5,5)
    rect(8,-225,5,5)
    rect(13,-225,5,5)
    rect(13,-230,5,5)
    rect(8,-230,5,5)
    rect(3,-230,5,5)
    rect(-7,-230,5,5)
    rect(-12,-230,5,5)
    rect(-17,-230,5,5)
    
    
    
    
    
    
    // use this on firework//add lerp color
  }

  function arrow(x, y, animation, pScope){
    //stroke(241,	194,	50)
    //fill(	241,	194,	50)
    scale(animation.wave(0.0001))
    //ellipse(-40,-200,70,70)
    pScope.draw_image("Arrow",x,y);
  }

  function heart_sequence(x,y,animation,pScope){
    scale(0.33)
  pScope.draw_image("3",0,0,animation.frame);
   
  }
  function center(x,y,animation,pScope){
    scale(4)
    pScope.draw_image("z",x,y,animation.frame*50);
   
  }


function twinkle(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  //let angleOffset = (360 / SLICE_COUNT) / 2
  //let backgroundArcStart = 270 - angleOffset;
  //let backgroundArcEnd = 270 + angleOffset;

  //fill(66, 135, 245)
  //arc(x,y,800,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background
  stroke(	234	,153	,153)
  fill(	255,	229,	153)
  scale(animation.wave(2))
  rotate(1000*animation.frame)
  //ellipse(190,-600-animation.wave(1)*70,30,30) // .wave is a cosine wave btw
    
  fill(	234,153,153)
  rect(-2,-200,5,5)
    rect(-7,-205,5,5)
    rect(3,-205,5,5)
    rect(-12,-210,5,5)
    rect(-17,-215,5,5)
    rect(-22,-220,5,5)
    rect(-22,-225,5,5)
    rect(-22,-230,5,5)
    rect(-17,-235,5,5)
    rect(-12,-235,5,5)
    rect(-7,-235,5,5)
    rect(-12,-240,5,5)
    rect(-2,-230,5,5)
    rect(3,-235,5,5)
    rect(8,-235,5,5)
    rect(8,-240,5,5)
    rect(13,-235,5,5)
    rect(18,-230,5,5)
    rect(18,-225,5,5)
    rect(18,-220,5,5)
    rect(13,-215,5,5)
    rect(8,-210,5,5)
}

