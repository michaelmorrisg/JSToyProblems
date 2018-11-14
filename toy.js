//Super Basic Recursion Example

    function recursion(num,max){
        //start with base case
        if(num > max) return;
        console.log(num)
        //use function again (recursion)
        recursion(num +1, max)
}

recursion(2,15)

//

//Factorial Recursion
    function factorial (n) {
  if(n <= 1) return 1
  return n * factorial(n-1)
}

factorial(10)
//

    
/////bubblesort

function bubbleSort(nums){
    let swapped = true
    do{
      swapped = false
      for(let i = 0; i < nums.length; i++){
        if(nums[i] > nums[i+1]){
          let temp = nums[i]
          nums[i] = nums[i+1]
          nums[i+1] = temp
          swapped = true
        }
      }
  
    }while(swapped)
    return nums
  }
  
  bubbleSort([2,1,10,5,8,3,4])

  ////

  //Insertion Sort

  function insertionSort(nums){
    //Outer loop starts outside the 'sorted' part of the array
    for(let i = 1; i < nums.length; i++){
      //inner loop starts at 0 and then just compares the 'sorted' part of the array
      //to the num at index i to see where it should insert index i's value
      for(let j = 0; j < i; j++){
        if(nums[i] < nums[j]){
          let spliced = nums.splice(i,1)
          nums.splice(j,0,spliced[0])
        }
      }
    }
    return nums
  }
  
  insertionSort([100,4,3,6,8,10,2,1])

  //////

  //Closure

function mainFunction(array){
  let i =0
  function inner(){
    const element = array[i]
    i ++
    return element
  }
  return inner
}

const letsLog = mainFunction([1,2,3,4,5])

const first = letsLog()
console.log(first)

const second = letsLog()
console.log(second)

////

//6X6 array -- need to t or f if every column's numbers have same divisor and if every row's numbers have the same divisor

var example1 = [
  [33,33,33,33,33,32],
  [33,33,33,33,33,33],
  [66,66,66,66,66,66],
  [33,33,33,33,33,33],
  [66,66,66,66,66,66],
  [99,99,99,99,99,99]
]
var example2 = [
  [10,33,33,10,33,33],
  [33,33,33,33,33,33],
  [66,66,66,66,66,66],
  [33,33,33,33,67,33],
  [34,66,12,66,66,66],
  [99,99,99,45,99,99]
]

function solveSudoku(arr){
  let columnTotal = []
  let rowTotal = []
  //Column Test
  for(let i = 0; i < arr.length; i++){
    let tempArr = []
    //turns columns into rows for ease of working
    for(let j = 0; j < arr[i].length; j++){
      tempArr.push(arr[j][i])
    }
    //Finds common divisor from 2 to smallest number in column (now row)
    for(let k = 2; k <= Math.min(...tempArr); k++){
      let newArr = tempArr.filter(num => {
        return num % k === 0
      })
      //If it finds a common divisor it pushes to column total and exits the loop
      if(newArr.length === 6){
        columnTotal.push('passes')
        break
      }
    }
  }
  //Row Test
  for(let i = 0; i < arr.length; i ++){
    for(let k = 2; k <=Math.min(...arr[i]); k++){
      let newArr = arr[i].filter(num => {
        return num % k === 0
      })
      if(newArr.length === 6){
        rowTotal.push('passes')
        break
      }
    }
  }
  //if the lengths are both 6, the loop found a common divisor in every row and column
  if(rowTotal.length === 6 && columnTotal.length === 6){
      return true
  } else {
    return false
  }

}

solveSudoku(example1)
// solveSudoku(example2)