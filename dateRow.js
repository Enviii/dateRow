/* 
	Created by Darshan Karkar
	www.dkarkar.me
	10/7/2013
*/

var date = new Date();
var day = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();
var day_0 = date.getDate(); //day with 0 in front
var month_0 = date.getMonth() + 1; //month with 0 in front
var month_1 = date.getMonth() + 1; //month with no 0 in front, only + 1

/* number of days in a given month & year. thanks stackoverflow. */
function getNumberOfDays(year, month) {
    var isLeap = ((year % 4) == 0 && ((year % 100) != 0 || (year % 400) == 0));
    return [31, (isLeap ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
} 

/* Autofill todays date */
$(document).ready(function autoFill() {
    if (month_0 < 10) month_0 = "0" + month_0;
    if (day_0 < 10) day_0 = "0" + day_0;
    var today = year + "-" + month_0 + "-" + day_0;
    $("#inputDate").attr("value", today);
    for (var i = 1; i <= getNumberOfDays(year, month); i++) {
        $("#dateRow").append("<li id='dateRow' class='nolist'><button class='btn btn-default btn-sm date' id='day" + i + "' onclick='fillCurrentDate(" + i + ")'>" + i + "</button></li>");
    }
    //Make todays day the active button when loaded
    $("#day" + day).addClass("active");
    $("#month" + month_1).addClass("active");
}); 

/* fill the date input with the number clicked from dateRow. */
function fillCurrentDate(day_0) {
    if (month_0 < 10) month_0 = "0" + month_0;
    if (day_0 < 10) day_0 = "0" + day_0;
    var clickDate = year + "-" + month_0 + "-" + day_0;
    $("button.date").removeClass("active");
    $("#inputDate").attr("value", clickDate);
} 

/* redo the dateRow with active month */
function redoMonth(monthClicked) {
    $("button").removeClass("active");
    $("li#dateRow").remove();

    function dateRow() {
        for (var i = 1; i <= getNumberOfDays(year, monthClicked); i++) {
            $("#dateRow").append("<li id='dateRow' class='nolist'><button class='btn btn-default btn-sm date' id='day" + i + "' onclick='fillButtonDate(" + monthClicked + "," + i + ")'>" + i + "</button></li>");
        }
    }
    dateRow();
} 

/* fill date field with input taken from buttons */
function fillButtonDate(monthButton, dates) {
    var monthButton = monthButton + 1;
    if (monthButton < 10) monthButton = "0" + monthButton;
    if (dates < 10) dates = "0" + dates;
    var clickDate = year + "-" + monthButton + "-" + dates;
    $("button.date").removeClass("active");
    $("#inputDate").attr("value", clickDate);
}