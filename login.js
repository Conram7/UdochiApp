// login.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Hardcoded user authentication
  if (email === "muhammadmajid097@gmail.com" && password === "Majid@Password100") {
    window.location.href = "appstatusMuhammad.html";  // Redirect to Muhammad's status page
  } else if (email === "anummajid907@gmail.com" && password === "Anum@Password200") {
    window.location.href = "appstatusAnum.html";  // Redirect to Anum's status page
  } else {
    alert("Invalid email or password. Please try again.");
  }
});
