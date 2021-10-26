function call_alert()
{
    alert("Hello");
}

function concate(beginWith, endingWith)
{
     beginWith = 'Alfred';
     endingWith = 'Epopi';

    console.log(beginWith.concat(' ', endingWith));
}

function aff_x_times(x, str)
{
    x = 3;
    str = 'Alfred';

    console.log(str.concat('\n').repeat(x));
}

function addHello(parent)
{
 parent = document.getElementById("add").innerHTML = "Hello World";
}

function addChild(parent, child)
{
    parent = document.getElementById("prenom").innerHTML = "Alfred";
    child = document.getElementById("nom").innerHTML = "Epopi";
}

function hideDiv(div)
{
    div = document.getElementById("hide").style.visibility = "hidden";
}

function getRandom()
{
    document.getElementById("demo").innerHTML =
Math.floor(Math.random() * 100);
}

function color()
{
    var bgcolorlist=new Array("red", "blue", "green", "grey");

document.bgColor=bgcolorlist[Math.floor(Math.random()*bgcolorlist.length)];
}