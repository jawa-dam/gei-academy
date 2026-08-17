/* =====================================

GEI ACHIEVEMENT ENGINE
Version 1.0

===================================== */

const GEI_ACHIEVEMENTS = {

list:[

{
id:"firstStepsBadge",
name:"👣 First Steps",
description:"Earn 100 XP",
check:()=>GEI.getXP()>=100
},

{
id:"studentBadge",
name:"📚 Student",
description:"Earn 500 XP",
check:()=>GEI.getXP()>=500
},

{
id:"explorerBadge",
name:"🧭 Explorer",
description:"Earn 1000 XP",
check:()=>GEI.getXP()>=1000
},

{
id:"architectBadge",
name:"⚡ Architect",
description:"Earn 5000 XP",
check:()=>GEI.getXP()>=5000
},

{
id:"legendBadge",
name:"👑 GEI Legend",
description:"Earn 10000 XP",
check:()=>GEI.getXP()>=10000
},

{
id:"moduleMasterBadge",
name:"📖 Module Master",
description:"Complete 5 modules",
check:()=>GEI.countModules()>=5
},

{
id:"academyScholarBadge",
name:"🎓 Academy Scholar",
description:"Complete 10 modules",
check:()=>GEI.countModules()>=10
},

{
id:"dailyChampionBadge",
name:"🏆 Daily Champion",
description:"Complete all daily quests",
check:()=>GEI.hasBadge("dailyChampionBadge")
},

{
id:"cartographerBadge",
name:"🗺 Cartographer",
description:"Discover 3 Regions",
check:()=>GEI_WORLD.countDiscovered()>=3
},

{
id:"worldTravelerBadge",
name:"🌎 World Traveler",
description:"Discover All Regions",
check:()=>GEI_WORLD.countDiscovered()>=7
},

{
id:"summitAccess",
name:"👑 Summit Candidate",
description:"Reach Genesis Scholar Rank",
check:()=>GEI_REPUTATION.rankLevel() >= 9
},

{
id:"homesteadFounderBadge",
name:"🏡 Homestead Founder",
description:"Build First Structure",
check:()=>GEI_HOUSING.count()>=1
},

{
id:"cityBuilderBadge",
name:"🏛 City Builder",
description:"Build 5 Structures",
check:()=>GEI_HOUSING.count()>=5
},

{
id:"settlementMasterBadge",
name:"🏗 Settlement Master",
description:"Reach 100% Development",
check:()=>GEI_HOUSING.count()>=5
}

],

run(){

this.list.forEach(

achievement=>{

if(
achievement.check()
&&
!GEI.hasBadge(
achievement.id
)
){

GEI.awardBadge(
achievement.id
);

if(
typeof GEI_UI !==
"undefined"
){

GEI_UI.achievement(
achievement.name
);

}

}

}

);

},

countUnlocked(){

let count = 0;

this.list.forEach(

achievement=>{

if(
GEI.hasBadge(
achievement.id
)
){

count++;

}

}

);

return count;

}

};