
function deepCopy(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj; // primitive or function
  }
  if (obj instanceof Date) {
    return new Date(obj.getTime()); // copy date
  }
    if(Array.isArray(obj)){
      return obj.map((item)=>deepCopy(item));
  }
  const copiedObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copiedObj[key] = deepCopy(obj[key]);
    }
  }
  return copiedObj;
}



// if (Array.isArray(obj)) {
//   const copiedArray = [];
//   for (let i = 0; i < obj.length; i++) {
//     copiedArray.push(deepCopy(obj[i])); // deep copy each item and push to new array
//   }
//   return copiedArray;
// }




// -----------------------------------------
// removing circular reference using map

function deepCopy(obj, seen = new Map()) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (typeof obj === 'function') {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  if (seen.has(obj)) {
    return seen.get(obj); // return the reference of the already copied object
  }

  let copy = Array.isArray(obj) ? [] : {};
  seen.set(obj, copy);

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key], seen);
    }
  }

  return copy;
}
























// -------------------------------------
// after removing circular reference using weakmap

function deepCopy(obj, seen = new WeakMap()) {
  if (obj === null || typeof obj !== 'object') {
    return obj; // primitive, null, or undefined
  }

  if (typeof obj === 'function') {
    return obj; // copy function by reference
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime()); // copy date
  }

  if (seen.has(obj)) {
    return seen.get(obj); // circular reference
  }

  if (Array.isArray(obj)) {
    const arrCopy = [];
    seen.set(obj, arrCopy);
    for (let i = 0; i < obj.length; i++) {
      arrCopy[i] = deepCopy(obj[i], seen);
    }
    return arrCopy;
  }

  const objCopy = {};
  seen.set(obj, objCopy);
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      objCopy[key] = deepCopy(obj[key], seen);
    }
  }

  return objCopy;
}








// -------------------------------------------------------------

// https://chatgpt.com/c/68d56d34-0f1c-8320-87e9-beef1973e3fe  (all about json.stringify)

// JSON.stringify polyfill

function jsonStringify(val) {
  if (val === null) return "null";
  if (typeof val === "string") return `"${val}"`;
  if (typeof val === "number") return String(val);
  if (typeof val === "boolean") return val ? "true" : "false";
  if (typeof val === "undefined" || typeof val === "function") return;

  if (Array.isArray(val)) {
    let arrResult = [];
    for (let i = 0; i < val.length; i++) {
      arrResult.push(jsonStringify(val[i]));
    }
    return `[${arrResult.join(",")}]`;
  }

  if (typeof val === "object") {
    let objResult = [];
    for (let key in val) {
      if (val.hasOwnProperty(key)) {
        objResult.push(`"${key}":${jsonStringify(val[key])}`);
      }
    }
    return `{${objResult.join(",")}}`;
  }
}

