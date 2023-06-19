const words = [
    "hello",
    "parachute",
    "suburb",
    "method",
    "cover",
    "praise",
    "pace",
    "beard",
    "shadow",
    "boat",
    "weight",
    "gloom",
    "invisible",
    "book",
    "new",
    "hole",
    "create",
    "tight",
    "pill",
    "photography",
    "civilization",
    "flight",
    "shiver",
    "teach",
    "cluster",
    "license",
    "personal",
    "account",
    "requests",
    "throat",
    "glue",
    "surprise",
    "concrete",
    "council",
    "trouser",
    "survivor",
    "excuse",
    "owner",
    "Security",
    "About",
    "amazon",
    "chatgpt",
    "students",
    "training",
    "information",
    "intetnet"
];

const current_word=document.getElementById("current-word");
const btn=document.getElementById("btn");
const word_input=document.getElementById("word-input");
const time=document.getElementById("time");
const score=document.getElementById("score");
const again=document.querySelector(".again");
const showed=document.querySelector(".showed");
const showedd=document.querySelector(".showedd");
let timeplus=0;
let scoreplus=0;
var x;
btn.addEventListener("click",function(){
  x=setInterval(show,1000);
  btn.setAttribute("disabled","disabled");
});
let index=Math.floor(Math.random()*words.length);
current_word.innerHTML=words[index];
function show(){
    word_input.value=word_input.value.toLowerCase();
    timeplus++;
time.innerHTML=timeplus;
if(time.innerHTML<=5){
if(word_input.value==words[index]){
    word_input.value="";
scoreplus++;
score.innerHTML=scoreplus;
index=Math.floor(Math.random()*words.length);
current_word.innerHTML=words[index];
timeplus=0;
}
}
else if(time.innerHTML>5){
timeplus=0;
time.innerHTML=0;
scoreplus=0
score.innerHTML=0;
clearInterval(x);
again.classList.add("active");
btn.removeAttribute("disabled");
}
};
showed.addEventListener("click",function(){
    word_input.value="";
    again.classList.remove("active");
    index=Math.floor(Math.random()*words.length);
    current_word.innerHTML=words[index];
    x=setInterval(show,1000);
    btn.setAttribute("disabled","disabled");
})

showedd.addEventListener("click",function(){
    again.classList.remove("active");
btn.removeAttribute("disabled");

})

