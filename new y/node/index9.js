const code=require('./code')
let arr=[4,1,6,3,4,89,0];
console.log(code.xyz())
const result=arr.filter((item)=>{
    return item>4
});
console.warn(result);