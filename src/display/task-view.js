import { format, isValid } from "date-fns";

export { makeTaskView }

const titleElement = document.createElement('h2');
const descriptionElement = document.createElement('p');
const dueDateElement = document.createElement('p');

function makeTaskView( task ){
  const main = document.createElement('main')
  const dueDate = task.getDueDate;

  titleElement.textContent = task.title;
  descriptionElement.textContent = task.description;
  if( isValid(dueDate) ) {
    dueDateElement.textContent = `Due date: ${format(dueDate, 'YYYY/MMM/dd')}`
  }

  main.append(
    titleElement,
    descriptionElement,
    dueDateElement,
    notesDisplayer()
  )
  return main
}

function notesDisplayer( notes ){
  const output = document.createElement('div');
  return output;
}