/* =====================================

GEI WORLD ENGINE
Version 1.0

===================================== */

const GEI_WORLD = {

regions:[

{
id:"mountains",
name:"⛰ Mountains"
},

{
id:"reservoir",
name:"🌊 Reservoir Basin"
},

{
id:"damDistrict",
name:"🧱 Dam District"
},

{
id:"waterwheelValley",
name:"⚙ Waterwheel Valley"
},

{
id:"millCity",
name:"🏭 Mill City"
},

{
id:"powerhouseRidge",
name:"⚡ Powerhouse Ridge"
},

{
id:"genesisSummit",
name:"👑 Genesis Summit"
}

],

discover(regionId){

if(
localStorage.getItem(
"region_" + regionId
)
){
return;
}

localStorage.setItem(
"region_" + regionId,
"discovered"
);

if(
typeof GEI_UI !==
"undefined"
){

GEI_UI.achievement(
"🌎 New Region Discovered"
);

}

if(
typeof GEI_ACHIEVEMENTS !==
"undefined"
){

GEI_ACHIEVEMENTS.run();

}

},

isDiscovered(regionId){

return localStorage.getItem(
"region_" + regionId
)==="discovered";

},

countDiscovered(){

let total = 0;

this.regions.forEach(

region=>{

if(
this.isDiscovered(
region.id
)
){
total++;
}

}

);

return total;

},

worldCompletion(){

return Math.floor(

(this.countDiscovered()/

this.regions.length)

*100

);

},

visit(regionId){

localStorage.setItem(
"lastRegion",
regionId
);

this.discover(regionId);

},

lastRegion(){

return localStorage.getItem(
"lastRegion"
) || "mountains";

},

unlockFastTravel(regionId){

localStorage.setItem(
"fasttravel_" + regionId,
"unlocked"
);

},

canFastTravel(regionId){

return localStorage.getItem(
"fasttravel_" + regionId
)==="unlocked";

},

unlockAllRegions(){

this.regions.forEach(

region=>{

localStorage.setItem(
"region_" + region.id,
"discovered"
);

}

);

},

regionName(regionId){

const region =
this.regions.find(
r => r.id === regionId
);

return region
? region.name
: "Unknown";

}

};