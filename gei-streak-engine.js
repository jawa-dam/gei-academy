/* =====================================

GEI STREAK ENGINE
Version 1.0

===================================== */

const GEI_STREAK = {

today(){

const d = new Date();

return d.getFullYear() + "-" +

(d.getMonth()+1) + "-" +

d.getDate();

},

data(){

return JSON.parse(

localStorage.getItem(
"geiStreak"
)

) || {

current:0,
best:0,
lastVisit:null

};

},

save(data){

localStorage.setItem(

"geiStreak",

JSON.stringify(data)

);

},

checkIn(){

const data =
this.data();

const today =
this.today();

if(
data.lastVisit === today
){

return data;

}

const lastDate =

data.lastVisit
? new Date(data.lastVisit)
: null;

const currentDate =
new Date(today);

let diffDays = 999;

if(lastDate){

diffDays =

Math.floor(

(currentDate-lastDate)

/

(1000*60*60*24)

);

}

if(
diffDays === 1
){

data.current++;

}
else if(
diffDays > 1
){

data.current = 1;

}
else{

if(data.current===0){

data.current = 1;

}

}

data.lastVisit =
today;

if(
data.current >
data.best
){

data.best =
data.current;

}

this.save(data);

this.giveMilestoneReward(
data.current
);

return data;

},

giveMilestoneReward(days){

const rewards = {

3:{
xp:100,
coins:25
},

7:{
xp:250,
coins:75
},

14:{
xp:500,
coins:150
},

30:{
xp:1000,
coins:300
},

100:{
xp:5000,
coins:1000
}

};

if(
!rewards[days]
){

return;
}

const reward =
rewards[days];

const rewardKey =

"geiStreakReward_" +
days;

if(
localStorage.getItem(
rewardKey
)
){

return;
}

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
xp + reward.xp
);

localStorage.setItem(
"geiCoins",
coins + reward.coins
);

localStorage.setItem(
rewardKey,
"claimed"
);

},

current(){

return this.data().current;

},

best(){

return this.data().best;

},

nextReward(){

const streak =
this.current();

if(streak < 3) return 3;
if(streak < 7) return 7;
if(streak < 14) return 14;
if(streak < 30) return 30;
if(streak < 100) return 100;

return "Legend";

}

};