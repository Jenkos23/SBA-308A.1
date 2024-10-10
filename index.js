// Part 1: Stack overFlow
let globalx = 0;

    function letsIncrement(){
        try {
            
            globalx++;
            console.log(`globalx value: ${globalx} `);
            
           
        
            //call the function recursively
            letsIncrement();
        } catch (error) {
            console.error(`Error:${error.message}`)
            console.log(`globalx value: ${globalx} `);
            
        }
       
    
    
    }



//Initizalize the recursive call
letsIncrement();


 //part 2:  Trampolines
    //A fuction that flattens an array of a nested arrays
    function flaArray(n, a= 1){
        if (n ===0) return a;
        return () => flaArray(n-1, n*a);

    }

    console.log(flaArray())





    //part 3: Deffered Execution:
    const defExec = document.getElementById('simpleHTML');
    function addPrimeNum(n){
      primeNum = [];
      initialNum = 2;


      function checkPrime() {
        // for (let z = initialNum; z <= n; z++)
            if (initialNum > n){ // Alert after all numbers have been checked
                alert("Calculation is finished! We have all the Prime Numbers listed.");
                return;
            }

            let isPrime = true;


         for (let x = 2; x * x <= initialNum; x++){
            if (initialNum % x === 0){
                isPrime = false;
                break;
            }
        
        }
        if (isPrime){
            primeNum.push(initialNum);
        }

        //update the HTML with the current list of prime numbers
        defExec.innerHTML = primeNum.join(', ');


        //increment the initialNum to the next
        initialNum++;
    

        //use setTimeout to call the next check 
        setTimeout(checkPrime,1000);
        
    

      }
      checkPrime();
       

    

    }

addPrimeNum(10000);
    

