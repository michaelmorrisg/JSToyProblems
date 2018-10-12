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