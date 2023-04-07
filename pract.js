function findFourthIndex(array) {
    let i = 0;
  
    while (i < array.length) {
      if (i === 4) {
        break;
      }
      console.log(array[i]);
      i++;
    }
    
}
let Mynum=[3,4,5,6,7,8]  
findFourthIndex(Mynum)
 
function logFruits(array) {
    for (let i = 0; i < array.length; i++) {
      if (i === 2) {
        continue;
      }
      console.log(array[i]);
    }
  }
  const fruits = ['apple', 'plum', 'banana', 'strawberries', 'kiwi'];
  logFruits(fruits);
    