/* =====================================

GEI CHRONICLE ENGINE
Version 1.0

===================================== */

const GEI_CHRONICLE = {

key:"geiChronicles",

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

create(title,story){

const chronicles =
this.get();

chronicles.unshift({

id:Date.now(),

title,

story,

date:
new Date()
.toISOString()

});

if(
chronicles.length > 100
){

chronicles.length = 100;

}

this.save(
chronicles
);

},

all(){

return this.get();

},

latest(){

return this.get()[0];

},

generate(){

if(
typeof GEI_HISTORY ===
"undefined"
){

return null;

}

const events =
GEI_HISTORY.latest(5);

if(
events.length === 0
){

return null;

}

let narrative = "";

events.forEach(event=>{

switch(event.type){

case "research":

narrative +=

`Researchers completed ${event.description}. `;

break;

case "technology":

narrative +=

`${event.description} became available to civilization. `;

break;

case "guild":

narrative +=

`New members joined ${event.description}. `;

break;

case "destiny":

narrative +=

`A citizen embraced ${event.description}. `;

break;

case "companion":

narrative +=

`${event.description} entered service. `;

break;

case "council":

narrative +=

`${event.description} gained influence. `;

break;

case "age":

narrative +=

`Civilization entered ${event.description}. `;

break;

case "achievement":

narrative +=

`A notable achievement was earned. `;

break;

default:

narrative +=

`${event.description}. `;

}

});

const age =

typeof GEI_AGES !==
"undefined"

?

GEI_AGES.currentName()

:

"Unknown Age";

const title =

"📜 Chronicle of " +

age;

this.create(
title,
narrative
);

return narrative;

}

};