/* =====================================

GEI COMPANION ADVENTURES
Version 1.0

===================================== */

const GEI_COMPANION_ADVENTURES = {

todayKey(){

const d = new Date();

return (

d.getFullYear()

+ "-"

+ (d.getMonth()+1)

+ "-"

+ d.getDate()

);

},

rewardKey(){

return (

"geiCompanionAdventure_"

+

this.todayKey()

);

},

alreadyClaimed(){

return localStorage.getItem(
this.rewardKey()
);

},

adventure(companionId){

const adventures = {

beaver:[

{
text:"🦫 Dam Beaver reinforced a spillway.",
xp:25,
coins:15
},

{
text:"🦫 Dam Beaver discovered construction materials.",
xp:15,
coins:30
},

{
text:"🦫 Dam Beaver repaired a retaining wall.",
xp:35,
coins:10
}

],

eagle:[

{
text:"🦅 Mountain Eagle mapped a new route.",
xp:40,
coins:10
},

{
text:"🦅 Mountain Eagle discovered a hidden peak.",
xp:50,
coins:5
},

{
text:"🦅 Mountain Eagle spotted distant landmarks.",
xp:30,
coins:20
}

],

fish:[

{
text:"🐟 River Guide found a forgotten channel.",
xp:30,
coins:25
},

{
text:"🐟 River Guide discovered a treasure cache.",
xp:20,
coins:40
},

{
text:"🐟 River Guide revealed hidden waters.",
xp:45,
coins:10
}

],

otter:[

{
text:"⚙ Mechanical Otter optimized a machine.",
xp:60,
coins:15
},

{
text:"⚙ Mechanical Otter repaired a gear assembly.",
xp:50,
coins:20
},

{
text:"⚙ Mechanical Otter improved efficiency.",
xp:40,
coins:30
}

],

falcon:[

{
text:"⚡ Energy Falcon boosted power production.",
xp:70,
coins:25
},

{
text:"⚡ Energy Falcon stabilized the grid.",
xp:55,
coins:35
},

{
text:"⚡ Energy Falcon discovered new energy reserves.",
xp:80,
coins:10
}

],

owl:[

{
text:"👑 Scholar Owl uncovered ancient knowledge.",
xp:90,
coins:20
},

{
text:"👑 Scholar Owl translated forgotten records.",
xp:75,
coins:30
},

{
text:"👑 Scholar Owl discovered a wisdom scroll.",
xp:100,
coins:15
}

]

};

const pool =
adventures[companionId];

if(!pool){

return null;

}

const daySeed =
new Date().getDate();

return pool[
daySeed %
pool.length
];

},

claim(){

if(
this.alreadyClaimed()
){

return null;

}

const companion =
GEI_COMPANIONS.get();

if(!companion){

return null;

}

const reward =
this.adventure(
companion.id
);

if(!reward){

return null;

}

const xp =

parseInt(
localStorage.getItem(
"geiXP"
)
) || 0;

const coins =

parseInt(
localStorage.getItem(
"geiCoins"
)
) || 0;

localStorage.setItem(
"geiXP",
xp + reward.xp
);

localStorage.setItem(
"geiCoins",
coins + reward.coins
);

GEI_COMPANIONS.addXP(
Math.floor(
reward.xp / 2
)
);

localStorage.setItem(
this.rewardKey(),
"claimed"
);

return reward;

}

};