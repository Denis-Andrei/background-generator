var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.querySelector("button");



function setRandomBackground(){
    var a =  Math.floor(Math.random() * Math.floor(255));
    var b =  Math.floor(Math.random() * Math.floor(255));
    var c =  Math.floor(Math.random() * Math.floor(255));
    var x= (0 + a.toString(16)).slice(-2);
    var y= (0 + b.toString(16)).slice(-2);
    var z= (0 + c.toString(16)).slice(-2);

    color1.value = "#" + x +y +z;
    color2.value = "#" + y +z +x;

    body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
    css.innerHTML = `${color1.value},${color2.value};`;

}

randomBtn.addEventListener("click", setRandomBackground);



function setGradient(){
    body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";

    css.innerHTML = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);



// "#"+c1+c2+c3;
// "rgb("+c1+","+c2+","+c3+")";