





function randomizer(){

const sex = ["Male", "Female"];
const age = ["Adolescent", "Adult", "Elder"];
const height = ["8'0","8'1","8'2","8'3","8'4","8'5","8'6","8'7","8'8","8'9","8'10","8'11","9'0","9'1","9'2","9'3","9'4","9'5","9'6","9'7","9'8","9'9","9'10","9'11","10'0"];
const skin = ["Fair","Light","Peachy","Warm","Olive","Tan","Deep","Dark","Freckled","Light Brown","Medium Brown","Dark Brown","Light Olive","Medium Olive","Dark Olive","Light Tan","Dark Tan"];
const pelt = ["White","Black","Medium Brown","Dark Brown","Light Chestnut","Dark Chestnut","Light Golden","Deep Golden","Silvery Grey","Dark Grey","Warm Grey","Cool Grey","Light Tan","Dark Tan"];
const hairColor = ["Black","Dark Brown","Light Brown","Medium Brown","Reddish Brown","Platinum","Blonde","Auburn","Ginger","Golden Blonde","Strawberry Blonde","Silver","Grey","White"];
const hairTexture = ["Straight","Wavy","Curly"];
const marking1 = ["No white markings","Paint Tobino","Paint Overo","Paint Splash","Leopard Appaloosa","Blanket Appaloosa","Few spot Appaloosa","Roan","4 White socks (anywhere up to the knees)","3 White socks (anywhere up to the knees)","2 White socks (anywhere up to the knees)","1 White socks (anywhere up to the knees)"];
const marking2 = ["No other markings","Darker legs","Lighter legs","Dun markings"];


const selectedSex = sex[Math.floor(Math.random() * sex.length)];
const selectedAge = age[Math.floor(Math.random() * age.length)];
const selectedHeight = height[Math.floor(Math.random() * height.length)];
const selectedSkin = skin[Math.floor(Math.random() * skin.length)];
const selectedPelt = pelt[Math.floor(Math.random() * pelt.length)];
const selectedHairColor = hairColor[Math.floor(Math.random() * hairColor.length)];
const selectedHairTexture = hairTexture[Math.floor(Math.random() * hairTexture.length)];
const selectedMarking1 = marking1[Math.floor(Math.random() * marking1.length)];
const selectedMarking2 = marking2[Math.floor(Math.random() * marking2.length)];


document.getElementById("sex").innerHTML = " " + selectedSex;
document.getElementById("sex").style.fontWeight = "normal";
document.getElementById("age").innerHTML = " " + selectedAge;
document.getElementById("age").style.fontWeight = "normal";
document.getElementById("height").innerHTML = " " + selectedHeight;
document.getElementById("height").style.fontWeight = "normal";
document.getElementById("skin").innerHTML = " " + selectedSkin;
document.getElementById("skin").style.fontWeight = "normal";
document.getElementById("pelt").innerHTML = " " + selectedPelt;
document.getElementById("pelt").style.fontWeight = "normal";
document.getElementById("hair-color").innerHTML = " " + selectedHairColor;
document.getElementById("hair-color").style.fontWeight = "normal";
document.getElementById("hair-texture").innerHTML = " " + selectedHairTexture;
document.getElementById("hair-texture").style.fontWeight = "normal";
document.getElementById("marking1").innerHTML = " " + selectedMarking1;
document.getElementById("marking1").style.fontWeight = "normal";
document.getElementById("marking2").innerHTML = " " + selectedMarking2;
document.getElementById("marking2").style.fontWeight = "normal";

};
