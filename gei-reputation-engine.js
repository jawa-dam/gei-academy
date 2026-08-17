/* =====================================

GEI REPUTATION ENGINE
Version 1.0

===================================== */

const GEI_REPUTATION = {

ranks:[

{
level:1,
title:"🌱 Observer",
xp:0
},

{
level:2,
title:"🏔 Mountain Explorer",
xp:100
},

{
level:3,
title:"🌊 Reservoir Keeper",
xp:300
},

{
level:4,
title:"🧱 Dam Builder",
xp:600
},

{
level:5,
title:"⚙ Hydraulic Apprentice",
xp:1000
},

{
level:6,
title:"⚙ Waterwheel Engineer",
xp:1500
},

{
level:7,
title:"🏭 Industrial Architect",
xp:2500
},

{
level:8,
title:"⚡ Energy Engineer",
xp:4000
},

{
level:9,
title:"📜 Genesis Scholar",
xp:6000
},

{
level:10,
title:"👑 Genesis Master",
xp:10000
}

],

getXP(){

return parseInt(
localStorage.getItem("geiXP")
) || 0;

},

currentRank(){

const xp =
this.getXP();

let current =
this.ranks[0];

this.ranks.forEach(rank=>{

if(
xp >= rank.xp
){

current = rank;

}

});

return current;

},

nextRank(){

const xp =
this.getXP();

for(
let i=0;
i<this.ranks.length;
i++
){

if(
xp <
this.ranks[i].xp
){

return this.ranks[i];

}

}

return null;

},

progressPercent(){

const current =
this.currentRank();

const next =
this.nextRank();

if(!next){

return 100;

}

const currentXP =
current.xp;

const nextXP =
next.xp;

const xp =
this.getXP();

return Math.floor(

(
(xp-currentXP)

/

(nextXP-currentXP)

)

*100

);

},

rankTitle(){

return this
.currentRank()
.title;

},

rankLevel(){

return this
.currentRank()
.level;

}

};