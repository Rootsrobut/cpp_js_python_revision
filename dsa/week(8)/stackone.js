// class StackUsingArray{
//     constructor(totalsize){
//         this.data=new Array(totalsize);
//         this.nextIndex=0;
//         this.capacity=totalsize;
//     }
//     size(){
//         return this.nextIndex;
//     }
//     isEmpty(){
//         return this.nextIndex==0;
//     }
//     push(element){
//         if(this.nextIndex==this.capacity){
//             console.log('stack is full');
//         }
//         this.data[this.nextIndex]=element;
//         this.nextIndex++;
       
//     }
//     pop(){
//         if(this.isEmpty()){
//             console.log("Stack is empty ");
//             return Number.MIN_SAFE_INTEGER;
//         }
//         this.nextIndex--;
//         return this.data[this.nextIndex];
//     }
//     top(){
//         if(this.isEmpty()){
//             console.log("Stack is empty ");
//             return Number.MIN_SAFE_INTEGER;
//         }
//         return this.data[this.nextIndex-1];
//     }
// }
// let s1=new StackUsingArray(5);
// s1.push(1);
// s1.push(2);
// s1.push(3);
// s1.push(4);
// s1.push(5);
// console.log(s1.top());
// console.log(s1.pop());
// console.log(s1.isEmpty());
// console.log(s1.size());


class StackUsingArray
{
    constructor(){
        this.data=new Array(4)
        this.nextIndex=0;
        this.capacity=4;
    }
	size()
	{
		return this.nextIndex;
	}
	isEmpty()
	{
		return this.nextIndex == 0;
	}
	push(element)
	{
		if (this.nextIndex == this.capacity)
		{
			const newData = new Array(2 * this.capacity);
			for (let  i = 0; i < this.capacity; i++)
			{
				newData[i] = this.data[i];
			}
			this.capacity *= 2;
			this.data = newData;
		}
		this.data[this.nextIndex] = element;
		this.nextIndex++;
	}
	pop()
	{
		if (this.isEmpty())
		{
			"Stack is empty ";
			return 0;
		}
		this.nextIndex--;
		return this.data[this.nextIndex];
	}
	top()
	{
		if (this.isEmpty())
		{
			"Stack is empty ";
			return 0;
		}
		return this.data[this.nextIndex - 1];
	}
};

let s1=new StackUsingArray(5);
s1.push(1);
s1.push(2);
s1.push(3);
s1.push(4);
s1.push(5);
console.log(s1.top());
console.log(s1.pop());
console.log(s1.isEmpty());
console.log(s1.size());

