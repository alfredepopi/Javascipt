let golds = 10000;
let gps = 0;
let click = 0


var minions = [
  { id: 1, name: "Mario", cost: 10, gps: 0.1, owned: 0 },
  { id: 2, name: "Luigi", cost: 100, gps: 1, owned: 0 },
  { id: 3, name: "Bowser", cost: 500, gps: 5, owned: 0 }
];


function addGold(x)
{
    golds = x + golds;
    displayGolds()    
}

function displayGolds()
{
  document.getElementById("gold").innerHTML = "Coins:" + " " + golds.toFixed(2);
}

function Gps()
{
  golds = golds + gps;
  displayGolds();
}
setInterval(Gps, 1000);


function getGPS()
{
gps = gps + minions[a].gps;
displayGPS();
}

function displayGPS()
{
  document.getElementById("gps").innerHTML = "CPS:" + " " + gps.toFixed(2);
}


function buyMinion(id)
{
for (a = 0; a < minions.length; a++){
  if (minions[a].id == id){
    if (golds >= minions[a].cost) {
      more_exp();
      getGPS();
      addowned();
      golds = golds - minions[a].cost;
      double_gps();
  }
}
}
}

function double_gps()
{
  for(a = 0; a < minions.length; a++){
    if (minions[a].owned == 25 || minions[a].owned == 50 || minions[a].owned == 100 || minions[a].owned == 250 || minions[a].owned == 1000) {
    minions[a].gps = minions[a].gps * 2;
    }
  }
}
  
function save_game()
{
  localStorage.setItem("golds", golds);
  localStorage.setItem("gps", gps);
  localStorage.setItem("cost1", minions[0].cost);
  localStorage.setItem("cost2", minions[1].cost);
  localStorage.setItem("cost3", minions[2].cost);
  localStorage.setItem("onwed1", minions[0].onwed);
  localStorage.setItem("onwed2", minions[1].onwed);
  localStorage.setItem("onwed3", minions[2].onwed);
  localStorage.setItem("minions", minions);
  
}

function resume_game()
{
gps = localStorage.getItem("gps", gps);
gps = parseInt(gps);
document.getElementById("gps").innerHTML = gps.toFixed(2);
golds = localStorage.getItem("golds", golds);
golds = parseInt(golds);
document.getElementById("gold").innerHTML = golds.toFixed(2);
minions = localStorage.getItem("minions");
minions[0].cost = localStorage.getItem("cost1", minions[0].cost);
minions[1].cost = localStorage.getItem("cost2", minions[1].cost);
minions[2].cost = localStorage.getItem("cost3", minions[2].cost);
minions[0].onwed = localStorage.getItem("onwed1", minions[0].onwed);
minions[1].onwed = localStorage.getItem("owned2", minions[1].onwed);
minions[2].owned = localStorage.getItem("onwed3", minions[2].onwed);
}

function more_exp()
{
  minions[a].cost = minions[a].cost * 1.15;
  displaycost();
}

function displaycost()
{
  document.getElementById("cost1").innerHTML = "Cost:" + " " + minions[0].cost.toFixed(2);
  document.getElementById("cost2").innerHTML = "Cost:" + " " + minions[1].cost.toFixed(2);
  document.getElementById("cost3").innerHTML = "Cost:" + " " + minions[2].cost.toFixed(2);
}

function displayowned()
{
  document.getElementById("owned1").innerHTML = "Owned:" + " " + minions[0].owned.toFixed(0);
  document.getElementById("owned2").innerHTML = "Owned:" + " " + minions[1].owned.toFixed(0);
  document.getElementById("owned3").innerHTML = "Owned:" + " " + minions[2].owned.toFixed(0);
}

function addowned()
{
  minions[a].owned = minions[a].owned + 1;
  displayowned();
}