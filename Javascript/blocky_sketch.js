function createSketchPad() {
  destroyBlocks();
  var squares_per_side = prompt("How many squares per side would you like?");

  if(squares_per_side < 2) {
    alert("Your input was not valid! Using a default of 16 instead");
    squares_per_side = 16;
  }

  $button = $('button');
  
  if($button.text() === 'Build') {
    $button.text('Build Again');
  }

  constructSketchPad(squares_per_side);
}

function constructSketchPad(squares_per_side) {
  var $sketchpad = $('#sketchpad');
  var height  = ($sketchpad.height()) / squares_per_side;
  var width   = ($sketchpad.width()) / squares_per_side;

  var number_of_blocks = squares_per_side * squares_per_side;
  var size = width < height ? width : height;

  //to suit the squares
  $sketchpad.width((size * squares_per_side ));
  $sketchpad.height((size * squares_per_side));

  for (count = 0; count < number_of_blocks; count++) {
    createDiv(size);
  }
}

function createDiv(block_size) {
  var $block = $('<div></div>');
  $block.addClass('block');
  $block.width(block_size);
  $block.height(block_size);
  
  $block.mouseenter(function() {
      $(this).toggleClass('sketched');
  });

  $block.appendTo($('#sketchpad'));
}

function destroyBlocks() {
  $('.block').remove();
}