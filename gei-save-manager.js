/* =====================================

GEI SAVE MANAGER
Version 1.0

===================================== */

const GEI_SAVE = {

exportData(){

const saveData = {

version:"1.0",

timestamp:
new Date().toISOString(),

player:

JSON.parse(
localStorage.getItem(
"geiPlayer"
)
) || {},

xp:

localStorage.getItem(
"geiXP"
) || 0,

coins:

localStorage.getItem(
"geiCoins"
) || 0,

inventory:

JSON.parse(
localStorage.getItem(
"geiInventory"
)
) || [],

achievements:

JSON.parse(
localStorage.getItem(
"geiAchievements"
)
) || [],

world:

JSON.parse(
localStorage.getItem(
"geiWorld"
)
) || {},

quests:

JSON.parse(
localStorage.getItem(
"geiQuests"
)
) || {}

};

return saveData;

},

downloadSave(){

const data =
this.exportData();

const blob =
new Blob(

[
JSON.stringify(
data,
null,
2
)
],

{
type:
"application/json"
}

);

const url =
URL.createObjectURL(
blob
);

const link =
document.createElement(
"a"
);

link.href = url;

link.download =

"GEI_SAVE_" +

Date.now() +

".json";

document.body
.appendChild(link);

link.click();

link.remove();

URL.revokeObjectURL(
url
);

},

importSave(file){

const reader =
new FileReader();

reader.onload =
(event)=>{

try{

const save =

JSON.parse(
event.target.result
);

if(
!save.version
){

alert(
"Invalid Save File"
);

return;

}

localStorage.setItem(
"geiXP",
save.xp
);

localStorage.setItem(
"geiCoins",
save.coins
);

localStorage.setItem(
"geiPlayer",
JSON.stringify(
save.player
)
);

localStorage.setItem(
"geiInventory",
JSON.stringify(
save.inventory
)
);

localStorage.setItem(
"geiAchievements",
JSON.stringify(
save.achievements
)
);

localStorage.setItem(
"geiWorld",
JSON.stringify(
save.world
)
);

localStorage.setItem(
"geiQuests",
JSON.stringify(
save.quests
)
);

alert(
"Save Imported Successfully"
);

location.reload();

}
catch(error){

alert(
"Import Failed"
);

}

};

reader.readAsText(
file
);

},

deleteEverything(){

const confirmDelete =
confirm(

"Delete ALL GEI Progress?"

);

if(
!confirmDelete
){

return;

}

localStorage.removeItem(
"geiXP"
);

localStorage.removeItem(
"geiCoins"
);

localStorage.removeItem(
"geiInventory"
);

localStorage.removeItem(
"geiAchievements"
);

localStorage.removeItem(
"geiWorld"
);

localStorage.removeItem(
"geiPlayer"
);

localStorage.removeItem(
"geiQuests"
);

alert(
"Progress Reset"
);

location.reload();

}

};