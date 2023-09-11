/* Slider */

var slide = document.getElementById("slider");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4= document.getElementById("btn4");

btn1.onclick = function(){
    slide.style.transform = "translateX(0px)";
    btn1.classList.add("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
    btn4.classList.remove("active");
}
btn2.onclick = function(){
    slide.style.transform = "translateX(-100%)";
    btn2.classList.add("active");
    btn1.classList.remove("active");
    btn3.classList.remove("active");
    btn4.classList.remove("active");
}

btn3.onclick = function(){
    slide.style.transform = "translateX(-200%)";
    btn3.classList.add("active");
    btn1.classList.remove("active");
    btn2.classList.remove("active");
    btn4.classList.remove("active");
}

btn4.onclick = function(){
    slide.style.transform = "translateX(-300%)";
    btn4.classList.add("active");
    btn1.classList.remove("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
} 

/* Feedback script */
const btn = document.querySelector("button");
const post = document.querySelector(".post");
const widget = document.querySelector(".star-wedget");
const editBtn = document.querySelector(".edit");
btn.onclick =()=>{
    widget.style.display = "none";
    post.style.display = "block";
    editBtn.onclick =()=>{
        widget.style.display = "block";
        post.style.display = "none";
        
    }
    return false;
}
