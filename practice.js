// console.log("hello");
// let str="hello";

// rev=(str)=>{
// return str.split('').reverse().join('')
// }

// console.log(rev(str))


function manualReverseOptimized(str) {
  const chars = new Array(str.length); // preallocate array
  for (let i = 0; i < str.length; i++) {
    chars[i] = str[str.length - 1 - i];
  }
  return chars
}

function countOccurrences(arr) {
  return arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
}

occ=(arr)=>{
 return arr.reduce((a,c)=>{
a[c]=(a[c] || 0)+1;
return a
 },{})
}
// console.log(occ(['a','b','a','c','b','a']));

function countOccurrencesManual(arr) {
  const counts = {}; // object to store counts

  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    if (counts[val]) {
      counts[val] += 1;
    } else {
      counts[val] = 1;
    }
  }

  return counts;
}

console.log(countOccurrencesManual(['a','b','a','c','b','a']));


// console.log(manualReverseOptimized("hello")); // "olleh"