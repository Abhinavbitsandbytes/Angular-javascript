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

// -----------------------------------------------------------------

function rev(str) {
    let charArr = str.split("");
    // Step 1: Reverse the entire character array
    revString(charArr, 0, charArr.length - 1);
    let start = 0;
    for (let end = 0; end <= charArr.length; end++) {
        // When space or end of array is reached
        if (end === charArr.length || charArr[end] === ' ') {
            // Reverse the individual word
            revString(charArr, start, end - 1);
            start = end + 1;
        }
    }
    return charArr.join("");
}

function revString(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

console.log(rev("My Name is Khan"));  // Output: "Khan is Name My"



