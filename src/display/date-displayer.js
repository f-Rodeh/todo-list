import { format, formatDistanceToNow, isPast, isThisWeek, isToday } from "date-fns";

export {displayDueDate}

function displayDueDate( date ) {
  const output = document.createElement('span');
  output.classList.add('small-badge');
  const dateProperties = getDateProperties(date);
  output.textContent = dateProperties.msg;
  output.style.backgroundColor = dateProperties.color;

  return output
}

function getDateProperties( date ){
  const dateProperties = 
    (!date) ? emptyDate() :
    isToday(date) ? todayDate(date) :
    isPast(date) ? pastDate(date) :
    isThisWeek(date) ? thisWeekDate(date) :
    genericDate(date);

  return dateProperties;
}

function emptyDate(){
  return {
    msg: 'No due date',
    color: 'var(--gray)'
  }
}

function pastDate( date ){
  return {
    msg: `Due ${formatDistanceToNow(date)} ago`,
    color: 'var(--red)'
  }
}

function todayDate( date ){
  return {
    msg: `Due today`,
    color: 'var(--purple-pink)'
  }
}

function thisWeekDate( date ){
  return {
    msg: `Due by ${format(date, 'EEEE')}`,
    color: 'var(--teal)'
  }
}

function genericDate( date ){
  return {
    msg: `Due by ${format(date, 'MMM dd')}`,
    color: 'var(--blue)'
  }
}