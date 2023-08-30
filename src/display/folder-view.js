import { formatDistanceToNow, formatRelative, isFuture, isPast, isToday } from "date-fns";
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

  if( !date ){
    output.textContent = 'No due date'
    return output
  }

  output.textContent = getDateDescriptor( date )
  return output
}

function getDateDescriptor( date ){
  if( isPast(date) ){
    return 'Past Due'
  } else if( isToday(date) ){
    return 'Due today'
  } else if( isThisWeek(date) ){
    return `Due by ${date.toLocaleString('en-us', {weekday: 'long'})}`
  } else {
    return `Due by MMMM dddd`
  }
}

function isThisWeek( date ){
  return false
}