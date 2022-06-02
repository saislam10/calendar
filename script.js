var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));
for (var i = 9; i <= 17; i++) {
    var containerEl = $(".container");
    var rows = $("<div class=row>");
    var saveBtn = $("<button>").attr('class', 'col-1 saveBtn');
    var text = $("<textarea>").attr('class', 'col-10 text')
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

    if (localStorage.getItem("reminders")){
    text.val(JSON.parse(localStorage.getItem("reminders"))[time.text()]);
    }

    rows.append(time)
    rows.append(text);
    rows.append(saveBtn);
    containerEl.append(rows);
    if (moment().hour() > i) {
        text.attr('class', 'past col-10')
    }
    if (moment().hour() === i) {
        text.attr('class', 'present col-10')
    }
    if (moment().hour() < i) {
        text.attr('class', 'future col-10')
    }
}
$('button').on("click", function (event) {
    var storage = JSON.parse(localStorage.getItem("reminders")) || {};
    var array = $(event.target).parent().children();
    var timeKey = $(array[0]).text();
    var inputValue = $(array[1]).val();
    storage[timeKey] = inputValue
    localStorage.setItem("reminders", JSON.stringify(storage));
});





