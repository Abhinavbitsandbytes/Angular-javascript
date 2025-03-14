sum(5)(10)(7)(3)

function sum(a){
    return function(b){
        return function(c){
            return function(d){
                console.log(a+b+c+d);
            }
        }
    }
}

// ----------------------------------------------------

console.log(sum2(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)());
function sum2(a){
    return function(b){
        if(b){
            return sum2(a+b);
        }
        return a;
    }
}

