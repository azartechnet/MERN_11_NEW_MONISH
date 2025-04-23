var f1=require('fs')
f1.readFile('f1.txt',function(err,data){
    if (err) throw err; console.log(data.toString());
    console.log("File read successfully.");
    console.log("Data length: " + data.length);
    console.log("File content: " + data.toString());
    console.log("End of file operations.");
    
})