var result 
 
var a= parseFloat( prompt("Enter the first number"));
zangvac1 = [], i = 1;
while(i < a) {
    if(a % i == 0) zangvac1.push(i);
    i = i + 1;
}




var b= parseFloat( prompt("Enter the second number"));
zangvac2 = [], i = 1;
while(i < b) {
    if(b % i == 0) zangvac2.push(i);
    i = i + 1;
}

alert("the firs nubers              " +
    zangvac1 + "," + a);


    alert("the second nubers        " +
    zangvac2 + "," + b); 




    for(let x = 0;x<zangvac1.length;x++) {
        for(let j=0;j<zangvac2.length;j++){
            if(zangvac1[x]==zangvac2[j]){

        
        result= zangvac1[x]

            }   
        }
    }




alert("ամենամեծ ընդհանուր բաժանարարը  "+result+"  է")   



  










