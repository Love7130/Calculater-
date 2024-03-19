let count=0;
const interval =setInterval(()=>{
    count++;
    console.log(`count ${count}`);
    if (count==3){
        console.log("execution stop after 3 time")
        clearInterval(interval);
    }  
},1000)