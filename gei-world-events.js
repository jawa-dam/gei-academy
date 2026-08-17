/* =====================================

GEI WORLD EVENTS
Version 1.0

===================================== */

const GEI_EVENTS = {

events:[

{
id:"greatFlood",

title:"🌊 Great Flood",

description:
"Waters are rising across the universe.",

bonusXP:50,

bonusCoins:25
},

{
id:"powerCrisis",

title:"⚡ Power Crisis",

description:
"Energy production is under pressure.",

bonusXP:75,

bonusCoins:35
},

{
id:"industrialExpansion",

title:"🏭 Industrial Expansion",

description:
"Mill City production has surged.",

bonusXP:100,

bonusCoins:50
},

{
id:"mountainDiscovery",

title:"🏔 Mountain Discovery",

description:
"New source waters have been found.",

bonusXP:60,

bonusCoins:30
},

{
id:"scholarFestival",

title:"👑 Scholar Festival",

description:
"Knowledge spreads across the realm.",

bonusXP:120,

bonusCoins:60
}

],

currentEvent(){

const today =
new Date();

const seed =

today.getFullYear() +

today.getMonth() +

today.getDate();

const index =

Math.abs(seed) %

this.events.length;

return this.events[index];

},

daysRemaining(){

const today =
new Date();

const day =
today.getDate();

return 7 - (day % 7);

},

bonusXP(){

return this
.currentEvent()
.bonusXP;

},

bonusCoins(){

return this
.currentEvent()
.bonusCoins;

}

};