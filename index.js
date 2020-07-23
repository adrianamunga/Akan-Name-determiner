const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const male = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame"
];
const female = [
  "Akosua",
  "Adwoa",
  "Abenaa",
  "Akua",
  "Yaa",
  "Afua",
  "Ama"
];

function submitDetails(event) {

  event.preventDefault();

  const birthday = document.getElementById("birthday").value;

  const gender = document.getElementById("gender").value;

  if (validateDetails(birthday, gender)) {

    const weekdayNumber = new Date(birthday).getDay();

    const day = days[weekdayNumber];

    let name;

    if (gender === "male") {
      name = male[weekdayNumber];
    } else if (gender === "female") {
      name = female[weekdayNumber];
    }
    if (name) {
      document.getElementById("name").innerHTML =
        '<p class="result">Your Akan Name is <strong>' +
        name +
        "</strong></p>";
      return false;
    }
  }

}

function validateDetails(birthday, gender) {

  if (birthday.length == 0) {
    document.getElementById("error").innerHTML =
      "<p>Please enter the date</p>";
    return false;
  }
  if (gender.length == 0) {
    document.getElementById("error").innerHTML =
      "<p>Please enter your gender</p>";
    return false;
  }

  const date = birthday.split("-");
  const year = date[0];
  const month = date[1];
  const day = date[2];


  if (year.length > 4) {
    document.getElementById("error").innerHTML =
      "<p> Year is invalid</p>";
    return false;
  }
 
  if (month > 12 || month < 1) {
    document.getElementById("error").innerHTML =
      "<p> Month is invalid </p>";
    return false;
  }
  return true;
}