/* =====================================

GEI HOUSING ENGINE
Version 1.0

===================================== */

const GEI_HOUSING = {

structures:[

{
item:"damBuilder",
name:"🧱 Builder Workshop"
},

{
item:"engineerCrest",
name:"⚙ Engineer Pavilion"
},

{
item:"millBanner",
name:"🏭 Mill Monument"
},

{
item:"powerhouseTheme",
name:"⚡ Power Station"
},

{
item:"summitCrown",
name:"👑 Summit Throne"
}

],

ownedStructures(){

return this.structures.filter(

structure=>

GEI_INVENTORY.owns(
structure.item
)

);

},

count(){

return this.ownedStructures()
.length;

}

};