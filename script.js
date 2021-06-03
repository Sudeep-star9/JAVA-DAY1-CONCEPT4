const Second_Input=document.createElement('input')
document.body.appendChild(Second_Input);

 
const First_Button=document.createElement('button');
document.body.appendChild(First_Button);
First_Button.innerHTML="Button"


Second_Input.addEventListener('input ',dothis)
function dothis(){
    console.log("user is typing")
}
Second_Input.addEventListener('input',dothis)
function dothis(event){
    console.log(event.target.value)

}
const button=document.querySelector('button')
button.addEventListener('click',showinput)

function showinput(){
    const Second_Input=document.querySelector('input')
     console.log(Second_Input.value);

     const LI=document.createElement('li');
     UL.appendChild(LI);
     LI .innerHTML=Second_Input.value
    document.querySelector('input').value='';
}


const UL=document.createElement('ul');
document.body.appendChild(UL);

