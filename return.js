function bringSingaar(money) {
  var singaraPriced = 10;
  var quantity = money / singaraPriced;
  return quantity;
}

var myTaka = 150;
var singaras = bringSingaar(myTaka);
console.log("Eating singara:", singaras);
