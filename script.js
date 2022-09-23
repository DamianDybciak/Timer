"use strict";


let div = document.getElementById("stoper");
let akcje = document.getElementById("akcje");
let paused = true;
let sek = 0;
let mSEk = 0;
let interval=setInterval(()=>{
    
    div.innerHTML = "0"+sek+":0"+mSEk;
    akcje.innerHTML = "<ol>Możliwe operacje:<li>SPACE - Start</li></ol>"; 
   
    

  
},10);




document.body.addEventListener("keydown", (event)=>{
    //console.log(paused);   Sprawdzanie statusu stopera w konsoli  
    if(event.code==="Space"){
        clearInterval(interval);
        if(paused){
            //wznów
            active();
            paused = false;
            akcje.innerHTML="<ol>Możliwe operacje:<li>ESC - Reset</li><li>SPACE - Zatrzymanie</li></ol>";  
           

        }else{
            //zatrzymaj
            
            if(sek>9){
                div.innerHTML = sek+":"+mSEk;
            }else if (mSEk<10){
                div.innerHTML = "0"+sek+":"+"0"+mSEk;
            
            }else{
                div.innerHTML = "0"+sek+":"+""+mSEk;
            }
            paused = true;
            akcje.innerHTML = "<ol>Możliwe operacje:<li>ESC - Reset</li><li>SPACE - Wznowienie</li></ol>"; 
           

        }
     
    }
     else if(event.code==="Escape"){
         //wyzeruj
         deactivated();
         akcje.innerHTML= "<ol>Możliwe operacje:<li>SPACE - Start</li></ol>";
         paused = true;
        
       
     }
});


function active(){

    interval=setInterval(()=>{
        mSEk+=1;
        if(mSEk===60){
            sek+=1;
            mSEk = 0;
        }
        
        div.innerHTML = "0"+sek+":"+mSEk;
        if(sek>9){
            div.innerHTML = sek+":"+mSEk;
        }else if (mSEk<9){
            div.innerHTML = "0"+sek+":"+"0"+mSEk;
        
        }else{
            div.innerHTML = "0"+sek+":"+""+mSEk;
        }


    },10);
}


function deactivated(){
    clearInterval(interval);
    sek = 0;
    mSEk = 0;
    div.innerHTML = "0"+sek+":"+"0"+mSEk;
    

}
