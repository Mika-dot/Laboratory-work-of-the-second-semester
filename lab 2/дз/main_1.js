function absValue (adb = "Давай заного"){
    if(typeof adb === "string"){
        return "Давай заного";
    }

    if(Number(adb) < 0){
        return Number(adb) * (-1);
    }else{
        return Number(adb);
    }  
}

console.log(absValue());