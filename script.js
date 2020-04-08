/*A function that accepts a day as argument and retrun the number of hours one slept that night.*/
const getSleepHours = day => {
  switch (day) {
    case 'Monday':
      return 8;
      break;
      
    case 'Tuesday':
      return 7;
      break;
    
    case 'Wednesday':
      return 6;
      break;
    
    case 'Thursday':
      return 7;
      break;
    
    case 'Friday':
      return 8;
      break;
    
    case 'Saturday':
      return 7;
      break;
    
    case 'Sunday':
      return 6;
      break;
    
    default:
      return 'Please enter the correct day.';
      break;
  }
};
// testing the function code:
// console.log(getSleepHours('sunday'));
const getActualSleepHours = () => {
  return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
};
const getIdealSleepHours = () => {
  const idealHours = 10;
  return idealHours * 7;
};
// tests the new functions
// console.log(getIdealSleepHours());
// console.log(getActualSleepHours());

//calculating sleep debt
const calculateSleepDebt = () =>{
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  
  //output the result to the user, with hours, by comparing actualSleepHours and idealSleepHours
  if(actualSleepHours === idealSleepHours){
    console.log('You have got ' + actualSleepHours + ' hours of sleep this week, it is a perfect amount.');
  }
 if(actualSleepHours > idealSleepHours){
    console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hours more sleep than you needed this week.');
  }
  if(actualSleepHours< idealSleepHours){
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hours less sleep than you needed this week. Get some rest.');
}
}

//start the program
calculateSleepDebt();
