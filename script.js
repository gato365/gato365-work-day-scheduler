

var timeDisplayEl = $('#time-display');
var classTask = $('.one-task')
var allWorkingHours = document.querySelector('.container');
let numberHours = 16;


function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}


displayTime();


// Get Time of day
var displayFakeTime = true;
var currentTime;
if (displayFakeTime == true) {
  currentTime = 11;
} else if (displayFakeTime == false) {
  currentTime = moment().hours();
}



for (let j = 9; j <= numberHours; j++) {


  var sectionTask = document.createElement('section')

  sectionTask.setAttribute('class', 'all-tasks row time-block');

  // Create Time Block content
  var timeTask = document.createElement('div')
  timeTask.setAttribute('class', 'hour');

  if (j < 12) {
    determineMidday = ' AM';
    jRotate = j;
  } else if (j >= 12) {
    determineMidday = ' PM'
    if (j > 12) {
      jRotate = j - 12;
    } else {
      jRotate = j;
    }
  }
  timeTask.textContent = jRotate + determineMidday;


  //Create Save Box content
  var buttonTask = document.createElement('button')
  buttonTask.setAttribute('class', 'saveBtn fa fa-save');
  // Issue 3: Put Text Later
  // buttonTask.textContent = 'Save';



  var descriptionTask = document.createElement('textarea')

  if (j == currentTime) {

    descriptionTask.setAttribute('class', 'description present col-10');

  } else if (j < currentTime) {
    descriptionTask.setAttribute('class', 'description past col-10');
  } else if (j > currentTime) {
    descriptionTask.setAttribute('class', 'description future col-10');
  }







  sectionTask.append(timeTask)
  sectionTask.append(descriptionTask)
  sectionTask.append(buttonTask)
  allWorkingHours.append(sectionTask)

}



buttonTask.addEventListener("click", function (event) {
  event.preventDefault();

  // set new submission to local storage 
  localStorage.setItem("description", JSON.stringify(descriptionTask));

})




// This function is being called below and will run when the page loads.
function init() {
  // Get stored todos from localStorage
  var storedDescription = JSON.parse(localStorage.getItem("description"));

  // If description were retrieved from localStorage, update the description array to it
  if (storedDescription !== null) {
    description = storedDescription;
  }

  // This is a helper function that will render Description to the DOM
  renderDescription();
}



function storeDescription() {
  // Stringify and set key in localStorage to todos array
  localStorage.setItem("description", JSON.stringify(description));
}