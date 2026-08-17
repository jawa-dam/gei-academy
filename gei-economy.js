/* =====================================

GEI ECONOMY ENGINE
Version 1.0

===================================== */

const GEI_ECONOMY = {

getCoins(){

return Number(
localStorage.getItem(
"geiCoins"
)
)||0;

},

setCoins(amount){

localStorage.setItem(
"geiCoins",
amount
);

},

addCoins(amount){

const total =
this.getCoins() + amount;

this.setCoins(total);

if(
typeof GEI_UI !==
"undefined"
){

GEI_UI.toast(
"🪙 +" + amount +
" GEI Coins",
"success"
);

}

return total;

},

spendCoins(amount){

if(
this.getCoins() < amount
){

if(
typeof GEI_UI !==
"undefined"
){

GEI_UI.warning(
"Not enough GEI Coins"
);

}

return false;

}

this.setCoins(
this.getCoins() - amount
);

return true;

},

canAfford(amount){

return this.getCoins() >= amount;

}

};
dailyReward(){

const today =
new Date().toDateString();

const last =
localStorage.getItem(
"dailyRewardDate"
);

if(last === today)
return;

localStorage.setItem(
"dailyRewardDate",
today
);

this.addCoins(50);

if(
typeof GEI_UI !==
"undefined"
){

GEI_UI.toast(
"🎁 Daily Reward +50 Coins"
);

}

}