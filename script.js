/*  MODE */
var icon = document.getElementById("icon");
if(icon!=null){
  icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
      icon.src = "./sun.png";
    }
    else {
      icon.src = "./moon.png";
    }
  }
}

/* Slider */
document.addEventListener("DOMContentLoaded", function () {
  var slide = document.getElementById("slider");
  var btn1 = document.getElementById("btn1");
  var btn2 = document.getElementById("btn2");
  var btn3 = document.getElementById("btn3");
  var btn4 = document.getElementById("btn4");
   if(btn1!=null){
    btn1.onclick = function() {
      slide.style.transform = "translateX(0px)";
      btn1.classList.add("active");
      btn2.classList.remove("active");
      btn3.classList.remove("active");
      btn4.classList.remove("active");
    }
   }
   if(btn2!=null){
    btn2.onclick = function() {
      slide.style.transform = "translateX(-100%)";
      btn2.classList.add("active");
      btn1.classList.remove("active");
      btn3.classList.remove("active");
      btn4.classList.remove("active");
    }
   }

   if(btn3!=null){
    btn3.onclick = function() {
      slide.style.transform = "translateX(-200%)";
      btn3.classList.add("active");
      btn1.classList.remove("active");
      btn2.classList.remove("active");
      btn4.classList.remove("active");
    }
   }

   if(btn4!=null){
    btn4.onclick = function() {
      slide.style.transform = "translateX(-300%)";
      btn4.classList.add("active");
      btn1.classList.remove("active");
      btn2.classList.remove("active");
      btn3.classList.remove("active");
    }
   }
});

/* Feedback script */


/* const btn = document.querySelector("button");
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
} */


const firebaseConfig = {
  apiKey: "AIzaSyDFo6ChvrJ4nvumanLz03xkW_R9XRuDKH8",
  authDomain: "rescuer-93f65.firebaseapp.com",
  databaseURL: "https://rescuer-93f65-default-rtdb.firebaseio.com",
  projectId: "rescuer-93f65",
  storageBucket: "rescuer-93f65.appspot.com",
  messagingSenderId: "773889871752",
  appId: "1:773889871752:web:d3025f181688f42f07743d"
};


firebase.initializeApp(firebaseConfig);


var feedbackFormDB = firebase.database().ref("feedback");

document.getElementById("feedbackForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const rate = formData.get('rate');
  var msgContent = getElementVal("msgContent");
  saveMessages(rate, msgContent);

  document.querySelector(".alert").style.display = "block";

  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 1000);

  document.getElementById("feedbackForm").reset();

}

const saveMessages = (rate, msgContent) => {
  var newfeedbackForm = feedbackFormDB.push();

  newfeedbackForm.set({
    rate: rate,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

