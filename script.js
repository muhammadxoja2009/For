
let array = [2, 4, 9, 10, 45, 67, 8, 90];
console.log(array, 'boshlanishdagi array');


let juftArray = array.filter(function (son) {
    return son % 2 === 0;
});
console.log(juftArray, 'juft sonlarga ajratilgan array');