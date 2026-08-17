/* =====================================

GEI CORE SYSTEM
Version 1.0

===================================== */

const GEI = {

VERSION: "1.0.0",

/* =========================
PROFILE
========================= */

getPlayerName(){

return localStorage.getItem(
"playerName"
) || "Guest Explorer";

},

setPlayerName(name){

localStorage.setItem(
"playerName",
name
);

},

/* =========================
XP SYSTEM
========================= */

getXP(){

return Number(
localStorage.getItem(
"xp"
)
) || 0;

},

setXP(amount){

localStorage.setItem(
"xp",
amount
);

},

addXP(amount){

const current =
this.getXP();

const total =
current + amount;

this.setXP(total);

return total;

},

/* =========================
LEVEL SYSTEM
========================= */

getLevel(){

return Math.floor(
this.getXP()/100
)+1;

},

/* =========================
TITLE SYSTEM
========================= */

getTitle(){

const xp =
this.getXP();

if(xp >= 10000)
return "👑 GEI Legend";

if(xp >= 7500)
return "🏛 Governor";

if(xp >= 5000)
return "⚡ Architect";

if(xp >= 2500)
return "🔬 Investigator";

if(xp >= 1000)
return "🧭 Explorer";

return "👀 Observer";

},

/* =========================
BADGES
========================= */

awardBadge(badge){

localStorage.setItem(
badge,
"earned"
);

},

hasBadge(badge){

return localStorage.getItem(
badge
)==="earned";

},

countBadges(){

let count = 0;

for(let key in localStorage){

if(
key.includes("Badge")
){
count++;
}

}

return count;

},

/* =========================
MODULES
========================= */

completeModule(id){

localStorage.setItem(
"module"+id+"Complete",
"true"
);

},

moduleCompleted(id){

return localStorage.getItem(
"module"+id+"Complete"
)==="true";

},

countModules(){

let total = 0;

for(let i=1;i<=50;i++){

if(
this.moduleCompleted(i)
){
total++;
}

}

return total;

},

/* =========================
REGIONS
========================= */

unlockRegion(region){

localStorage.setItem(
region,
"unlocked"
);

},

regionUnlocked(region){

return localStorage.getItem(
region
)==="unlocked";

},

/* =========================
CERTIFICATES
========================= */

certificateID(){

const year =
new Date().getFullYear();

return "GEI-" +
year +
"-" +
Math.random()
.toString(36)
.substring(2,8)
.toUpperCase();

},

verificationCode(){

return Math.random()
.toString(36)
.substring(2,12)
.toUpperCase();

},

/* =========================
COMPLETION
========================= */

getCompletion(){

const earned =
this.countBadges();

const total = 6;

return Math.floor(
(earned/total)*100
);

},

/* =========================
SAVE SYSTEM
========================= */

exportSave(){

return JSON.stringify(
localStorage
);

},

copySave(){

navigator.clipboard.writeText(
this.exportSave()
);

},

downloadSave(){

const data =
this.exportSave();

const blob =
new Blob(
[data],
{
type:"application/json"
}
);

const url =
URL.createObjectURL(
blob
);

const a =
document.createElement("a");

a.href = url;

a.download =
"gei-save.json";

a.click();

},

resetUniverse(){

localStorage.clear();

location.reload();

}

};

/* =========================
AUTO HELPERS
========================= */

function geiText(id,value){

const el =
document.getElementById(id);

if(el){

el.innerText = value;

}

}

function geiLoadPlayer(){

geiText(
"playerName",
GEI.getPlayerName()
);

geiText(
"playerXP",
GEI.getXP()
);

geiText(
"playerLevel",
GEI.getLevel()
);

geiText(
"playerTitle",
GEI.getTitle()
);

}