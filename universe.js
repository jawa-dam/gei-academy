const GEI = {

getXP() {
return Number(
localStorage.getItem("xp")
) || 0;
},

addXP(amount){

const xp =
this.getXP() + amount;

localStorage.setItem(
"xp",
xp
);

return xp;
},

getLevel(){

const xp = this.getXP();

return Math.floor(
xp / 100
) + 1;

},

unlock(name){

localStorage.setItem(
name,
"earned"
);

},

has(name){

return localStorage.getItem(
name
)==="earned";

},

completed(module){

return localStorage.getItem(
module
)==="true";

}

};
GEI.getTitle = function(){

const level =
this.getLevel();

if(level >= 100)
return "👑 GEI Legend";

if(level >= 75)
return "🏛 Governor";

if(level >= 50)
return "⚡ Architect";

if(level >= 25)
return "🔬 Investigator";

if(level >= 10)
return "🧭 Explorer";

return "👀 Observer";

};
document.getElementById(
"playerTitle"
).innerText =
GEI.getTitle();