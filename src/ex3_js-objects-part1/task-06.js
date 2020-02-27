function deepClone(obj) {
    let clone = {};
    if(Array.isArray(obj)){
    	clone=[]
    } 
    for (let key in obj) {
        if (typeof obj[key] === "object") {
                clone[key] = deepClone(obj[key]);
        } else {
            clone[key] = obj[key];
        }
    }  
    return clone;
}
module.exports=deepClone