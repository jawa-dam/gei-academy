/* =====================================

GEI WORLD DISCOVERY ENGINE
Version 1.0

===================================== */

const GEI_DISCOVERY = {

key:"geiDiscovery",

regions:[

{
id:"mountains",
name:"🏔 Mountains",
xp:50
},

{
id:"reservoir",
name:"🌊 Reservoir",
xp:75
},

{
id:"damDistrict",
name:"🧱 Dam District",
xp:100
},

{
id:"waterwheelValley",
name:"⚙ Waterwheel Valley",
xp:125
},

{
id:"millCity",
name:"🏙 Mill City",
xp:150
},

{
id:"powerhouseRidge",
name:"⚡ Powerhouse Ridge",
xp:175
},

{
id:"genesisSummit",
name:"👑 Genesis Summit",
xp:250
}

],

secretRegions:[

{
id:"forgottenCanal",
name:"🗝 Forgotten Canal",
xp:500
},

{
id:"ancientVault",
name:"📚 Ancient Vault",
xp:750
},

{
id:"skyReservoir",
name:"☁ Sky Reservoir",
xp:1000
}

],

discovered(){

return JSON.parse(
localStorage.getItem(this.key)
) || [];
},

save(data){

localStorage.setItem(
this.key,
JSON.stringify(data)
);

},

isDiscovered(id){

return this.discovered()
.includes(id);

},

discover(id){

const regions = [

...this.regions,
...this.secretRegions

];

const region =
regions.find(
r=>r.id===id
);

if(!region){

return false;
}

const found =
this.discovered();

if(
found.includes(id)
){

return false;
}

found.push(id);

this.save(found);

if(
typeof GEI_HISTORY !==
"undefined"
){

GEI_HISTORY.record(

"discovery",

"🗺 Region Discovered",

region.name

);

}

return region;

},

progress(){

const total =

this.regions.length +

this.secretRegions.length;

return Math.floor(

(
this.discovered().length
/
total
)
*100

);

},

randomSecret(){

const hidden =

this.secretRegions.filter(

r=>
!this.isDiscovered(r.id)

);

if(
hidden.length === 0
){

return null;
}

return hidden[
Math.floor(
Math.random() *
hidden.length
)
];

}

};