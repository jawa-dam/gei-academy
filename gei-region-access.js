/* =====================================

GEI REGION ACCESS ENGINE
Version 1.0

===================================== */

const GEI_ACCESS = {

requirements:{

mountains:1,

reservoir:2,

damDistrict:3,

waterwheelValley:4,

millCity:5,

powerhouseRidge:7,

genesisSummit:9

},

canEnter(region){

const requiredLevel =

this.requirements[region] || 1;

const playerLevel =

GEI_REPUTATION.rankLevel();

return playerLevel >= requiredLevel;

},

requiredLevel(region){

return this.requirements[region] || 1;

},

requiredTitle(region){

const level =

this.requiredLevel(region);

const rank =

GEI_REPUTATION.ranks.find(

r => r.level === level

);

return rank
? rank.title
: "Unknown";

},

progressMessage(region){

if(
this.canEnter(region)
){

return "Access Granted";

}

return (

"Requires " +

this.requiredTitle(region)

);

}

};