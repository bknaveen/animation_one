//to create event globally
var menu = document.getElementsByClassName("menu");
for(var i=0; i<menu.length; i++)
{
   menu[i].onclick = function(){
    // animator(this.value);  //this.value grda jun button maa click gareko xa tesko value get hunxa;
    var title = document.getElementById("title");
    title.className = this.value;
   }
}
/*function animator(classValue){
    var title = document.getElementById("title");
    title.className = classValue;
}*/

function darkMode(){
    var section = document.getElementById("section");
    var sidenav = document.getElementById("sidenav");
    var menuBox = document.getElementById("menu-box");
    var title = document.getElementById("title");
    var desc = document.getElementById("desc");
    var button = document.getElementsByTagName("button");

    if(section.style.background == "rgb(17, 17, 17)")
    {
        //white mode code
        section.style.background ="#FCE5CD";  
        sidenav.style.background = "#F7D7B5";
        sidenav.style.color = "black";
        title.style.color= "#351C75";
        desc.style.color = "#E69138";
        //white mode on button
        for(var i=0; i<button.length; i++)
        {
            button[i].style.color = "black";
        }
    }
    else
    {
        //dark mode code
        title.style.color = "#4672FE";
        desc.style.color = "white";
        section.style.background = "#111111";
        sidenav.style.background = "#15151D";
        sidenav.style.color = "white";

        //for button dark
        for(var i=0; i<button.length; i++)
        {
            button[i].style.color = "white";
        }
    }  
}