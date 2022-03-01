function absValue (adb = "Давай заново"){
    if(typeof adb === "string"){
        return "Давай заново";
    }

    if(Number(adb) < 0){
        return Number(adb) * (-1);
    }else{
        return Number(adb);
    }  
}

console.log(absValue());
