/* =====================================

GEI EXPEDITION ENGINE
Version 1.0

===================================== */

const GEI_EXPEDITIONS = {

key:"geiExpeditions",

regions:[

{
id:"mountains",
name:"🏔 Mountains",
duration:60,
rewardXP:50,
rewardCoins:25,
artifactChance:20,
loreChance:15
},

{
id:"reservoir",
name:"🌊 Reservoir",
duration:120,
rewardXP:100,
rewardCoins:50,
artifactChance:25,
loreChance:20
},

{
id:"damDistrict",
name:"🧱 Dam District",
duration:180,
rewardXP:150,
rewardCoins:75,
artifactChance:30,
loreChance:25
},

{
id:"waterwheelValley",
name:"⚙ Waterwheel Valley",
duration:300,
rewardXP:250,
rewardCoins:125,
artifactChance:35,
loreChance:30
},

{
id:"powerhouseRidge",
name:"⚡ Powerhouse Ridge",
duration:600,
rewardXP:500,
rewardCoins:250,
artifactChance:40,
loreChance:35
},

{
id:"genesisSummit",
name:"👑 Genesis Summit",
duration:900,
rewardXP:1000,
rewardCoins:500,
artifactChance:50,
loreChance:50
}

],

current(){

return JSON.parse(
localStorage.getItem(this.key)
) || null;

},

save(data){

localStorage.setItem(
this.key,
JSON.stringify(data)
);

},

start(regionId){

if(this.current()) return false;

const region =
this.regions.find(
r=>r.id===regionId
);

if(!region) return false;

this.save({

regionId,
started:Date.now(),
endsAt:
Date.now() +
(region.duration * 1000)

});

return true;

},

complete(){

const active =
this.current();

if(!active) return null;

if(
Date.now() <
active.endsAt
){

return null;
}

const region =
this.regions.find(
r=>r.id===active.regionId
);

const rewards = {

xp:region.rewardXP,

coins:
region.rewardCoins,

artifact:false,

lore:false

};

if(
Math.random()*100 <
region.artifactChance
){

rewards.artifact = true;

}

if(
Math.random()*100 <
region.loreChance
){

rewards.lore = true;

}

localStorage.removeItem(
this.key
);

return rewards;

},

remaining(){

const active =
this.current();

if(!active){

return 0;

}

return Math.max(
0,
Math.floor(
(active.endsAt -
Date.now())/1000
)
);

}

};

GEI_DISCOVERY.discover(
region.id
);