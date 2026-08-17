/* =====================================

GEI RESEARCH LABORATORY
Version 1.0

===================================== */

const GEI_RESEARCH = {

projects:[

{
id:"waterFlow",

title:"🌊 Water Flow Analysis",

description:
"Study the movement of water.",

duration:60000,

rewardXP:100,

rewardCoins:50
},

{
id:"damEngineering",

title:"🧱 Dam Engineering",

description:
"Research structural containment systems.",

duration:120000,

rewardXP:200,

rewardCoins:100
},

{
id:"waterwheelPower",

title:"⚙ Waterwheel Power",

description:
"Investigate mechanical energy conversion.",

duration:180000,

rewardXP:300,

rewardCoins:150
},

{
id:"powerGrid",

title:"⚡ Power Grid Systems",

description:
"Research energy distribution.",

duration:240000,

rewardXP:400,

rewardCoins:200
},

{
id:"genesisScholar",

title:"👑 Genesis Scholarship",

description:
"Unlock advanced GEI knowledge.",

duration:300000,

rewardXP:500,

rewardCoins:250
}

],

key:"geiResearch",

getState(){

return JSON.parse(

localStorage.getItem(
this.key
)

) || {

active:null

};

},

saveState(data){

localStorage.setItem(

this.key,

JSON.stringify(data)

);

},

start(projectId){

const state =
this.getState();

if(state.active){

return false;

}

const project =

this.projects.find(
p=>p.id===projectId
);

if(!project){

return false;

}

state.active = {

id:project.id,

startTime:Date.now(),

endTime:
Date.now() +
project.duration

};

this.saveState(state);

return true;

},

activeProject(){

const state =
this.getState();

if(!state.active){

return null;

}

return this.projects.find(

p=>p.id===state.active.id

);

},

timeRemaining(){

const state =
this.getState();

if(!state.active){

return 0;

}

return Math.max(

0,

state.active.endTime -
Date.now()

);

},

complete(){

const state =
this.getState();

if(
!state.active
){

return null;

}

if(
this.timeRemaining() > 0
){

return null;

}

const project =
this.activeProject();

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
xp + project.rewardXP
);

localStorage.setItem(
"geiCoins",
coins + project.rewardCoins
);

state.active = null;

this.saveState(state);

return project;

}

};