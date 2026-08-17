/* =====================================

GEI GUILD ENGINE
Version 1.0

===================================== */

const GEI_GUILDS = {

guilds:[

{
id:"mountain",

name:"🏔 Mountain Guild",

description:
"Masters of origins, elevation, and source waters.",

bonusXP:10,

color:"#2fd2ff"
},

{
id:"reservoir",

name:"🌊 Reservoir Guild",

description:
"Protectors of storage, containment, and the deep.",

bonusXP:15,

color:"#4ea0d6"
},

{
id:"builder",

name:"🧱 Builder Guild",

description:
"Architects of dams, structures, and foundations.",

bonusXP:20,

color:"#c49a6c"
},

{
id:"engineer",

name:"⚙ Engineer Guild",

description:
"Experts in waterwheel power and conversion.",

bonusXP:25,

color:"#f310ba"
},

{
id:"energy",

name:"⚡ Energy Guild",

description:
"Keepers of power systems and transmission.",

bonusXP:30,

color:"#ffd700"
},

{
id:"scholar",

name:"👑 Scholar Guild",

description:
"Students of the deepest GEI knowledge.",

bonusXP:35,

color:"#ffffff"
}

],

getGuild(){

return JSON.parse(

localStorage.getItem(
"geiGuild"
)

) || null;

},

join(guildId){

const guild =

this.guilds.find(

g => g.id === guildId

);

if(!guild){

return false;

}

localStorage.setItem(

"geiGuild",

JSON.stringify(guild)

);

return true;

},

leave(){

localStorage.removeItem(
"geiGuild"
);

},

currentGuild(){

return this.getGuild();

},

hasGuild(){

return this.getGuild() !== null;

},

guildName(){

const guild =
this.getGuild();

return guild
? guild.name
: "No Guild";

},

guildBonus(){

const guild =
this.getGuild();

return guild
? guild.bonusXP
: 0;

}

};