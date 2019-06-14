var n=20; //número de filas  
 var texto='';  
 //creamos las matrices A(n) y B(n)  
 var A=new Array(n);   //vector previo  
 var B=new Array(n);   //vector nuevo  
 //Reinicializar a 0 vector A(n)  
 for(var k=0;k<=n;k++){  
  A[k]=0;  
 }   
 A[1]=1; 
 texto=A[1]+'<br>';       
 for(var i=2;i<=n;i++){    
  for(var j=1;j<=i;j++){   
   B[j]=A[j-1]+A[j];    
   texto+=B[j]+" ";     
  }   
  for(j=1;j<=i;j++){  
   A[j]=B[j];       
  }  
 texto+= "<br>";     
 }
 document.getElementById("triangulo").innerHTML = texto;