
const contestEndDate = new Date("2024-12-31T00:00:00").getTime();

function updateTimer() {
  const currentTime = new Date().getTime();
  const timeLeft = contestEndDate - currentTime;

  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    document.getElementById("countdown").innerHTML = "Contest has ended!";
  } else {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}


const timerInterval = setInterval(updateTimer, 1000);

// Contest form submission handler
document.getElementById("contest-form").addEventListener("submit", function (event) {
  event.preventDefault();
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (name && email) {
    alert(`Thank you, ${name}! You have successfully entered the contest.`);
    document.getElementById("contest-form").reset(); // Reset the form
  } else {
    alert("Please fill out all fields.");
  }
});


document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();
  
  const message = document.getElementById("message").value;
  
  if (message) {
    alert("Your message has been sent. We will get back to you soon!");
    document.getElementById("contact-form").reset(); // Reset the form
  } else {
    alert("Please write a message before submitting.");
  }
});
