var screen=document.getElementById('screen');
var buttons=document.querySelectorAll('button');
var screenValue ='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        // alert(buttonText);
        if(buttonText==check){

        }
        else if(buttonText==C){
            screenValue='';
            screen.value =screenValue;
        }
        else{
            screenValue += buttonText;
            screen.value= screenValue;
        }
    })
}