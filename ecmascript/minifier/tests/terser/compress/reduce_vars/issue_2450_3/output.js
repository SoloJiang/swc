var x = (function () {
    function test() {
        return "foo";
    }
    return function () {
        return [1, test];
    };
})();
console.log(x()[1] === x()[1]);
