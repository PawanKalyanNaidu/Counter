let num=document.getElementById("counterValue");
function increase(){

 let previouesnum=parseInt(num.textContent);

 let updatedval=previouesnum+1;
 num.textContent=updatedval;

 if(updatedval>0){
    num.style.color="green";
 }
 else if(updatedval<0){
    num.style.color="red";
 }
 else{
    num.style.color="black";
 }
 

}
function decrease(){

    let previouesnum=parseInt(num.textContent);
    let decreaseval=previouesnum-1;
    num.textContent=decreaseval;

    if(decreaseval>0){
        num.style.color="green";
     }
     else if(decreaseval<0){
        num.style.color="Red";
     }
     else{
        num.style.color="black";
     }

}
function reset(){
    let updateval=0;
    num.textContent=updateval;
    num.style.color="black";
}
