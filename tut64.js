const fs =require('fs');
let text = fs.readFileSync("./dele.txt", "utf-8");
text = text.replace("hello", "hi");

console.log(text);
console.log("The content of the file is ");