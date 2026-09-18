"use strict"

var guest = document.getElementById('guest');
var checkoutlink = document.getElementById('checkout');

guest.addEventListener('click', function() {
    const col = document.getElementById('checkout');
    col.remove();
});


function onhold() {
    var hold = document.getElementById("hold").textContent = "On Hold";
}