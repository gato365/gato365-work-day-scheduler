// Specify Variables 
var timeDisplayEl = $('#time-display');
var classTask = $('.one-task');
var scheduleContainer = document.querySelector('.container');
var localStorageMessage = document.querySelector('#information-saved');
let numberHours = 16;


// -----------------Function Definitions--------------------
// Author: Immanuel Williams PhD 
// Date Created: 10/25/2022
// Date Modified: 10/25/2022
// Name: displayTime
// Purpose: displays Time
// Input: NA
// Output: NA
// Notes: NA
// -----------------Function Definitions--------------------
function displayTime() {
  var rightNow = moment().format('dddd, MMMM Do');
  timeDisplayEl.text(rightNow);
}

//-----------------Function Definitions--------------------
// Author: Immanuel Williams PhD
// Date Created: 10/26/2022
// Date Modified: 10/26/2022
// Name: renderDescription
// Purpose: Displays the schedule
// Input: NA
// Output: NA
// Notes: NA
// -----------------Function Definitions-------------------
function renderDescription() {
  // Get Time of day but this this allows me to test the mechanism
  var displayFakeTime = false;
  var currentTime;
  if (displayFakeTime == true) {
    currentTime = 11;
  } else if (displayFakeTime == false) {
    currentTime = moment().hours();
  }



  for (let hourIndex = 9; hourIndex <= numberHours; hourIndex++) {


    // Main: Creates a section for each task and classes for each task
    var sectionTask = document.createElement('section');
    sectionTask.setAttribute('class', 'all-tasks row time-block');

    // Part 1: Create a div for each task (time) and a class for each task (time)
    var timeTask = document.createElement('div')
    timeTask.setAttribute('class', 'hour');

    // Part 1a: Base on time specify AM and rotation of clock numbers (i.e., 13  = 1 pm)
    if (hourIndex < 12) {
      determineMidday = ' AM';
      hourIndexRotate = hourIndex;
    } else if (hourIndex >= 12) {
      determineMidday = ' PM'
      if (hourIndex > 12) {
        hourIndexRotate = hourIndex - 12;
      } else {
        hourIndexRotate = hourIndex;
      }
    }
    // Part 1c: Store information into text to be displayed
    timeTask.textContent = hourIndexRotate + determineMidday;


    // Part 2: Create a button for each task (save) and classes for each task (save) (displays button symbol)
    var buttonTask = document.createElement('button');
    buttonTask.setAttribute('class', 'saveBtn fa fa-save');

    // Part 2a: Create a listener to button     
    buttonTask.addEventListener("click", function (event) {

      var currentHour = hourIndex;
      var currentText = event.target.previousElementSibling.value;
      console.log(currentText);
      storeDescription(event,currentHour,currentText);
      // Unhide storage message
      localStorageMessage.removeAttribute('class', 'hide-me');

      setTimeout(() => {
        localStorageMessage.setAttribute('class', 'hide-me');
      }, 1000);


    });


    

    // Part 3: Create a textarea for each task (description) and classes for each task (description) 
    var descriptionTask = document.createElement('textarea');


    var descripIndex =localStorage.getItem('description'+hourIndex);
    descriptionTask.value = descripIndex;
    


    // Part 3a: Specify the type of class for description based on time
    if (hourIndex == currentTime) {
      descriptionTask.setAttribute('class', 'description present col-10');
    } else if (hourIndex < currentTime) {
      descriptionTask.setAttribute('class', 'description past col-10');
    } else if (hourIndex > currentTime) {
      descriptionTask.setAttribute('class', 'description future col-10');
    }


    // Component 2: Append Task info (time, description and save) into current section 
    sectionTask.append(timeTask)
    sectionTask.append(descriptionTask)
    sectionTask.append(buttonTask)

    // Component 3: Append Section task into current section 
    scheduleContainer.append(sectionTask)

  }
}






// -----------------Function Definitions--------------------
// Author: Immanuel Williams PhD 
// Date Created: 11/04/2022
// Date Modified: 11/04/2022
// Name: init
// Purpose: This function is being called below and will run when the page loads.
// Input: NA
// Output: NA
// Notes: NA
// -----------------Function Definitions--------------------
function init() {
  // Get description from localStorage
  var storedDescription = localStorage.getItem("description");
  // If description were retrieved from localStorage, update the description array to it
  if (storedDescription !== null) {
    description = storedDescription;
  }
}


// -----------------Function Definitions--------------------
// Author: Immanuel Williams PhD 
// Date Created: 11/10/2022
// Date Modified: 11/10/2022
// Name: storeDescription
// Purpose: Stores info into local storage
// Input: NA
// Output: NA
// Notes: NA
// -----------------Function Definitions--------------------
function storeDescription(event,currentHour,currentText) {
  event.preventDefault();
  // Set new submission to local storage 
  localStorage.setItem("description" + currentHour, currentText);
  
  

}
// localStorage.clear();

displayTime();
init();
renderDescription();















