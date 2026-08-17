/* =====================================

GEI VOTING ENGINE
Version 1.0

===================================== */

const GEI_VOTING = {

key:"geiVoting",

elections:[

{
id:"nextEvent",

title:"🌎 Next World Event",

options:[

"🌊 Great Flood",
"⚡ Power Crisis",
"🏭 Industrial Expansion",
"🏔 Mountain Discovery",
"👑 Scholar Festival"

]

},

{
id:"researchPriority",

title:"🔬 Research Priority",

options:[

"Water Systems",
"Dam Engineering",
"Waterwheel Technology",
"Energy Networks",
"Genesis Archives"

]

},

{
id:"civilizationProject",

title:"🏗 Civilization Project",

options:[

"Reservoir Expansion",
"Infrastructure Upgrade",
"Industry Development",
"Energy Initiative",
"Knowledge Initiative"

]

}

],

votes(){

return JSON.parse(

localStorage.getItem(
this.key)

) || {};

},

save(data){

localStorage.setItem(
this.key,
JSON.stringify(data)
);

},

cast(electionId,option){

const data =
this.votes();

if(
!data[electionId]
){

data[electionId] = {};

}

if(
!data[electionId][option]
){

data[electionId][option] = 0;

}

data[electionId][option]++;

this.save(data);

},

results(electionId){

const data =
this.votes();

return data[electionId] || {};

},

winner(electionId){

const results =
this.results(electionId);

let winner =
null;

let highest =
0;

Object.keys(results)
.forEach(option=>{

if(
results[option] >
highest
){

highest =
results[option];

winner =
option;

}

});

return winner;

}

};