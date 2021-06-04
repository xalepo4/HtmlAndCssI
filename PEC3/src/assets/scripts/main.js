/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+(function () {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
})();

+(function () {
  var blink = false;
  setInterval(function () {
    if (!blink) {
      blink = true;
      document.getElementById("cocktail-icon").style.color = "#F7FF01";
    } else {
      blink = false;
      document.getElementById("cocktail-icon").style.color = "#FF0101";
    }
  }, 300);
})();

