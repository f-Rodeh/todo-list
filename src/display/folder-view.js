import { makeElement, makeIcon } from "./dom-utility"
import { displayDueDate } from "./date-displayer";

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

  const divLeft = makeElement({type:'div', classList:['left']});
  const title = makeElement({
    type: 'h3',
    classList: ['title'],
    textContent: limitCharacters(32, task.title)
  })

  divLeft.append(
    title,
    makeElement({
      type: 'span',
      classList: ['subtitle'],
      textContent: limitCharacters(50, task.description)
    }),
  )

  output.append(
    divLeft,
    displayPriority(task.priority),
    displayDueDate(task.getDueDate()),
  )

  return output
}

function limitCharacters( maxLength, string = ''){
  if(!string) return
  if(string.length <= maxLength ) return string
  return string.substring(0, maxLength-3) + '...'
}

function displayPriority( priorityNumber ){
  const output = document.createElement('div')
  for (let i = 0; i < priorityNumber; i++) {
    const priorityIcon = makeIcon('alert-circle-outline');
    output.append(priorityIcon)
  }
  return output
}