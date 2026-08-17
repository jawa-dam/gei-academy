/* =====================================

GEI SEASON ENGINE
Version 1.0

===================================== */

const GEI_SEASONS = {

currentSeason:{

id:"season1",

name:"⚡ Hydraulic Foundations",

description:

"Learn the foundations of the GEI Universe.",

startDate:"2026-08-01",

endDate:"2026-10-31",

rewards:[

"🏆 Founder Badge",

"⚙ Apprentice Crest",

"🌊 Reservoir Banner",

"🪙 500 Coins",

"⭐ 1000 XP"

]

},

daysRemaining(){

const end = new Date(
this.currentSeason.endDate
);

const now = new Date();

const diff =

Math.ceil(

(end-now)

/

(1000*60*60*24)

);

return Math.max(diff,0);

},

isActive(){

return this.daysRemaining() > 0;

},

progress(){

const start =
new Date(
this.currentSeason.startDate
);

const end =
new Date(
this.currentSeason.endDate
);

const now =
new Date();

const total =
end-start;

const elapsed =
now-start;

return Math.min(

100,

Math.max(
0,
Math.floor(
(elapsed/total)*100
)
)

);

},

rewardClaimed(){

return localStorage.getItem(
"geiSeasonReward_" +
this.currentSeason.id
);

},

claimReward(){

if(
this.rewardClaimed()
){

return false;

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
xp + 1000
);

localStorage.setItem(
"geiCoins",
coins + 500
);

localStorage.setItem(

"geiSeasonReward_" +
this.currentSeason.id,

"claimed"

);

return true;

}

};