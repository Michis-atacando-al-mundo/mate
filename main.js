 let contar,num, msg="";
 let contador, prefijjo, producto;
 
 let max, par=0;

 function ejecutar(){
   document.getElementById("resultado").innerHTML="";
    var num =document.getElementById("numero").value;
    for(contar =1; contar < num; contar++ )
    {
msg += contar+  ","; 
    }
    msg += contar;
        document.getElementById("resultado").innerHTML=msg;
   }



   function ejecutar2(){
      document.getElementById("resultado").innerHTML="";
    var num =document.getElementById("numero").value;
    for(contar =num; contar > 0; contar-- )
    {
msg += contar+  ","; 
    }
    msg += contar;
        document.getElementById("resultado").innerHTML=msg;
   } 

function borrar() {
    document.getElementById("resultado").innerHTML="";
    document.getElementById("numero").value="";
}



function multi(){
   document.getElementById("resultado").innerHTML="";
    var num =document.getElementById("numero").value;
    prefijo = num + " X ";
    for(contar =1; contar <= 10; contar++ )
    {
      producto = num*contar;
msg += prefijo + contar + "="+producto+"<br>";
   }
    
        document.getElementById("resultado").innerHTML="Tabla del "+num + "<br>"+msg;
   } 

   function pares(){
      document.getElementById("resultado").innerHTML="";
    var num =document.getElementById("numero").value;
    for(contar = 1; par < num; contar ++ )
    {
msg += par+  "\n";
par = contar*2; 
    }
        document.getElementById("resultado").innerHTML=msg;
   } 
   
