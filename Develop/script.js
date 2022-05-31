var containerEl = $(".container");
var input = $("#input");

for (var i = 9; i <= 17; i++){
    var rows = $("<div class=row>");
    var saveBtn = $("<button class=col-1>");
    var text = $("<textarea class=col-10>");
    var time = $("<div class=col-1>")
    saveBtn.text('Save');
    time.text(i + ":00");
    rows.append(time)
    rows.append(saveBtn);
    rows.append(text);
    containerEl.append(rows);
}


// var submitNote = function (event) {
//     event.preventDefault();
//     //make sure submit button is the onebeing clicked
//     var inputEL = input.val();

//     var data = {
//         info: inputEL,
//     };

//     var guestbook = JSON.parse(localStorage.getItem("guestbook")) || [];

//     guestbook.push(data);

//     localStorage.setItem("guestbook", JSON.stringify(guestbook));

//     // printGuestData(inputEL);

//     input.val('');
// };

// var guestbook = JSON.parse(localStorage.getItem("guestbook")) || [];

// guestbook.forEach(function (item) {
//    console.log(item);
// });

// saveBtn.on('submit', submitNote);

var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

