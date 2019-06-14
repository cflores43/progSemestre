let cubo = function (list){
    return list.map(function(number) {
        return number*number*number;
    });
};
let a= [5,7,3,5,1];
console.log(cubo(a));
