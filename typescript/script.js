// why typescript
var num = 4;
var word = "five";
console.log(word, num);
function add(num1, num2) {
    return num1 + num2;
}
add(num, 9);
var Duck = /** @class */ (function () {
    function Duck(id, name, nickName) {
        this.id = 4;
        this.id = id;
        this.name = name;
        this.nickName = nickName;
    }
    return Duck;
}());
var duck2 = new Duck(1, "Tom", "Marius");
function processDuck(duckObj) {
    console.log(duckObj.nickName);
}
processDuck(duck2);
