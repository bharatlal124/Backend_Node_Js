//export with simple export without module
exports.sum= (x,y)=>{
    return x+y;
}

function div(x,y){
    return x/y;
}

//rexport as property of sum
// module.exports.sum = (x,y)=>{
//     return x+y;
// }