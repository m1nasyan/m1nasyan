var result 
 
var a= parseFloat( prompt("Enter the first number"));
ankap = [], i = 1;
while(i < a) {
    if(a % i == 0) ankap.push(i);
    i = i + 1;
}




var b= parseFloat( prompt("Enter the second number"));
vapsheankap = [], i = 1;
while(i < b) {
    if(b % i == 0) vapsheankap.push(i);
    i = i + 1;
}

alert("the firs nubers              " +
    ankap + "," + a);


    alert("the second nubers        " +
    vapsheankap + "," + b); 




    for(let x = 0;x<ankap.length;x++) {
        for(let j=0;j<vapsheankap.length;j++){
            if(ankap[x]==vapsheankap[j]){

        
        result= ankap[x]

            }   
        }
    }




alert("ամենամեծ ընդհանուր բաժանարարը  "+result+"  է")   



  










