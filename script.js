window.onload = function(){
    document.getElementsByClassName("bike")[0].style.animationName="firstMoveImage";
}
let button = document.getElementsByClassName("button")[0].children;

let text = document.getElementsByClassName("row-2")[0].children;
function textChange(j)
{
    for(let i=0 ; i<3 ; i++)
    {
        text[i].classList.remove("active");
    }
    text[j].classList.add("active");
}

function buttonClick(j)
{
    for(let i=0 ; i<3 ; i++)
    {
        button[i].classList.remove("active");
    }
    button[j].classList.add("active");
    textChange(j);
    if(j==0)
    {
        document.getElementsByClassName("bike")[0].style.animationName="firstMoveImage";
    }
    else if(j==1)
    {
        document.getElementsByClassName("bike")[0].style.animationName="secondMoveImage";   
    }
    else{
        document.getElementsByClassName("bike")[0].style.animationName="thirdMoveImage";  
    }
}
function view(){
    document.getElementsByClassName("menu-bar")[0].style.cssText="visibility:visible;";
}
function hide(){
    document.getElementsByClassName("menu-bar")[0].style.cssText="visibility:hidden;";
}