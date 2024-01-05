var doc = app.activeDocument;
var sel = doc.selection;
var selLen = sel.length;
var code = 'Coordinates:\n';
for (var i = selLen - 1; i >= 0; i--) {
  var pos = doc.convertCoordinate(sel[i].position, app.coordinateSystem, CoordinateSystem.ARTBOARDCOORDINATESYSTEM);
  code += 'x: ' + (pos[0] + (sel[i].width * .5)).toFixed(2) + ', y: ' + Math.abs((pos[1] - (sel[i].height * .5))).toFixed(2);
  code += '\n';
}
alert(code);