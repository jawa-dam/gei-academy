/* =====================================

GEI COUNCIL ENGINE
Version 1.0

===================================== */

const GEI_COUNCIL = {

key:"geiCouncil",

councils:[

{
id:"explorerCouncil",
name:"🏔 Council of Explorers",
destiny:"explorer"
},

{
id:"keeperCouncil",
name:"🌊 Council of Keepers",
destiny:"keeper"
},

{
id:"builderCouncil",
name:"🧱 Council of Builders",
destiny:"builder"
},

{
id:"engineerCouncil",
name:"⚙ Council of Engineers",
destiny:"engineer"
},

{
id:"energyCouncil",
name:"⚡ Council of Energy",
destiny:"energizer"
},

{
id:"scholarCouncil",
name:"👑 Council of Scholars",
destiny:"scholar"
}

],

requirements:{

minimumCivilizationLevel:10,
minimumDestinyLevel:5

},

eligible(){

if(
typeof GEI_DESTINY ===
"undefined"
){
return false;
}

if(
typeof GEI_CIVILIZATION ===
"undefined"
){
return false;
}

return (

GEI_DESTINY.level()

>=

this.requirements
.minimumDestinyLevel

&&

GEI_CIVILIZATION.level()

>=

this.requirements
.minimumCivilizationLevel

);

},

current(){

return JSON.parse(

localStorage.getItem(
this.key
)

) || null;

},

join(){

if(
!this.eligible()
){
return false;
}

const destiny =
GEI_DESTINY.get();

if(!destiny){
return false;
}

const council =

this.councils.find(

c =>

c.destiny ===
destiny.id

);

if(!council){
return false;
}

localStorage.setItem(

this.key,

JSON.stringify({

...council,

joined:
Date.now()

})

);

return true;

},

name(){

const council =
this.current();

return council
? council.name
: "No Council";

},

isMember(){

return this.current() !== null;

},

grantInfluence(amount){

let influence =

parseInt(
localStorage.getItem(
"geiInfluence"
)
) || 0;

influence += amount;

localStorage.setItem(
"geiInfluence",
influence
);

},

influence(){

return parseInt(

localStorage.getItem(
"geiInfluence"
)

) || 0;

}

};