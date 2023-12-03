// ================set-time-=====================

let min = "00";
let sec = "00";
var minDisplay = document.getElementById('min')
var secDisplay = document.getElementById('sec')
let workMinutes = document.getElementById('work-input')
let interval ;
let backgroundColor = document.getElementById('section1')
var inputBox = document.getElementById("work-input");

var invalidChars = [
  "-",
  "+",
  "e",
];
inputBox.addEventListener("input", function() {
  this.value = this.value.replace(/[e\+\-]/gi, "");
});

inputBox.addEventListener("keydown", function(e) {
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
});
function workTimer() {
  // console.log(workMinutes.value)
    sec++;
    secDisplay.innerHTML = sec
  
    if(sec === 59){
    
         min++
         minDisplay.innerHTML = min
         sec = 0;
  
    }
    if(min == workMinutes.value){
      alert("your woking hour is complete now its break time")
      clearInterval(interval)
      stop()

      sec = "00";
      min = "00";
      secDisplay.innerHTML = sec   
      minDisplay.innerHTML = min   
      breakStart()
      
  }
  
  }
  function breakTimer() {
    // console.log(workMinutes.value)
       let heading = document.getElementById('heading')
       let breakMinutes = 5
       heading.innerHTML = "Break Time "
      
               backgroundColor.style = "background-color: rgb(33 235 77);"
      sec++;
      secDisplay.innerHTML = sec
    
      if(sec === 59){
      
           min++
           minDisplay.innerHTML = min
           sec = 0;
    
      }
      if(min == breakMinutes){
        alert("your break is over")
        stop()
        sec = "00";
        min = "00";
        secDisplay.innerHTML = sec   
        minDisplay.innerHTML = min
       
        start()
        backgroundColor.style = "background-color: rgb(255,55,55);"
        heading.innerHTML = "Keep working"  
        
    }
    
    }
 
  function start(){
    interval = setInterval(workTimer , 1000)
  }
  function breakStart(){
    interval = setInterval(breakTimer , 1000)
  }
// ========================continue-btn-disabled======================
document.getElementById('continue-btn').disabled = true;
document.getElementById('pause-btn').disabled = true;

  function disableButton(){
        document.getElementById('work-disable-btn').disabled = true;
        document.getElementById('continue-btn').disabled = true;
        // document.getElementById('break-disable-btn').disabled = true;
  }
  function enableButton(){
    document.getElementById('pause-btn').disabled = false;
    document.getElementById('work-disable-btn').disabled = false;
}
function stop(){
  clearInterval(interval)
}

function reset(){
  stop()
  sec = "00";
  min = "00";
  secDisplay.innerHTML = sec   
  minDisplay.innerHTML = min   
  backgroundColor.style = "background-color:rgb(255,55,55);"
  heading.innerHTML = "Keep working"

}

