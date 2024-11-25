const countdown = () => {
    const endDate = new Date("November 21, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    
    const timeLeft = endDate - now; // Time left in milliseconds

    // If timeLeft is negative, the event has started
    if (timeLeft < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerText = "Event Started!";
        return; // Exit the function if the countdown is over
    }

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000)) / 1000); // Convert remaining milliseconds to seconds

    // Update the HTML elements with the calculated values
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
};

// Call the countdown function every second (1000 milliseconds)
const timer = setInterval(countdown, 1000);

// Run it once immediately to avoid delay on the page load
countdown();