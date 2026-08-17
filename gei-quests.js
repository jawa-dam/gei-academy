/* =====================================

GEI QUEST SYSTEM
Version 1.0

===================================== */

const GEI_QUESTS = {

dailyQuests:[

{
id:"daily_module",
title:"📚 Complete A Lesson",
reward:100
},

{
id:"daily_explore",
title:"🌎 Visit A Region",
reward:50
},

{
id:"daily_profile",
title:"👤 Check Your Profile",
reward:25
}

],

today(){

return new Date()
.toDateString();

},

getProgress(){

return JSON.parse(

localStorage.getItem(
"geiQuestProgress"
)

) || {};

},

saveProgress(progress){

localStorage.setItem(
"geiQuestProgress",
JSON.stringify(progress)
);

},

resetIfNewDay(){

const lastDay =
localStorage.getItem(
"geiQuestDate"
);

const today =
this.today();

if(lastDay !== today){

localStorage.setItem(
"geiQuestDate",
today
);

localStorage.setItem(
"geiQuestProgress",
JSON.stringify({})
);

}

},

complete(id){

this.resetIfNewDay();

const progress =
this.getProgress();

if(progress[id])
return false;

progress[id] = true;

this.saveProgress(
progress
);

const quest =
this.dailyQuests.find(
q => q.id === id
);

if(quest){

GEI.addXP(
quest.reward
);

if(
typeof GEI_UI !==
"undefined"
){

GEI_UI.xp(
quest.reward
);

GEI_UI.achievement(
quest.title
);

}

}

/* Check if all daily quests completed */

this.checkMasterQuest();

return true;

},

isComplete(id){

this.resetIfNewDay();

const progress =
this.getProgress();

return !!progress[id];

},

completedCount(){

this.resetIfNewDay();

const progress =
this.getProgress();

return Object.keys(
progress
).length;

},

completionPercent(){

return Math.floor(

(this.completedCount()/

this.dailyQuests.length)

*100

);

},

streak(){

return Number(

localStorage.getItem(
"geiStreak"
)

) || 1;

}

};
checkMasterQuest(){

if(
this.completedCount()
>= this.dailyQuests.length
){

GEI.awardBadge(
"dailyChampionBadge"
);

if(
typeof GEI_UI !==
"undefined"
){

if(
!GEI.hasBadge(
"dailyChampionBadge"
)
){

GEI.awardBadge(
"dailyChampionBadge"
);

GEI_UI.achievement(
"🏆 Daily Champion"
);

}

}

}

}