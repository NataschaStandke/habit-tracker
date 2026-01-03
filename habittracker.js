var date = new Date();

var currentMonth = date.getMonth();
var currentDay = date.getDate();
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
};

var daysInTheMonthList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var daysInThisMonth = daysInTheMonthList[currentMonth];

var daysCompleted = 0;
var totalDays = document.getElementById("totalDays");