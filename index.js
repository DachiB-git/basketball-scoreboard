const scoreHome = document.getElementById("score-home");
const scoreGuest = document.getElementById("score-guest");

function addOneHome() {
    scoreHome.textContent++;
}
function addTwoHome() {
    addOneHome();
    addOneHome();
}
function addThreeHome(){
    addOneHome();
    addOneHome();
    addOneHome();
}
function addOneGuest() {
    scoreGuest.textContent++;
}
function addTwoGuest() {
    addOneGuest();
    addOneGuest();
}
function addThreeGuest(){
    addOneGuest();
    addOneGuest();
    addOneGuest();
}