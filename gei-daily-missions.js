/* =====================================

GEI DAILY MISSIONS
Version 1.0

===================================== */

const GEI_DAILY = {

missions:[

{
id:"dailyExplorer",
title:"🌎 Explore The Universe",
description:"Visit the GEI Universe Map",
xp:50,
coins:10
},

{
id:"dailyReservoir",
title:"🌊 Reservoir Inspection",
description:"Visit Reservoir Basin",
xp:75,
coins:15
},

{
id:"dailyBuilder",
title:"🧱 Dam Builder Duty",
description:"Visit Dam District",
xp:100,
coins:20
},

{
id:"dailyEngineer",
title:"⚙ Engineering Review",
description:"Visit Waterwheel Valley",
xp:125,
coins:25
},

{
id:"dailyIndustry",
title:"🏭 Industrial Survey",
description:"Visit Mill City",
xp:150,
coins:30
}

],

todayKey(){

const today =
new Date();

return (

today.getFullYear()

+

"-"

+

(today.getMonth()+1)

+

"-"

+

today.getDate()

);

},

currentMission(){

const key =
this.todayKey();

const index =

Math.abs(
this.hash(key)
)

%

this.missions.length;

return this.missions[index];

},

hash(str){

let hash = 0;

for(
let i=0;
i<str.length;
i++
){

hash =

((hash << 5) - hash)

+

str.charCodeAt(i);

hash |= 0;

}

return hash;

},

rewardKey(){

return (

"geiDailyReward_"

+

this.todayKey()

);

},

claimed(){

return localStorage.getItem(
this.rewardKey()
);

},

claimReward(){

if(
this.claimed()
){

return false;

}

const mission =
this.currentMission();

const currentXP =

parseInt(
localStorage.getItem(
"geiXP"
)
) || 0;

localStorage.setItem(

"geiXP",

currentXP +
mission.xp

);

const currentCoins =

parseInt(
localStorage.getItem(
"geiCoins"
)
) || 0;

localStorage.setItem(

"geiCoins",

currentCoins +
mission.coins

);

localStorage.setItem(

this.rewardKey(),

"claimed"

);

return true;

}

};