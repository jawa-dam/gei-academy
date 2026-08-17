/* =====================================

GEI UI SYSTEM
Version 1.0

===================================== */

const GEI_UI = {

init(){

this.injectStyles();
this.createNotificationArea();

},

injectStyles(){

if(
document.getElementById(
"gei-ui-styles"
)
){
return;
}

const style =
document.createElement("style");

style.id =
"gei-ui-styles";

style.innerHTML = `

#geiNotifications{

position:fixed;
top:20px;
right:20px;

z-index:9999;

display:flex;
flex-direction:column;

gap:12px;

max-width:350px;

}

.gei-toast{

background:#10131c;

color:white;

padding:16px;

border-radius:14px;

border-left:4px solid #2fd2ff;

box-shadow:
0 0 25px rgba(0,0,0,.4);

animation:
slideIn .4s ease;

font-family:Arial,sans-serif;

}

.gei-success{
border-left-color:#2fd2ff;
}

.gei-achievement{
border-left-color:#f310ba;
}

.gei-warning{
border-left-color:#ffaa00;
}

@keyframes slideIn{

from{

opacity:0;
transform:
translateX(40px);

}

to{

opacity:1;
transform:
translateX(0);

}

}

.gei-popup{

position:fixed;

top:50%;

left:50%;

transform:
translate(-50%,-50%);

background:#10131c;

padding:30px;

border-radius:25px;

text-align:center;

z-index:10000;

box-shadow:
0 0 40px rgba(
47,210,255,.4
);

}

.gei-hidden{

display:none;

}

`;

document.head.appendChild(
style
);

},

createNotificationArea(){

if(
document.getElementById(
"geiNotifications"
)
){
return;
}

const div =
document.createElement("div");

div.id =
"geiNotifications";

document.body.appendChild(
div
);

},

toast(
message,
type="success"
){

const toast =
document.createElement("div");

toast.className =
"gei-toast gei-" +
type;

toast.innerHTML =
message;

document.getElementById(
"geiNotifications"
).appendChild(
toast
);

setTimeout(()=>{

toast.remove();

},4000);

},

xp(amount){

this.toast(
`⭐ +${amount} XP Earned`,
"success"
);

},

achievement(name){

this.toast(
`🏆 Achievement Unlocked:<br>${name}`,
"achievement"
);

},

save(){

this.toast(
"💾 Progress Saved",
"success"
);

},

warning(message){

this.toast(
message,
"warning"
);

},

modal(title,text){

let old =
document.getElementById(
"geiModal"
);

if(old){
old.remove();
}

const modal =
document.createElement("div");

modal.id =
"geiModal";

modal.className =
"gei-popup";

modal.innerHTML =

`

<h2>${title}</h2>

<br>

<p>${text}</p>

<br>

<button id="closeGEIModal">

Close

</button>

`;

document.body.appendChild(
modal
);

document
.getElementById(
"closeGEIModal"
)
.onclick = () => {

modal.remove();

};

}

};

document.addEventListener(
"DOMContentLoaded",
()=>{

GEI_UI.init();

}
);