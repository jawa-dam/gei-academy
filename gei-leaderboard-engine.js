/* =====================================

GEI LEADERBOARD ENGINE
Version 1.0

===================================== */

const GEI_LEADERBOARD = {

key:"geiLeaderboard",

getData(){

return JSON.parse(

localStorage.getItem(
this.key
)

) || [];

},

saveData(data){

localStorage.setItem(

this.key,

JSON.stringify(data)

);

},

submitPlayer(){

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

const streak =

JSON.parse(
localStorage.getItem(
"geiStreak"
)
|| "{}"
).best || 0;

const player =

JSON.parse(
localStorage.getItem(
"geiPlayer"
)
|| "{}"
);

const name =

player.name ||
"GEI Explorer";

const rank =

typeof GEI_REPUTATION !==
"undefined"

?

GEI_REPUTATION.rankTitle()

:

"Observer";

let board =
this.getData();

board.push({

name,
rank,
xp,
coins,
streak,

date:
new Date()
.toISOString()

});

board.sort(

(a,b)=>

b.xp-a.xp

);

board =
board.slice(0,25);

this.saveData(board);

},

topPlayers(){

return this.getData();

},

clearBoard(){

localStorage.removeItem(
this.key
);

}

};