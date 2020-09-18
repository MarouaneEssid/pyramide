function build(etage) {
  if (etage > 25 || etage < 1) {
    return 0;
  }
  for (var i = 0; i < etage; i++) {
    var triangle = "";
    for (var j = 1; j < etage - i; j++) {
      triangle += " ";
    }
    for (var k = 1; k <= 2 * i + 1; k++) {
      triangle += "#";
    }
    console.log(triangle);
  }
  return 1;
}

var input = prompt("nombre d'étages (0<n<26)");
var etage = Number.parseInt(input, 10);
if (!isNaN(etage)) {
  build(etage);
}
