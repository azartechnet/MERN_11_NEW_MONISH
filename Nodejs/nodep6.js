var fs=require('fs')
//Synchrous read
var data=fs.readFileSync('f1.txt','utf8')
console.log(data.toString())

//Asynchrous read
fs.readFile('f1.txt','utf-8',function(err,data){
    if(err)
        console.log(err)
    else
    console.log(data)
})