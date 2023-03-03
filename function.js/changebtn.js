

function myFunction() {
    let text;
    let person = prompt(" Please enter your name or nickname: ", " it´s right here ");
    if (person == null || person == "") {
      text = "User cancelled the prompt.";
    } else {
      text = " Hello " + person +
    " ! How are you today? Welcome, I´hope you enjoy the travel.Let´s begin going to the home page";
    }
    document.getElementById("saludos").innerHTML = text;
  }