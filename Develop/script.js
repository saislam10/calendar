var containerEl = $(".container");
var input = $("#input");

for (var i = 9; i <= 17; i++) {
    var rows = $("<div class=row>");
    var saveBtn = $("<button>").attr('class', 'col-1 saveBtn');
    var text = $("<textarea>").attr('class', 'col-10')
    var time = $("<div>").attr('class', 'col-1 hour d-flex align-items-center justify-content-center');
    saveBtn.text('Save');
    if (i < 12) {
        time.text(i + "AM");
    }
    else if (i === 12) {
        time.text(i + "PM");
    }
    else {
        time.text(-12 + i + "PM")
    }
    rows.append(time)
    rows.append(text);
    rows.append(saveBtn);
    containerEl.append(rows);

    if (moment().hour() > i){
        text.attr('class', 'past col-10')
    }
    if (moment().hour() === i){
        text.attr('class', 'present col-10')
    }
    if (moment().hour() < i){
        text.attr('class', 'future col-10')
    }
}


// var submitNote = function (event) {
//     event.preventDefault();
//     //make sure submit button is the onebeing clicked
//     var inputEL = input.val();

//     var data = {
//         info: inputEL,
//     };

//     var reminders = JSON.parse(localStorage.getItem("reminders")) || [];

//     reminders.push(data);

//     localStorage.setItem("reminders", JSON.stringify(reminders));



//     input.val('');
// };

// var guestbook = JSON.parse(localStorage.getItem("guestbook")) || [];

// guestbook.forEach(function (item) {
//    console.log(item);
// });

// saveBtn.on('submit', submitNote);

var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));


