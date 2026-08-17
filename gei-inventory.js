/* =====================================

GEI INVENTORY SYSTEM
Version 1.0

===================================== */

const GEI_INVENTORY = {

getItems(){

return JSON.parse(

localStorage.getItem(
"geiInventory"
)

) || [];

},

saveItems(items){

localStorage.setItem(
"geiInventory",
JSON.stringify(items)
);

},

owns(itemId){

return this.getItems()
.includes(itemId);

},

addItem(itemId){

const items =
this.getItems();

if(
!items.includes(itemId)
){

items.push(itemId);

this.saveItems(items);

if(
typeof GEI_UI !==
"undefined"
){

GEI_UI.achievement(
"🎒 Item Added"
);

}

}

},

removeItem(itemId){

const items =
this.getItems()
.filter(

item => item !== itemId

);

this.saveItems(items);

},

count(){

return this.getItems().length;

}

};