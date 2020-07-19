var x = parseInt(prompt());
console.log(addodd(x));

//add your addodd code here:
function addodd(x) {
    if (x === 0){
    return 0;
    } else if (x === 1) {
    return 1;
    } else if (x%2 === 1){
    return x + addodd(x-2);
    } else if (x%2 === 0){
    return x-1 + addodd(x-2);
    }
}
