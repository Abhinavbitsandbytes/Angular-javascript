let obj = {
    name: "abhinav",
    address: {
        permanent: {
            city:"Ballia",
            pin: "1234"
        },
        work: {
            city: "Bangalore",
            pin: "5678"
        }
    }
}
let ans={};

format(obj, "obj")

function format(obj, path){
    for(let item in obj){
        const key = path + "_" + item;
        if(typeof(obj[item])==='object'){
            format(obj[item], key);
        } else{
            ans[key]=obj[item];
        }

    }

}
console.log(ans);