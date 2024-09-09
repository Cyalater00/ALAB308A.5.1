const str = "All programmers start with a hello World application!";

const regex1 = /hello/gi;

// Regex Methods
console.log(regex1.test(str)); 
console.log(regex1.exec(str)); 

// String method
console.log(str.match(regex1)); 
console.log(str.search(regex1)); 
console.log(str.replace(regex1, "Hi")); 
