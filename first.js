const newTime = new Date().toLocaleTimeString();


document.getElementById("button-click").addEventListener("click",function(){
    document.getElementById("button-click").disabled = true ;
    alert("Board updated successfully")
    document.getElementById("board-text").innerText = "05";
    document.getElementById("check-point").innerText = "24";
    document.getElementById("comment").innerText = "You have Complete  Fix Mobile button issue at " + newTime;


    
})
// completed button1

// completed button 2 
document.getElementById("button-click2").addEventListener("click",function(){
    document.getElementById("button-click2").disabled = true ;
    alert("Board updated successfully")
    document.getElementById("board-text").innerText = "04";
    document.getElementById("check-point").innerText = "25";
    document.getElementById("comment2").innerText = "You have Complete The task Add Dark mode at " + newTime;


    
})
// completed button 3
document.getElementById("button-click3").addEventListener("click",function(){
    document.getElementById("button-click3").disabled = true ;
    alert("Board updated successfully")
    document.getElementById("board-text").innerText = "03";
    document.getElementById("check-point").innerText = "26";
    document.getElementById("comment3").innerText = "You have Complete Optimize Home page at " + newTime;


    
})
// completed button 4
document.getElementById("button-click4").addEventListener("click",function(){
    document.getElementById("button-click4").disabled = true ;
    alert("Board updated successfully")
    document.getElementById("board-text").innerText = "02";
    document.getElementById("check-point").innerText = "27";
    document.getElementById("comment4").innerText = "You have Complete The Task Add Emoji at" +newTime;


    
})
// completed button 5
document.getElementById("button-click5").addEventListener("click",function(){
    document.getElementById("button-click5").disabled = true ;
    alert("Board updated successfully")
    document.getElementById("board-text").innerText = "01";
    document.getElementById("check-point").innerText = "28";
    
    document.getElementById("comment5").innerText = "You have Complete The Task OpenAI API at " + newTime;


    
})
// completed button 6
document.getElementById("button-click6").addEventListener("click",function(){
    document.getElementById("button-click6").disabled = true ;
    alert("Board updated successfully")
    alert("Congrates, you have completed all the task")
    document.getElementById("board-text").innerText = "00";
    document.getElementById("check-point").innerText = "29";
    
    document.getElementById("comment6").innerText = "You have Complete job searching at" + newTime;


    
})
// clear history button

document.getElementById("clear-button").addEventListener("click",function(){
    const RemoveButton = document.getElementById("element-to-remove");
    RemoveButton.remove();
})
//color button
let colors = ["lightblue", "lightgreen", "lightyellow", "lightcoral", "lightpink"];
  let currentIndex = 0;

  document.getElementById("color-change").addEventListener("click", function() {
    document.body.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length; 
  });



// current day

function displayDate() {
    const date = new Date();
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options); 
    
    document.getElementById("day").innerText = formattedDate;
  }

  window.onload = displayDate; 

// second html file
document.getElementById("Second-part").addEventListener("click", function() {
    window.location.href = "index2.html";
  });

// back to desk button

