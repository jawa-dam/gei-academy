/* =====================================

GEI HISTORY ENGINE
Version 1.0

===================================== */

const GEI_HISTORY = {

key:"geiHistory",

get(){

return JSON.parse(

localStorage.getItem(
this.key
)

) || [];

},

save(data){

localStorage.setItem(
this.key,
JSON.stringify(data)
);

},

record(type,title,description){

const history =
this.get();

history.unshift({

id:
Date.now(),

type,

title,

description,

timestamp:
new Date()
.toISOString()

});

if(
history.length > 500
){

history.length = 500;

}

this.save(history);

},

all(){

return this.get();

},

latest(count=10){

return this.get()
.slice(0,count);

},

clear(){

localStorage.removeItem(
this.key
);

},

recordAge(ageName){

this.record(

"age",

"⏳ New Age Reached",

ageName

);

},

recordResearch(project){

this.record(

"research",

"🔬 Research Complete",

project.title

);

},

recordTechnology(tech){

this.record(

"technology",

"⚙ Technology Unlocked",

tech.title

);

},

recordGuild(guild){

this.record(

"guild",

"🏛 Guild Joined",

guild.name

);

},

recordDestiny(destiny){

this.record(

"destiny",

"👑 Destiny Chosen",

destiny.name

);

},

recordCouncil(council){

this.record(

"council",

"🏛 Council Membership",

council.name

);

},

recordCompanion(companion){

this.record(

"companion",

"🦫 Companion Selected",

companion.name

);

},

recordEvent(event){

this.record(

"event",

"🌎 World Event",

event.title

);

},

recordAchievement(name){

this.record(

"achievement",

"🏆 Achievement Earned",

name

);

}

};

GEI_HISTORY.record(

"expedition",

"🧭 Expedition Complete",

region.name

);