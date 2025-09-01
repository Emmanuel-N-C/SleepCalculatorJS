function getSleepHours(day){
  day = day.toLowerCase();
  if(day === 'monday'){
    return 8;
  }
  else if(day === 'tuesday'){
    return 7;
  }
  else if(day === 'wednesday'){
    return 6;
  }
  else if(day === 'thursday'){
    return 8;
  }
  else if(day === 'friday'){
    return 7;
  }
  else if(day === 'saturday'){
    return 9;
  }
  else if(day === 'sunday'){
    return 8;
  } 
  else{
    return 'invalid day please select a day of the week';
  }
}
const getActualSleepHours = ()=>
   getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');

function getIdealSleepHours(hours){
  return hours * 7;
}
function calculateSleepDebt(){
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours(15);
  var sleepDifferenceI =  actualSleepHours - idealSleepHours;
  var sleepDifferenceII = idealSleepHours - actualSleepHours;
  if(actualSleepHours === idealSleepHours){
    console.log(`The User slept a perfect amount of sleep ${actualSleepHours} hrs`);
  }
  else if(actualSleepHours > idealSleepHours){
    console.log(`The user slept way more than they intended.The slept for ${sleepDifferenceI} hrs more than the intended.`);
  }
  else if( actualSleepHours < idealSleepHours){
    console.log(`The user should get some rest. They are ${sleepDifferenceII} hrs sleep less than intended!!`);
  }
}
calculateSleepDebt();