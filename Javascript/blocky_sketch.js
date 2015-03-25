
function createSketchPad(columns, rows) {
  var $sketchpad = $('#sketchpad');
  var height  = ($sketchpad.height() - (2 * rows) ) / rows;
  var width   = ($sketchpad.width() - (2 * columns) ) / columns;

  for (currentRow = 0; currentRow < rows; currentRow++) {
    for(currentColumn = 0; currentColumn < columns; currentColumn++) {
      createDiv(height, width);
    }
  }
}

function createDiv(block_height, block_width) {
  var $block = $('<div class=\'block\'></div>');
  $block.width(block_width);
  $block.height(block_height)
  $block.appendTo($('#sketchpad'))
}