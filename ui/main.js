console.log('Loaded!');

//Changing text of the main-text div
var element = document.getElementById('main-text');

element.innerHTML = 'New Value';

//Moving image of id madi
var img = document.getElementById('madi');

img.onclick  = function() {
    img.style.marginLeft = '100px';
};