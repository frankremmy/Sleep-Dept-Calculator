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
