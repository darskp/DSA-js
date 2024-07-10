const arr = [2, 4, 5,5, 12,12];


let result=arr.reduce((prev,item,index)=>{
    if(item>prev.first_largest){
        prev.second_largest=prev.first_largest
        prev.first_largest=item;
    }else if(prev.first_largest!==item && num>prev.second_largest){
        prev.second_largest=item;
    }
    return prev;
},{
    first_largest:-Infinity,
    second_largest:-Infinity
})
console.log(result);


// //answer is  5
let first_largest=-Infinity;
let second_largest=-Infinity;

for(let num of arr){
    if(num>first_largest){
        second_largest = first_largest;
        first_largest=num;
    }else if(num!==first_largest && num>second_largest){
        second_largest=num;
    }
}

console.log(first_largest);
console.log(second_largest);