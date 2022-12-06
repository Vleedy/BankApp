export function calculatingTerms(obj) {
    if (obj.num==obj.id) {
        return obj.value
    } else if(obj.id!=0) {
        return (obj.value/obj.defaultValue*obj.needCur).toFixed(2)
    } else return (obj.value*obj.defaultValue*obj.needCur).toFixed(2)
}


