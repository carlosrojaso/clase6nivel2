var myModule = (function () {
  var privateProperty = 10;

  var privateMethodOne = function () {
    // Algo
  };

  var privateMethodTwo = function () {
    // Algo
  };

  return {
    publicProperty: "foo",
    publicMethodOne: function () {
      //...
    },
    publicMethodTwo: function () {
      // Invocar método privado
      privateMethodOne();
    },
    publicMethodThree: privateMethodTwo //Alias de privateMethodTwo
  }
})();