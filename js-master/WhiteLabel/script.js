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
