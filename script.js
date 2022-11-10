// Specify Variables 
var timeDisplayEl = $('#time-display');
var classTask = $('.one-task')
var allWorkingHours = document.querySelector('.container');
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
function renderDescription(){
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
 
    buttonTask.on('submit', storeDescription);


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
  var storedDescription = JSON.parse(localStorage.getItem("description"));

  // If description were retrieved from localStorage, update the description array to it
  if (storedDescription !== null) {
    description = storedDescription;
  }

  // This is a helper function that will render Description to the DOM
  renderDescription();
}


displayTime();
init();










function storeDescription(event) {
  event.preventDefault();
  // set new submission to local storage 
  localStorage.setItem("description", JSON.stringify(descriptionTask));
  console.log('Store Description');

}

buttonTask.addEventListener("click", function(event){

});





// // Add click event to allWorkingHours element
// allWorkingHours.addEventListener("click", function(event) {
//   var element = event.target;
  
//   // console.log('Work');


//   // Checks if element is a button
//   if (element.matches("button") === true) {
//     // Get its data-index value and remove the todo element from the list
//     var index = element.parentElement.getAttribute("data-index");
//     todos.splice(index, 1);

//     // Store updated todos in localStorage, re-render the list
//     storeDescription();
//     renderDescription();
//   }
// });


