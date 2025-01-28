const numbers = [1, 2, 3, 4];

const squared = numbers.map(x => x * x);
console.log(squared); 



const evens = numbers.filter(x => x % 2 === 0);
console.log(evens); 


const sum = numbers.reduce((acc, x) => acc + x, 0);
console.log(sum); 


const sorted = numbers.sort((a, b) => a - b);
console.log(sorted);

function customMap(arr,callback){
    let result=[];
    for(let a in arr){
        result.push(callback(arr[a],a,arr));
    }
    return result;
}

const customsquared = customMap(numbers, x => x * x);
console.log("Squared:", customsquared);


function customReduce(arr,callback,initalval){
    let acc=initalval!==undefined?initalval:arr[0];
    let startindex=initalval!==undefined?0:1;
    for(let i=startindex;i<arr.length;i++){
        acc=callback(acc,arr[i],i,arr)
    }
    return acc;
}
customReduce(numbers,(acc,x)=>acc+x,0);


function customFilter(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}


const cus_evens = customFilter(numbers, x => x % 2 === 0);
console.log(cus_evens)
