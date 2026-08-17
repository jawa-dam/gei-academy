/* =====================================

GEI ARTIFACT ENGINE
Version 1.0

===================================== */

const GEI_ARTIFACTS = {

key:"geiArtifacts",

artifacts:[

{
id:"bronzeGateKey",
name:"🗝 Bronze Gate Key",
rarity:"Common",
value:50,
description:
"An ancient key once used by dam keepers."
},

{
id:"reservoirCompass",
name:"🧭 Reservoir Compass",
rarity:"Uncommon",
value:150,
description:
"Points toward hidden water routes."
},

{
id:"engineerHammer",
name:"🔨 Engineer's Hammer",
rarity:"Rare",
value:400,
description:
"A tool carried by legendary builders."
},

{
id:"waterwheelCore",
name:"⚙ Waterwheel Core",
rarity:"Epic",
value:1000,
description:
"A preserved power mechanism."
},

{
id:"scholarTablet",
name:"📜 Scholar Tablet",
rarity:"Epic",
value:1200,
description:
"A lost archive fragment."
},

{
id:"summitCrown",
name:"👑 Crown of Genesis Summit",
rarity:"Legendary",
value:5000,
description:
"A relic reserved for master explorers."
}

],

inventory(){

return JSON.parse(

localStorage.getItem(
this.key
)

) || [];

},

save(items){

localStorage.setItem(
this.key,
JSON.stringify(items)
);

},

owned(id){

return this.inventory()
.some(a=>a.id===id);

},

add(id){

const artifact =

this.artifacts.find(
a=>a.id===id
);

if(!artifact){

return false;

}

const inventory =
this.inventory();

inventory.push({

...artifact,

obtained:
new Date()
.toISOString()

});

this.save(
inventory
);

if(
typeof GEI_HISTORY !==
"undefined"
){

GEI_HISTORY.record(

"artifact",

"🗝 Artifact Found",

artifact.name

);

}

return true;

},

randomFind(){

const random =

this.artifacts[
Math.floor(
Math.random() *
this.artifacts.length
)
];

this.add(random.id);

return random;

},

totalValue(){

return this.inventory()
.reduce(

(sum,item)=>

sum + item.value,

0

);

}

};

if(rewards.artifact){

GEI_ARTIFACTS.randomFind();

}