var mouse_event="empty";
var last_position_x,last_position_y;

color="black";
Widthofline=1;
Radius=20
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
    color=document.getElementById("color").value;
    Widthofline=document.getElementById("widthofline").value;
    Radius=document.getElementById("radius").value;
    mouse_event="mousedown";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    mouse_event="mouseleave";
    console.log("my_mouseleave");
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouse_event="mouseUP";
    console.log("my_mouseUP");
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;

    if(mouse_event=="mousedown"){
        console.log("Current position of x and y cordinates=");
        console.log("x="+ current_position_of_mouse_x +"y="+current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=Widthofline;
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,Radius,0,2*Math.PI);
        ctx.stroke();
    }
    last_position_x=current_position_of_mouse_x;
    last_position_y=current_position_of_mouse_y;
}

function cleararea()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
}