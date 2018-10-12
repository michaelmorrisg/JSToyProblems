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