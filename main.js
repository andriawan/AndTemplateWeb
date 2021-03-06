/**
 * Muhammad Irwan Andriawan
 *
 * CP 
 * 089637755100
 * 
 * github 
 * github.com/andriawan
 * 
 * This script is aim to handle logic in Processing DOM object and
 * trigerring animation
 * 
 * 
 *
 */

// create namespace as blank object to
// avoid global variable polution
andriawan = {};
// tracking position
andriawan.position = 0;
// all DOM configuration
andriawan.items = [];
// set DOM object
andriawan.items[0] = {
  header: '<h1 class="anim header">Hello from Muhammad Irwan <span>Andriawan</span></h1>',
  author_id : '<p class="anim author" id="author-id">Press key left or right to perform animation </p>',
  btn_test : '<button class="btn-1 anim button1">Part 1</button>',
  btn_circle : '<a href="" class="circle anim button2"><div><i class="material-icons">play_circle_filled</i></div></a>',
  step : '<h2 class="anim step">1 of 3 <i class="fa fa-arrow-right" aria-hidden:"true"></i></span></h2>',
  activity : '<div class="activity anim act"><ul><li><i class="material-icons">forum</i> <span>200</span></li><li><i class="material-icons">remove_red_eye</i><span>1324</span></li><li><i class="material-icons">favorite</i><span>5646</span></li></ul></div>',
  img : '<img class="anim img" src="img/1.jpg">',
}

andriawan.items[1] = {
  header: '<h1 class="anim header">This is a sample page design by <span>Andriawan</span></h1>',
  author_id : '<p class="anim author" id="author-id">Press key Up or Down to perform animation </p>',
  btn_test : '<button class="btn-1 anim button1">Part 2</button>',
  btn_circle : '<a href="" class="circle anim button2"><div><i class="material-icons">play_circle_filled</i></div></a>',
  activity : '<div class="activity anim act"><ul><li><i class="material-icons">forum</i> <span>4003</span></li><li><i class="material-icons">remove_red_eye</i><span>784</span></li><li><i class="material-icons">favorite</i><span>5647</span></li></ul></div>',
  img : '<img class="anim img" src="img/2.jpg">',
}

andriawan.items[2] = {
  header: '<h1 class="anim header">Hope it will be <span>Considered</span></h1>',
  author_id : '<p class="anim author" id="author-id">Muhammad Irwan Andriawan, 11 Dec 2017</p>',
  btn_test : '<button class="btn-1 anim button1">Part 3</button>',
  btn_circle : '<a href="" class="circle anim button2"><div><i class="material-icons">play_circle_filled</i></div></a>',
  activity : '<div class="activity anim act"><ul><li><i class="material-icons">forum</i> <span>884</span></li><li><i class="material-icons">remove_red_eye</i><span>909</span></li><li><i class="material-icons">favorite</i><span>66</span></li></ul></div>',
  img : '<img class="anim img"src="img/3.jpg">',
}

// init the DOM before triggering animation
andriawan.starterInit = function (position) {
  if(position == 0){
    $('.group').empty();
    $('#footer').empty();
    $('.group').append(andriawan.items[andriawan.position].header + andriawan.items[andriawan.position].author_id + andriawan.items[andriawan.position].btn_test + andriawan.items[andriawan.position].btn_circle);
    $('#footer').append(andriawan.items[andriawan.position].step + andriawan.items[andriawan.position].activity);
  }
}

// animate the page
andriawan.switch = function(position){
  $('.group').empty();
  $('#footer').empty();
  $('#image-container').empty();
  andriawan.items[position].step = '<h2 class="anim step">' + (position + 1) + ' of 3 <span><i class="fa fa-arrow-right" aria-hidden="true"></i></span></h2>';
  $('.group').append(andriawan.items[position].header + andriawan.items[position].author_id + andriawan.items[position].btn_test + andriawan.items[position].btn_circle);
  $('#footer').append(andriawan.items[position].step + andriawan.items[position].activity);
  $('#image-container').append(andriawan.items[position].img);
}

// Jquery init
$(document).ready(function () {
  andriawan.position = 0;
  andriawan.starterInit(andriawan.position);

})

// listen key for triggering animation
// key serverd is left, right, up and down key
$(document).keydown(function(e){
  if (e.keyCode == 37 || e.keyCode == 38) { 
    if(andriawan.position == 0){
      andriawan.position = 2;
      andriawan.switch(andriawan.position);
    }else{
      andriawan.position--;
      andriawan.switch(andriawan.position);
    }
  }

  if (e.keyCode == 39 || e.keyCode == 40) { 
    if(andriawan.position == 2){
      andriawan.position = 0;
      andriawan.switch(andriawan.position);
    }else{
      andriawan.position++
      andriawan.switch(andriawan.position);
    }
 }
});

// automating animation every 5 seconds
setInterval(function () {
  console.log('interval');
  if(andriawan.position == 2){
    andriawan.position = 0;
    andriawan.switch(andriawan.position);
  }else{
    andriawan.position++
    andriawan.switch(andriawan.position);
  }
}, 5000);