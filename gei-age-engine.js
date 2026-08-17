/* =====================================

GEI AGE ENGINE
Version 1.0

===================================== */

const GEI_AGES = {

ages:[

{
id:"waters",

name:"🌊 Age of Waters",

level:1,

description:
"The first reservoirs and waterways emerge.",

theme:"#2fd2ff"
},

{
id:"foundations",

name:"🧱 Age of Foundations",

level:5,

description:
"Construction and containment begin.",

theme:"#c49a6c"
},

{
id:"industry",

name:"⚙ Age of Industry",

level:10,

description:
"Mechanical systems power civilization.",

theme:"#f310ba"
},

{
id:"energy",

name:"⚡ Age of Energy",

level:20,

description:
"Power generation expands rapidly.",

theme:"#ffd700"
},

{
id:"knowledge",

name:"👑 Age of Knowledge",

level:35,

description:
"Research and scholarship dominate.",

theme:"#ffffff"
},

{
id:"discovery",

name:"🚀 Age of Discovery",

level:50,

description:
"The universe expands beyond its origins.",

theme:"#00ffcc"
}

],

current(){

const civLevel =

GEI_CIVILIZATION.level();

let age =
this.ages[0];

this.ages.forEach(a=>{

if(
civLevel >= a.level
){

age = a;

}

});

return age;

},

next(){

const civLevel =
GEI_CIVILIZATION.level();

for(
let i=0;
i<this.ages.length;
i++
){

if(
civLevel <
this.ages[i].level
){

return this.ages[i];

}

}

return null;

},

progress(){

const current =
this.current();

const next =
this.next();

if(!next){

return 100;

}

const civLevel =
GEI_CIVILIZATION.level();

const currentLevel =
current.level;

const nextLevel =
next.level;

return Math.floor(

(
(civLevel-currentLevel)

/

(nextLevel-currentLevel)

)

*100

);

},

currentName(){

return this.current().name;

}

};