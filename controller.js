window.addEventListener("load",startGame);

function startGame(){
   document.querySelector("#start").addEventListener("click",bindEvents);
}

var buttonArray;
function bindEvents(){
    document.querySelector("#start").innerHTML="Player A turn";
    document.querySelector("#start").removeEventListener("click",bindEvents);
    buttonArray=document.getElementsByTagName("button"); 
    Array.prototype.forEach.call(buttonArray,(button)=>button.addEventListener("click",isZeroOrX));    
}

var isXorZeroFlag=false;
function isZeroOrX(){

    var buttonText=this.innerHTML;

    if(!buttonText){
        this.innerHTML=isXorZeroFlag?"X":"O";
        isXorZeroFlag=!isXorZeroFlag;
        turn();
       var check =isGameOver();
       if(check){
           wins();
       }
       else{
        document.querySelector("#gameover").innerHTML=" ";
       }
       
    }
}

function wins(){
    if(isXorZeroFlag){
        document.querySelector("#start").innerHTML="Player A wins !!"; 
        document.querySelector("#gameover").innerHTML="GAME OVER !!";
        Array.prototype.forEach.call(buttonArray,(button)=>button.removeEventListener("click",isZeroOrX));
    }
    else {
        document.querySelector("#start").innerHTML="Player B wins !!"; 
        document.querySelector("#gameover").innerHTML="GAME OVER !!";
        Array.prototype.forEach.call(buttonArray,(button)=>button.removeEventListener("click",isZeroOrX));
    }
    
}

function turn(){
    if(isXorZeroFlag){
        document.querySelector("#start").innerHTML="Player B turn"; 
    }
    else 
    document.querySelector("#start").innerHTML="Player A turn"; 
}


function isGameOver(){
    if(tictactoe.isSameRow(buttonArray[0].innerHTML,buttonArray[1].innerHTML,buttonArray[2].innerHTML)){
        return true;
    }
      else  if(tictactoe.isSameRow(buttonArray[3].innerHTML,buttonArray[4].innerHTML,buttonArray[5].innerHTML)){
        return true;
    }  
    else  if(tictactoe.isSameRow(buttonArray[6].innerHTML,buttonArray[7].innerHTML,buttonArray[8].innerHTML)){
        return true;
    } 
    else  if(tictactoe.isSameRow(buttonArray[0].innerHTML,buttonArray[3].innerHTML,buttonArray[6].innerHTML)){
        return true;
    } 
    else  if(tictactoe.isSameRow(buttonArray[1].innerHTML,buttonArray[4].innerHTML,buttonArray[7].innerHTML)){
        return true;
    } 
    else  if(tictactoe.isSameRow(buttonArray[2].innerHTML,buttonArray[5].innerHTML,buttonArray[8].innerHTML)){
        return true;
    } 
    else  if(tictactoe.isSameRow(buttonArray[0].innerHTML,buttonArray[4].innerHTML,buttonArray[8].innerHTML)){
        return true;
    } 
    else  if(tictactoe.isSameRow(buttonArray[2].innerHTML,buttonArray[4].innerHTML,buttonArray[6].innerHTML)){
        return true;
    } 
    else{
        return false;
    }
}