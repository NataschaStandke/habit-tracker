var date = new Date();

var currentMonth = date.getMonth();
var currentDay = date.getDay();
var currentDate = date.getDate();
var currentYear = date.getFullYear();

var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

var title = document.getElementById("title");
title.innerHTML = months[currentMonth];

var habitTitle = document.getElementById("habitTitle");
habitTitle.onclick = function () {

    let habits = prompt("Enter a new habit you would like to track: ", habitTitle.innerHTML);
    if (habits.length == 0) {
        habitTitle.innerHTML = "Click to add a new habit";
    } else {
        habitTitle.innerHTML = habits;
    }
}

var daysInTheMonthList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var daysInThisMonth = daysInTheMonthList[currentMonth];

var daysCompleted = 0;
var totalDays = document.getElementById("totalDays");
totalDays.innerHTML = "0/" + daysInThisMonth;

/* Populate the calendar with days */
var dayCount = 0;
var rowCount = 0;
var days = document.getElementsByClassName("days");

for (var i = 0; i < days.length; i++) {
    var day = days[i].getElementsByClassName("day");
    for (var j = 0; j < day.length; j++) {

        if (dayCount == currentDate - 1) {
            day[j].style.color = "rgb(234, 1, 144)";
            day[j].style.border = "2px solid black";
        } else {
            day[j].style.color = "";
            day[j].style.border = "";
        }

        if (dayCount < daysInThisMonth) {
            day[j].innerHTML = dayCount + 1;
            day[j].id = "day" + (dayCount + 1);
            dayCount++;
        } else {
            day[j].innerHTML = "";
            day[j].style.backgroundColor = "white";
            day[j].id = "";
        }
    }
    rowCount++;
}

var completed = new Array(31);
for (var i = 0; i < dayCount; i++) {
    var tempString =
        "" + (currentMonth + 1) + "-" + (i + 1) + "-" + currentYear;
    var tempDay = localStorage.getItem(tempString);

    if (tempDay == null || tempDay == "false") {
        localStorage.setItem(tempString, "false");
    } else if (tempDay == "true") {
        daysCompleted++;
    }
    totalDays.innerHTML = daysCompleted + "/" + daysInThisMonth;
}

for (var i = 0; i < currentDate; i++) {
    var tempString =
        "" + (currentMonth + 1) + "-" + (i + 1) + "-" + currentYear;

    var chosenDay = localStorage.getItem(tempString);
    var chosenDayDiv = document.getElementById("day" + (i + 1));

    if (chosenDay == "true") {
        chosenDayDiv.setAttribute("style", "background-color:pink");
    } else if (chosenDay == "false") {
        chosenDayDiv.setAttribute("style", "background-color:white");
    }
}

var dayDivs = document.querySelectorAll(".day");
for (var i = 0; i < currentDate; i++) {
    dayDivs[i].onclick = function (e) {

        var num = e.target.innerText;
        var selectedDate = document.getElementById(e.target.id);
        var storageString =
            "" + (currentMonth + 1) + "-" + num + "-" + currentYear;

        if (localStorage.getItem(storageString) === "false") {
            selectedDate.setAttribute("style", "background-color:pink");
            localStorage.setItem(storageString, true);
            daysCompleted++;
        } else if (localStorage.getItem(storageString) === "true") {
            selectedDate.setAttribute("style", "background-color:white");
            localStorage.setItem(storageString, false);
            daysCompleted--;
        }

        totalDays.innerHTML = daysCompleted + "/" + dayCount;
        if (daysCompleted === currentDate) {
            alert("Congratulations! You have completed all your habits for this month!");
        }
    }
}

var resetButton = document.getElementById("resetBtn");
resetButton.onclick = function () {
    for (var i = 0; i < dayCount; i++) {
        var tempString =
            "" + (currentMonth + 1) + "-" + (i + 1) + "-" + currentYear;
        localStorage.setItem(tempString, "false");
        var curDay = document.getElementById("day" + (i + 1));
        curDay.setAttribute("style", "background-color:white;");
    }
    daysCompleted = 0;
    totalDays.innerHTML = daysCompleted + "/" + daysInThisMonth;
}
