$(function () {
    // variables
    const today = moment();
    const $container = $('.container');
    const currentHour = today.hour();


    // function for creating the calendar
    const createCalendar = () => {
        const times = [
            { text: '7AM', military: 7 },
            { text: '8AM', military: 8 },
            { text: '9AM', military: 9 },
            { text: '10AM', military: 10 },
            { text: '11AM', military: 11 },
            { text: '12PM', military: 12 },
            { text: '1PM', military: 13 },
            { text: '2PM', military: 14 },
            { text: '3PM', military: 15 },
        ];
        times.forEach(obj => {

            const $div = $('<div>').addClass('row time-block');
            const $div1 = $('<div>').addClass('hour col-1');
            const $textArea = $('<textarea>').addClass(
                `description col-10  ${checkCurrentTime(currentHour, obj.military)} ${obj.military}`).text(
                    localStorage.getItem(obj.military) != null ? localStorage.getItem(obj.military) : '');
            const $button = $('<button>').addClass('saveBtn col-1 btn').attr('time', obj.military);
            const $i = $('<i>').addClass('fas fa-save');

            $div.append($div1.text(obj.text), $textArea, $button.append($i));

            return $container.append($div);
        });
    };
    // function for changing the colors of the text areas based on time of day
    const checkCurrentTime = (currentTime, militaryTime) => {
        if (currentTime === militaryTime) {
            return 'present';
        } else if (currentTime > militaryTime) {
            return 'past';
        } else {
            return 'future';
        }
    };

    // Create divs for calendar
    createCalendar();


    // makes the save buttons clickable and saves the contents of the text area to local storage
    $('body').on('click', 'button.saveBtn', function () {
        const militaryTimeClicked = $(this).attr('time');
        const textAreaValue = $(`textarea.${militaryTimeClicked}`).val();
        localStorage.setItem(militaryTimeClicked, textAreaValue);


    });

    // sets the day of the month/year to the page
    $('#currentDay').text(today.format('MMM Do, YYYY'));


})