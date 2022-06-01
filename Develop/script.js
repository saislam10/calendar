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
    $(i).children().eq(1).val(localStorage.getItem(i));


}
$('button').on("click", function (event) {
    localStorage.setItem($(event.target).parent().attr("saveBtn"), $(event.target).parent().children().eq(1).val());
});





