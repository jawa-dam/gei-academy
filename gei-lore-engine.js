/* =====================================

GEI LORE ENGINE
Version 1.0

===================================== */

const GEI_LORE = {

key:"geiLore",

entries:[

{
id:"firstReservoir",

type:"legend",

title:"🌊 The First Reservoir",

rarity:"common",

description:
"Ancient records speak of a vast reservoir that gathered the first waters of civilization."
},

{
id:"foundationStone",

type:"artifact",

title:"🧱 Foundation Stone",

rarity:"rare",

description:
"A mysterious stone said to have marked the beginning of the Age of Foundations."
},

{
id:"engineersScroll",

type:"artifact",

title:"⚙ Scroll of the Engineers",

rarity:"epic",

description:
"A preserved document describing forgotten mechanical systems."
},

{
id:"scholarsArchive",

type:"location",

title:"👑 Hidden Scholar Archive",

rarity:"epic",

description:
"A secret library containing knowledge lost to time."
},

{
id:"waterwheelTitan",

type:"legend",

title:"⚙ The Waterwheel Titan",

rarity:"legendary",

description:
"A mythical machine said to power an entire civilization."
},

{
id:"summitCrown",

type:"artifact",

title:"👑 Crown of Genesis Summit",

rarity:"legendary",

description:
"A relic granted only to the greatest explorers."
}

],

discoveredKey:"geiLoreDiscovered",

discovered(){

return JSON.parse(
localStorage.getItem(
this.discoveredKey
)
) || [];

},

save(list){

localStorage.setItem(
this.discoveredKey,
JSON.stringify(list)
);

},

isDiscovered(id){

return this.discovered()
.includes(id);

},

discover(id){

const lore =
this.entries.find(
e=>e.id===id
);

if(!lore){
return null;
}

const found =
this.discovered();

if(
!found.includes(id)
){

found.push(id);

this.save(found);

if(
typeof GEI_HISTORY !==
"undefined"
){

GEI_HISTORY.record(

"lore",

"📚 Lore Discovered",

lore.title

);

}

}

return lore;

},

randomDiscovery(){

const undiscovered =

this.entries.filter(

entry =>

!this.isDiscovered(
entry.id
)

);

if(
undiscovered.length === 0
){

return null;

}

const random =

undiscovered[
Math.floor(
Math.random() *
undiscovered.length
)
];

return this.discover(
random.id
);

},

all(){

return this.entries;

},

progress(){

return Math.floor(

(
this.discovered().length
/

this.entries.length
)

*100

);

}

};

if(rewards.lore){

GEI_LORE.randomDiscovery();

}