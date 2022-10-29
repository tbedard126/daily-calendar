
// variables
const today = moment();
const saveButton = $('#saveBtn')
let currentTime = moment().hours()




function saveData() {
    console.log("did this work")
}


saveButton.click(saveData)


// sets the day of the month/year to the page
$("#currentDay").text(today.format("MMM Do, YYYY"));

// setting the colors to the text areas based on time of day
if (currentTime === currentTime) {
    $('textarea').addClass("present");
}
else {
    $('textarea').addClass("past");
}




// at the current time, corresponding text area should be red. the time in the past should be white, and
// the time in  future should be green

