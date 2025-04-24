const intervalid=setInterval(()=>{
    console.log("Intervel")
},2000)
setTimeout(()=>{
    clearInterval(intervalid)
    console.log("Intervalcleared")
},4000)
