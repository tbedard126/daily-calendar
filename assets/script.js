
// variables
const today = moment();
const saveButton = $('#saveBtn')
let currentTime = moment().hours()






console.log(currentTime)



// sets the day of the month/year to the page
$("#currentDay").text(today.format("MMM Do, YYYY"));

if (currentTime === 22) {
    $('textarea').css("backround-color", "gray");
}