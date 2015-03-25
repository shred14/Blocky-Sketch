function createSketchPad() {
  destroyBlocks();
  var squares_per_side = prompt("How many squares per side would you like?");

  $button = $('button');
  
  if($button.text() === 'Build') {
    $button.text('Build Again');
  }

  constructSketchPad(squares_per_side);
}

function constructSketchPad(squares_per_side) {
  var $sketchpad = $('#sketchpad');
  var height  = ($sketchpad.height() - (2 * squares_per_side) ) / squares_per_side;
  var width   = ($sketchpad.width() - (2 * squares_per_side) ) / squares_per_side;

  var number_of_blocks = squares_per_side * squares_per_side;
  for (currentRow = 0; currentRow < number_of_blocks; currentRow++) {
    createDiv(height, width);
  }
}

function createDiv(block_height, block_width) {
  var $block = $('<div></div>');
  $block.addClass('block');
  $block.width(block_width);
  $block.height(block_height);
  
  $block.mouseenter(function() {
      $(this).toggleClass('sketched');
  });

  $block.appendTo($('#sketchpad'))
}

function destroyBlocks() {
  $('.block').remove();
}