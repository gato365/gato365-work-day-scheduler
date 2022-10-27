

var timeDisplayEl = $('#time-display');
var classTask = $('.one-task')
var allWorkingHours = document.querySelector('.all-tasks');
let numberHours = 16;


function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}


displayTime();


for (let j = 9; j <= numberHours; j++) {
 // Text for Time
 // textarea for entering task
 // button to save task
 
document.createElement('div')
document.createElement('textarea')
document.createElement('button')

allWorkingHours
 
}