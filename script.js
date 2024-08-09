const colors=["red","green","yellow","blue"];
const btn=document.querySelector(".btn");
const color=document.querySelector(".color");
const link=document.getElementById("link");

btn.addEventListener("click",()=>{
    const random=getrandom();
let pp=document.body.children[1].style.backgroundColor=colors[random];
console.log(pp);
color.textContent = colors[random];
});

link.addEventListener("click",()=>{
    link.classList.toggle('underline');
})
function getrandom(){
    return Math.floor(Math.random()*colors.length);
}