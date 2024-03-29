const billAmt = document.querySelector("#billAmt");
const nextBTN = document.querySelector("#next-btn");
// const bill = console.log(billAmt.value);

const cashReceivedDiv = document.querySelector(".cashReceivedArea");
const calculateBTN = document.querySelector("#calculate-btn");
const message = document.querySelector("#error-message")
// calculateBTN.addEventListener("click", () => console.log(cashReceived.value));

const noOfNotes = document.querySelectorAll(".noOfNotes")
const outputTable = document.querySelector(".changeReturn")
const outputDiv = document.querySelector("#output")


const arrayNoteAmt = [2000, 500, 200, 100, 20, 10, 5, 1]


function hideMessage() {
    message.style.display = "none";
}


function showMessage(msg) {
    message.style.display = "block",
        message.style.fontWeight = "bold"
    message.style.color = "red"
    message.innerText = msg;
};

// trial with next button- check on bill amount


nextBTN.addEventListener('click', function () {
    hideMessage();
    if (Number(billAmt.value) > 0 ) {
        nextBTN.style.display = "none";
        cashReceivedDiv.style.display = "block";
    } else {
        showMessage("Bill amount must be greater than zero")
    }
})




calculateBTN.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage();
    let billAmtValue = Number(billAmt.value)
    let cashReceivedValue = Number(cashReceived.value);

   


     if (billAmtValue === cashReceivedValue) {
        showMessage("bill amount equal to cash received")
        outputTable.style.display = "none";
        outputDiv.style.display ="none";

    }
    else if (billAmtValue > cashReceivedValue) {
        showMessage("Cash  received is less than bill amount, please enter right amount");
        outputTable.style.display = "none";
        outputDiv.style.display ="none";
    }

   else if (cashReceivedValue > billAmtValue) {
        const amountToBeReturned = cashReceivedValue - billAmtValue;
        calculateChange(amountToBeReturned);
        outputDiv.innerHTML = "Please return Rs" + " " + (amountToBeReturned) + " " + "to the customer";
        outputDiv.style.fontWeight = "bold"

        outputTable.style.display = "block";
    } 
    
    
    
      else {
        showMessage("Please enter valid amount")
    }

})

// console.log(outputDiv)

// // calculating number of notes to be returned

function calculateChange(amountToBeReturned) {
    for (let i = 0; i < arrayNoteAmt.length; i++) {
        const numberOfNotes = Math.trunc(
            amountToBeReturned / arrayNoteAmt[i]
        );
        // amount left after deducting 1st step
        amountToBeReturned = amountToBeReturned % arrayNoteAmt[i];
        // updating nu,ber of notes in the notes table
        noOfNotes[i].innerText = numberOfNotes;
    }
}