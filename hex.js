const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn=document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener("click",()=>{
    let hexcolor="#";
   
    for (let i = 0; i < 6; i++) {
        const random=getrandom();
    hexcolor =hexcolor +hex[random];
    }
    document.body.children[1].style.backgroundColor=hexcolor;
    color.textContent=hexcolor;
});
 function getrandom(){
    return (Math.floor(Math.random()*hex.length));

 }