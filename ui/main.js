console.log('Loaded!');

//Changing text of the main-text div
var element = document.getElementById('main-text');

element.innerHTML = 'New Value';

//Moving image of id madi
var img = document.getElementById('madi');

var marginLeft = 0;

function moveRight() {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}


img.onclick  = function() {
    var inetrval = setInterval(moveRight, 50);
};