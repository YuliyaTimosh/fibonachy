let usernumber = parseFloat(prompt('Enter the number'));

let fib = [];
fib[0] = 1;
fib[1] = 1;

for (let i = 2; i <usernumber; i++) {
    
    fib[i] = fib[i - 2] + fib[i - 1];  
    
    }
 
 alert(fib[usernumber - 1]);
 
 





