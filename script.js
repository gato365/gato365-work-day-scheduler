

var timeDisplayEl = $('#time-display');
var classTask = $('.one-task')
var allWorkingHours = document.querySelector('.container');
let numberHours = 16;


function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}


displayTime();


for (let j = 9; j <= numberHours; j++) {

 
var sectionTask = document.createElement('section')

sectionTask.setAttribute('class','all-tasks row time-block');
var timeTask = document.createElement('div')
timeTask.setAttribute('class','hour');
timeTask.textContent = j
var descriptionTask = document.createElement('textarea')
descriptionTask.setAttribute('class','description present col-10');
var buttonTask = document.createElement('button')
buttonTask.setAttribute('class','saveBtn');


sectionTask.append(timeTask)
sectionTask.append(descriptionTask)
sectionTask.append(buttonTask)
allWorkingHours.append(sectionTask)
 
}