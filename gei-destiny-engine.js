/* =====================================

GEI DESTINY ENGINE
Version 1.0

===================================== */

const GEI_DESTINY = {

key:"geiDestiny",

paths:[

{
id:"explorer",

name:"🏔 Path of the Explorer",

description:
"Seek mountains, discoveries, and hidden places.",

xpBonus:15,
coinBonus:5,
researchBonus:0
},

{
id:"keeper",

name:"🌊 Path of the Keeper",

description:
"Protect reservoirs and preserve resources.",

xpBonus:10,
coinBonus:10,
researchBonus:5
},

{
id:"builder",

name:"🧱 Path of the Builder",

description:
"Construct foundations and strengthen civilization.",

xpBonus:20,
coinBonus:5,
researchBonus:5
},

{
id:"engineer",

name:"⚙ Path of the Engineer",

description:
"Master machines and waterwheel systems.",

xpBonus:10,
coinBonus:15,
researchBonus:10
},

{
id:"energizer",

name:"⚡ Path of the Energizer",

description:
"Generate power and expand production.",

xpBonus:5,
coinBonus:25,
researchBonus:5
},

{
id:"scholar",

name:"👑 Path of the Scholar",

description:
"Pursue knowledge and ancient wisdom.",

xpBonus:5,
coinBonus:5,
researchBonus:25
}

],

get(){

return JSON.parse(

localStorage.getItem(
this.key
)

) || null;

},

choose(id){

const destiny =

this.paths.find(
p => p.id === id
);

if(!destiny){

return false;

}

localStorage.setItem(

this.key,

JSON.stringify({

...destiny,

level:1,

reputation:0

})

);

return true;

},

hasDestiny(){

return this.get() !== null;

},

name(){

const destiny =
this.get();

return destiny
? destiny.name
: "No Destiny";

},

addReputation(points){

const destiny =
this.get();

if(!destiny){

return;
}

destiny.reputation += points;

const nextLevel =

destiny.level * 100;

if(
destiny.reputation >= nextLevel
){

destiny.level++;

destiny.reputation = 0;

}

localStorage.setItem(

this.key,

JSON.stringify(destiny)

);

},

level(){

const destiny =
this.get();

return destiny
? destiny.level
: 0;

},

xpBonus(){

const destiny =
this.get();

return destiny
? destiny.xpBonus
: 0;

},

coinBonus(){

const destiny =
this.get();

return destiny
? destiny.coinBonus
: 0;

},

researchBonus(){

const destiny =
this.get();

return destiny
? destiny.researchBonus
: 0;

}

};