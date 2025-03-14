function deepCopy(obj, hash = new WeakMap()) {
    // Return primitive types as is
    if (obj === null || typeof obj !== "object") {
      return obj;
    }
  
    // Handle circular references by returning the cached copy
    if (hash.has(obj)) {
      return hash.get(obj);
    }
  
    // If the object is an array, copy each element
    if (Array.isArray(obj)) {
      const arrCopy = [];
      hash.set(obj, arrCopy);
      for (const value of obj) {
        arrCopy.push(deepCopy(value, hash));
      }
      return arrCopy;
    }
  
    // If the object is a function, return the function as is (functions are not copied deeply)
    if (typeof obj === "function") {
      return obj;
    }
  
    // Create a new object of the same prototype
    const copy = Object.create(Object.getPrototypeOf(obj));
    hash.set(obj, copy);
  
    // Copy each property recursively
    for (const key of Object.keys(obj)) {
      copy[key] = deepCopy(obj[key], hash);
    }
  
    return copy;
  }
  