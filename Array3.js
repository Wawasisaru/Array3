// Q1-Write a function that accepts an array of strings and console.logs 
// each element using a for loop.
function students(array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i])
    }
}
let array=["mercy","cynthia","saru","ann"]
students(array)
//Q2- Write a function t
// hat accepts an array of numbers and 
// uses the forEach() method to console.log each number multiplied by 2.
let myNums = [2,4,5,6,8]
myNums.forEach(num =>{
    multiply=num*2
    console.log(multiply)
})
// Q3-Write a function that takes in an array of numbers and 
// consoles the first four items multiplied by 8 and the last two added by 5. 
// Console the array with the new values
function arrNumber(arr1){
    for (let i=0;i<arr1.length; i++){
        if(i<4){
             arr1[i]*=8
        }
        else if(i>=arr1.length-2){
            arr1[i]+=5;
        }
    }
    console.log(arr1)
}
let arr1=[2,3,5,7,9,11,13,14]
arrNumber(arr1)


//  Q4-Write a function that takes in the following array and
//  use a while loop to iterate and break when the item is equal to the fourth index
// let arrNum = [1,2,3,4,5,6,7,8,9]
function number(array){
    let y = 0;
    while (y<array.length){
        if (y ===4){
           break; 
        }
        console.log(array[y]);
        y++;
    }
}
let arrNum = [1,2,3,4,5,6,7,8,9]
number(arrNum)
//Q5-Write a function that takes in a an array of strings and use a
//  continue statement when the item is at the second index
// let fruits= ['apple','plum','banana','strawberries','kiwi']
function fruitssweet(array){
    let y = 0;
    for (let i = 0; i < array.length; i++){
        if (i === 2) {
           continue; 
        }
        console.log(array[i]);
    }
}
let fruits=["apple","plum","banana","strawberries","kiwi"]
fruitssweet(fruits)