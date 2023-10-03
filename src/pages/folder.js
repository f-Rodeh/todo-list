import { makeElement, makeIcon } from "../display_utility/dom-utility"
import { displayDueDate } from "../display_utility/date-displayer";

export { FolderView, TaskCard, buttonNewTask }

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
  const main = document.createElement('main');

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

  const tags = document.createElement('div');
  tags.classList.add('tags')
  tags.append(
    displayDueDate(task.getDueDate()),
    displayPriority(task.priority)
  )

  const icons = document.createElement('div');
  icons.classList.add('icons');

  const trashIcon = makeIcon('trash-outline');
  icons.append(trashIcon)

  output.append(
    title,
    subtitle,
    tags,
    icons
  )

  return output
}

function limitCharacters( maxLength, string = ''){
  if(!string) return
  if(string.length <= maxLength ) return string
  return string.substring(0, maxLength-3) + '...'
}

function displayPriority( priority ){
  const output = document.createElement('span')
  if ( +priority === 0 ) return output;

  output.classList.add('priority', 'small-badge')
  output.textContent = 'Important '
  output.style.backgroundColor = 'var(--sand)'
  
  for (let i = 0; i < priority; i++) {
    const priorityIcon = makeIcon('alert-circle-outline');
    output.append(priorityIcon)
  }
  return output
}