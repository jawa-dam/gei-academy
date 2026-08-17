/* =====================================

GEI COMPANION ENGINE
Version 1.0

===================================== */

const GEI_COMPANIONS = {

companions:[

{
id:"beaver",
name:"🦫 Dam Beaver",
role:"Master Builder",
bonusXP:10
},

{
id:"eagle",
name:"🦅 Mountain Eagle",
role:"Explorer",
bonusXP:15
},

{
id:"fish",
name:"🐟 River Guide",
role:"Navigator",
bonusXP:20
},

{
id:"otter",
name:"⚙ Mechanical Otter",
role:"Engineer",
bonusXP:25
},

{
id:"falcon",
name:"⚡ Energy Falcon",
role:"Power Specialist",
bonusXP:30
},

{
id:"owl",
name:"👑 Scholar Owl",
role:"Knowledge Keeper",
bonusXP:35
}

],

get(){

return JSON.parse(

localStorage.getItem(
"geiCompanion"
)

) || null;

},

choose(id){

const companion =

this.companions.find(
c=>c.id===id
);

if(!companion){

return false;

}

const saveData = {

...companion,

level:1,
xp:0

};

localStorage.setItem(

"geiCompanion",

JSON.stringify(
saveData
)

);

return true;

},

addXP(amount){

const companion =
this.get();

if(!companion){

return;
}

companion.xp += amount;

while(

companion.xp >=
(companion.level*100)

){

companion.xp -=

companion.level*100;

companion.level++;

}

localStorage.setItem(

"geiCompanion",

JSON.stringify(
companion
)

);

},

level(){

const companion =
this.get();

return companion
? companion.level
: 0;

},

name(){

const companion =
this.get();

return companion
? companion.name
: "No Companion";

},

bonus(){

const companion =
this.get();

return companion
? companion.bonusXP
: 0;

}

};