import { makeElement, makeIcon } from "./dom-utility"
import { displayDueDate } from "./date-displayer";

export { FolderView }

const buttonNewTask = document.createElement('div');
buttonNewTask.classList.add('new-task', 'card');

buttonNewTask.append(
  makeIcon('add-outline'),
  makeElement({
    type: 'span',
    textContent: 'New Task',
    classList: ['title']
  }),
)

function FolderView( folder ){
  const main = document.createElement('main')

  const taskList = TaskListElement( folder.getTasks() );
  main.append(taskList)

  return main
}

function TaskListElement( taskList ){
  const output = document.createElement('section');
  output.append(buttonNewTask)
  output.id = 'task-list'
  taskList.forEach(task => {
    const card = TaskCard( task )
    output.append(card)
  });
  return output
}

function TaskCard( task ) {
  const output = document.createElement('div');
  output.classList.add('task', 'card')
  output.dataset.uid = task.uid;

  const title = makeElement({
    type: 'h3',
    classList: ['title'],
    textContent: limitCharacters(32, task.title)
  })

  const subtitle = makeElement({
    type: 'span',
    classList: ['subtitle'],
    textContent: limitCharacters(50, task.description)
  })

  output.append(
    title,
    displayPriority(task.priority),
    subtitle,
    displayDueDate(task.getDueDate())
  )

  return output
}

function limitCharacters( maxLength, string = ''){
  if(!string) return
  if(string.length <= maxLength ) return string
  return string.substring(0, maxLength-3) + '...'
}

function displayPriority( priorityNumber ){
  const output = document.createElement('span')
  output.classList.add('priority')
  if(priorityNumber > 0) output.textContent = 'Important '
  
  for (let i = 0; i < priorityNumber; i++) {
    const priorityIcon = makeIcon('alert-circle-outline');
    output.append(priorityIcon)
  }
  return output
}