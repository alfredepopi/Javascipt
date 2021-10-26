function hello_world()
{
    console.log("Hello World!");
}

function ping()
{
     setInterval(function(){ console.log("ping"); }, 1000);   
}

function my_timer(x)
{
    x = 10;
    setInterval(function(){ console.log(x--); }, 1000);
}

function my_timer2(x)
{
    x = 10;
    setInterval(function(){ document.getElementById("timer").innerHTML = x--}, 1000); 
}



function addPoints(points)
{
    points = 10
    playerpoints = 0
    var playerpoints = points + playerpoints; 
    document.getElementById("points").innerHTML =(playerpoints);
}
    
