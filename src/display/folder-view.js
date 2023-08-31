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
  const output = document.createElement('div')
  output.classList.add('due-date')
  if( !date ){
    output.textContent = 'No due date'
    return output
  }

  const dateProperties = getDateProperties(date);
  output.textContent = dateProperties.msg;
  output.style.backgroundColor = dateProperties.color;

  return output
}

function getDateProperties( date ){
  const dateProperties = 
    isToday(date) ? todayDateObject(date) :
    isPast(date) ? pastDateObject(date) :
    isThisWeek(date) ? thisWeekDateObject :
    genericDateObject(date);

  return dateProperties;
}

function pastDateObject( date ){
  return {
    msg: `Due ${formatDistanceToNow(date)} ago`,
    color: '#ffffff'
  }
}

function todayDateObject( date ){
  return {
    msg: `Due today`,
    color: '#ffffff'
  }
}

function thisWeekDateObject( date ){
  return {
    msg: `Due by ${format(date, 'EEEE')}`,
    color: '#ffffff'
  }
}

function genericDateObject( date ){
  return {
    msg: `Due by ${format(date, 'MMM dd')}`,
    color: '#ffffff'
  }
}