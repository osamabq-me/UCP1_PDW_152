function displayGreeting() {
    var clockElement = document.getElementById('greeting');
    var currentTime = new Date();
    var currentHour = currentTime.getHours();
    var greeting;

    if (currentHour >= 5 && currentHour < 12) {
        greeting = "Good Morning";
    } else if (currentHour >= 12 && currentHour < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Night";
    }

    clockElement.textContent = greeting + " ,I am OSAMAH";
}

setInterval(displayGreeting, 1000);

function displayDateTime() {
    var dayElement = document.getElementById('day');
    var dateElement = document.getElementById('date');
    var timeElement = document.getElementById('time');

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    var currentTime = new Date();
    var currentDay = days[currentTime.getDay()];
    var currentDate = currentTime.getDate() + ' ' + months[currentTime.getMonth()] + ' ' + currentTime.getFullYear();
    var currentHour = currentTime.getHours();
    var currentMinute = currentTime.getMinutes();
    var ampm = currentHour >= 12 ? 'PM' : 'AM';

    // Convert hour to 12-hour format
    currentHour = currentHour % 12;
    currentHour = currentHour ? currentHour : 12;

    // Add leading zero to minutes if less than 10
    currentMinute = currentMinute < 10 ? '0' + currentMinute : currentMinute;

    dayElement.textContent = currentDay;
    dateElement.textContent = currentDate;
    timeElement.textContent = currentHour + ':' + currentMinute + ' ' + ampm;
}

setInterval(displayDateTime, 1000);






var images = document.querySelectorAll('.slider-image');
var currentIndex = 0;

var currentIndex = 0;
var images = document.getElementsByClassName('slider-image');

function showImage(index) {
    Array.from(images).forEach(function (image) {
        image.classList.add('hidden');
    });

    images[index].classList.remove('hidden');
}

function previousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

// Automatically change images every 2 seconds
setInterval(function () {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}, 2000);
