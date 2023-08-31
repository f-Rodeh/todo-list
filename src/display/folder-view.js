import { format, formatDistanceToNow, formatRelative, isFuture, isPast, isThisWeek, isToday } from "date-fns";
import { makeElement } from "./dom-utility"

export { makeFolderView }

function makeFolderView( folder ){
  const main = document.createElement('main')

  const taskList = makeTaskListDisplay( folder.getTasks() );
  main.append(taskList)

  return main
}

function makeTaskListDisplay( taskList ){
  const output = document.createElement('section');
  output.id = 'task-list'
  taskList.forEach(task => {
    const card = makeTaskCard( task )
    output.append(card)
  });
  return output
}

function makeTaskCard( task ) {
  const output = document.createElement('div');
  output.classList.add('card')

  output.append(
    makeElement({
      type: 'h3',
      classList: ['title'],
      textContent: task.title
    }),
    makeElement({
      type: 'span',
      classList: ['subtitle'],
      textContent: limitCharacters(50, task.description)
    }),
    displayDueDate( task.getDueDate() )
  )
  return output
}

function limitCharacters( maxLength, string = ''){
  if(!string) return
  return string.substring(0, maxLength-3) + '...'
}

function displayDueDate( date ) {
  const output = document.createElement('div');
  output.classList.add('due-date');
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