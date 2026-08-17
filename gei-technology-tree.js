/* =====================================

GEI TECHNOLOGY TREE
Version 1.0

===================================== */

const GEI_TECH = {

technologies:[

{
id:"reservoirEfficiency",

title:"🌊 Reservoir Efficiency I",

description:
"+10% Mission XP",

cost:500,

bonusType:"missionXP",

bonusValue:10
},

{
id:"damMaterials",

title:"🧱 Advanced Dam Materials",

description:
"+20% Research Rewards",

cost:1000,

bonusType:"researchXP",

bonusValue:20
},

{
id:"waterwheelOptimization",

title:"⚙ Waterwheel Optimization",

description:
"+15% Companion Rewards",

cost:1500,

bonusType:"companionXP",

bonusValue:15
},

{
id:"powerTransmission",

title:"⚡ Power Transmission",

description:
"+25% Coin Rewards",

cost:2500,

bonusType:"coins",

bonusValue:25
},

{
id:"guildInfluence",

title:"🏛 Guild Influence",

description:
"+1 Guild Prestige Level",

cost:3500,

bonusType:"guild",

bonusValue:1
},

{
id:"worldNavigation",

title:"🗺 World Navigation",

description:
"+50 XP Daily Login",

cost:5000,

bonusType:"dailyXP",

bonusValue:50
},

{
id:"genesisArchives",

title:"👑 Genesis Archives",

description:
"Unlock Ancient Knowledge",

cost:10000,

bonusType:"special",

bonusValue:1
}

],

key:"geiTechnologies",

unlocked(){

return JSON.parse(

localStorage.getItem(
this.key
)

) || [];

},

save(data){

localStorage.setItem(
this.key,
JSON.stringify(data)
);

},

isUnlocked(id){

return this.unlocked()
.includes(id);

},

unlock(id){

const tech =

this.technologies.find(
t=>t.id===id
);

if(!tech){

return false;

}

if(
this.isUnlocked(id)
){

return false;

}

const coins =

parseInt(
localStorage.getItem(
"geiCoins"
)
) || 0;

if(
coins < tech.cost
){

return false;

}

localStorage.setItem(

"geiCoins",

coins - tech.cost

);

const unlocked =
this.unlocked();

unlocked.push(id);

this.save(unlocked);

return true;

},

bonus(type){

let total = 0;

this.technologies.forEach(

tech=>{

if(

this.isUnlocked(
tech.id
)

&&

tech.bonusType === type

){

total +=
tech.bonusValue;

}

}

);

return total;

}

};