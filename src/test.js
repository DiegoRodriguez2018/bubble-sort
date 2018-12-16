
const dataNumber = 10;
let data = [];
let dataSet = []; //array of arrays

for (let index = 0; index <= dataNumber; index++) {
    data.push(index);
  }


function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

data = shuffle(data);
console.log('data',': ', data);

dataSet.push(data.slice())
console.log('dataSet',': ', dataSet);

var length = data.length;
//Number of passes
for (var i = 0; i < length; i++) { 
    //Notice that j < (length - i)
    for (var j = 0; j < (length - i - 1); j++) { 
        //Compare the adjacent positions
        if(data[j] > data[j+1]) {
            //Swap the numbers
            var tmp = data[j];  //Temporary variable to hold the current number
            data[j] = data[j+1]; //Replace current number with adjacent number
            data[j+1] = tmp; //Replace adjacent number with current number
            
            console.log('data',': ', data);
            
            dataSet.push(data.slice());
            // console.log('dataSet',': ', dataSet);

          }
    }        
}

console.log("--------------------------");

console.log('dataSet',': ', dataSet);
