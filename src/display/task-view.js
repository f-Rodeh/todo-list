import { format, isValid, parse } from "date-fns";

export { makeTaskView }

const titleElement = document.createElement('h2');
const descriptionElement = document.createElement('p');
const dueDateElement = document.createElement('p');

function makeTaskView( task ){
  const main = document.createElement('main')
  console.log('dueDate: ', task.getDueDate())
  const dueDate = task.getDueDate();

  titleElement.textContent = task.title;
  descriptionElement.textContent = task.description;
  dueDateElement.textContent = isValid(dueDate) ?
    `Due date: ${format(dueDate, 'MMM dd, yyyy')}` :
    `No due date`

  main.append(
    titleElement,
    dueDateElement,
    descriptionElement,
    notesDisplayer(),
  )
  return main
}

function notesDisplayer( notes ){
  const output = document.createElement('div');
  return output;
}