

var timeDisplayEl = $('#time-display');
var classTask = $('.one-task')
var allWorkingHours = document.querySelector('.container');
let numberHours = 16;


function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}


displayTime();



var currentTime = 11;

for (let j = 9; j <= numberHours; j++) {

 
var sectionTask = document.createElement('section')

sectionTask.setAttribute('class','all-tasks row time-block');

// Create Time Block content
var timeTask = document.createElement('div')
timeTask.setAttribute('class','hour');

if(j < 12){
  determineMidday = ' AM';
  jRotate = j;
} else if (j>= 12){
  determineMidday = ' PM'
  if (j> 12){
  jRotate = j - 12;  
  } else {
    jRotate = j;
  }
}
timeTask.textContent = jRotate + determineMidday;


//Create Save Box content
var buttonTask = document.createElement('button')
buttonTask.setAttribute('class','saveBtn fa fa-save');
// Issue 3: Put Text Later
// buttonTask.textContent = 'Save';



var descriptionTask = document.createElement('textarea')

if( j == currentTime){

descriptionTask.setAttribute('class','description present col-10');

} else if (j < currentTime){
  descriptionTask.setAttribute('class','description past col-10');
} else if (j > currentTime){
  descriptionTask.setAttribute('class','description future col-10');
}









sectionTask.append(timeTask)
sectionTask.append(descriptionTask)
sectionTask.append(buttonTask)
allWorkingHours.append(sectionTask)
 
}