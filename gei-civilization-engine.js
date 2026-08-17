/* =====================================

GEI CIVILIZATION ENGINE
Version 1.0

===================================== */

const GEI_CIVILIZATION = {

key:"geiCivilization",

defaultState:{

population:100,

water:100,

infrastructure:100,

industry:100,

energy:100,

knowledge:100,

civilizationLevel:1

},

get(){

return JSON.parse(

localStorage.getItem(
this.key
)

) || {...this.defaultState};

},

save(data){

localStorage.setItem(
this.key,
JSON.stringify(data)
);

},

add(resource,amount){

const data =
this.get();

if(
typeof data[resource] ===
"undefined"
){

return;
}

data[resource] += amount;

this.calculateLevel(data);

this.save(data);

},

calculateLevel(data){

const total =

data.population +
data.water +
data.infrastructure +
data.industry +
data.energy +
data.knowledge;

data.civilizationLevel =

Math.floor(total / 600);

if(
data.civilizationLevel < 1
){

data.civilizationLevel = 1;

}

},

level(){

return this.get()
.civilizationLevel;

},

contribute(action){

const data =
this.get();

switch(action){

case "mission":

data.population += 2;
data.knowledge += 3;
break;

case "research":

data.knowledge += 10;
data.energy += 2;
break;

case "companion":

data.population += 1;
data.water += 2;
break;

case "guild":

data.infrastructure += 5;
break;

case "technology":

data.industry += 5;
data.energy += 5;
break;

case "event":

data.population += 5;
data.knowledge += 5;
break;

}

this.calculateLevel(data);
this.save(data);

},

stats(){

return this.get();

}

};