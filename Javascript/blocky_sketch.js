
function createSketchPad(columns, rows) {
  for (currentRow = 0; currentRow < rows; currentRow++) {
    for(currentColumn = 0; currentColumn < columns; currentColumn++) {
      createDiv();
    }
  }
}

function createDiv() {
  var $block = $('<div class=\'block\'></div>');
  $block.appendTo($('#sketchpad'))
}