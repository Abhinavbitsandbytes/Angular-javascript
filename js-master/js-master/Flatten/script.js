// let arr = [2,3, [4,5, [6,7]]];
// let ans=[];
// function flatten(arr){
//     for(let i=0; i<arr.length; i++){
//         if(Array.isArray(arr[i])){
//             flatten(arr[i])
//         }
//         else{
//             ans.push(arr[i]);
//         }
//     }
// }
// flatten(arr);
// console.log(ans)

// ---------------------------------------------------------------

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

let ans = {}
formatObj(obj, "obj")
function formatObj(obj, path){
    for(let item in obj){
        if(typeof(obj[item])==='object'){
            formatObj(obj[item], path + "_" + item)
        }
        else{
            ans[path + "_" + item] = obj[item];
        }
    }

}

console.log(ans)

// {
//     "obj_name": "abhinav",
//     "obj_address_permanent_city": "Ballia",
//     "obj_address_permanent_pin": "1234",
//     "obj_address_work_city": "Bangalore",
//     "obj_address_work_pin": "5678"
// }


