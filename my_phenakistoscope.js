const SLICE_COUNT = 12;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image_sequence("Heartwing","png",4);
  pScope.load_image("Arrow","png");
  pScope.load_image("center","png");
}

function setup_layers(pScope){

  
new PLayer(null,254	,240	,240);

  var Wing = new PLayer(Heartwing);
  Wing.mode(RING);
  Wing.set_boundary (800,1000);

  var Filledheart = new PLayer(heart_f);
  Filledheart.mode(SWIRL(7));
  Filledheart.set_boundary(700,900);

  var Arrow = new PLayer(arrow);
  Arrow.mode(SWIRL(3));
  Arrow.set_boundary(200,800)

  var centre = new PLayer(center);
  centre.mode(RING);
  centre.set_boundary(0,1000);

  var effect = new PLayer(twinkle);
  effect.mode(SWIRL(10))
  effect.set_boundary(400,1000);
}

function Heartwing (x, y, animation, pScope){

scale(0.6)

pScope.draw_image_from_sequence("Heartwing",353,1350,animation.frame);

fill(	234,153,153)


}


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
    
    
    
    
  
  }

  function arrow(x, y, animation, pScope){
    
    scale(animation.wave(0.0001))
   
    pScope.draw_image("Arrow",x,y);
  }


   
  function center(x,y,animation,pScope){
    scale(4)
    pScope.draw_image("center",x,y,animation.frame*50);
   
  }


 function twinkle(x, y, animation, pScope){

  stroke(	234	,153	,153)

  scale(animation.wave(2))

  rotate(1000*animation.frame)
    
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

