var inputBill = document.getElementById("bill"); 

var cashGiven = document.getElementById("cash"); 

var checkBtn = document.getElementById("btn"); 

var errMsg = document.getElementById("error"); 

var noOfNotes = document.querySelectorAll(".no-of-notes"); 

var notes = [2000, 500, 100, 20, 10, 5, 1]; 

  

function errorHandle(error) { 

    errMsg.style.display = "block"; 

    errMsg.innerText = error; 
} 

  

function hideMessage() { 

    errMsg.style.display = "none"; 
} 

  

function clickHandler() { 

    hideMessage(); 

    if (inputBill.value < 0) { 

        errorHandle("Please Enter a positive value"); 

    } else { 

        var remaining = cashGiven.value - inputBill.value; 

        if (remaining < 0) { 

            errorHandle("Give me more"); 

        } else { 

            for (var i = 0; i < notes.length; i++) { 

                const paisa = Math.trunc(remaining / notes[i]); 

                remaining %= notes[i]; 

                noOfNotes[i].innerText = paisa; 

  

            } 

  

        } 

    } 
} 

  

checkBtn.addEventListener("click", clickHandler);
