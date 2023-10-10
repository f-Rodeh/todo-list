import { Page } from "./display_utility/page-container";
import { buttonNewFolder, makeDashboard, FolderCard } from "./pages/dashboard";
import { FolderView, TaskCard, buttonNewTask } from "./pages/folder";
import { makeTaskView } from "./pages/task";
import { addTab } from "./display_utility/tab-navigator";
import { DateInput, InputForm, NumberInput, TextInput, getFormObject } from "./display_utility/input-prompter";
import { AppStorage } from "./logic/storage";
import { Folder, Task } from "./logic/models";

Page.build()

let folders = AppStorage.getFolders()
let currentFolder;

const dashboard = makeDashboard( folders )
Page.setContent( dashboard )
addTab( 'My Folders', dashboard )

const folderCards = document.querySelectorAll('.folder');
folderCards.forEach((card) => { 
  card.addEventListener('click', ()=>{
    const id = card.dataset.uid
    const _folder = findFolderById(id)
    openFolder( _folder )
  })
})

const FolderForm = { title: TextInput('Title') }
const TaskForm = {
  title: TextInput('Title', 32),
  description: TextInput('Description', 280),
  dueDate: DateInput('Due Date'),
  priority: NumberInput('Priority', 0, 0, 3) // TODO: replace with star rating
}

buttonNewFolder.addEventListener('click', makeNewFolder)
buttonNewTask.addEventListener('click', makeNewTask)

function makeNewFolder(){
  const form = InputForm( FolderForm );

  form.setMainAction(() => {
    const answers = getFormObject(form.content)
    const folder = Folder(answers.title)
    addFolder( folder )
    form.dismiss();
  })
}

function makeNewTask(){
  const form = InputForm( TaskForm );

  form.setMainAction(() => {
    const answers = getFormObject(form.content)
    const task = Task( answers.title, answers.description, answers.dueDate, answers.priority );
    addTask(task)
    form.dismiss()
  })
}

function updateTasks(){
  const taskCards = document.querySelectorAll('.task');
  taskCards.forEach((card) => card.addEventListener('click', ()=> {
    const _task = findTaskById( card.dataset.uid )
    openTask( _task )
  }))
}

function openFolder( folder ){
  currentFolder = folder;
  const folderView = FolderView( folder );
  Page.setContent( folderView )
  addTab(folder.title, folderView);

  updateTasks();
}

function openTask( task ){
  const taskView = makeTaskView( task );
  Page.setContent( taskView )
  addTab( task.title, taskView )
}

function findFolderById( id ){
  return folders.find((element) => element.uid === id)
}

function findTaskById( id ){
  if(!currentFolder) throw new Error('No folder currently open')
  const tasks = currentFolder.getTasks()
  return tasks.find((element) => element.uid === id)
}

function addFolder( folder ){
  const card = FolderCard(folder)
  dashboard.append(card)
  card.addEventListener('click', () => { openFolder(folder) })
  folders.push(folder)
}

function addTask( task ){
  if(!currentFolder) throw new Error('No folder currently open')

  const card = TaskCard( task )
  document.querySelector('#task-list').append( card )

  const iconDelete = card.querySelector('.delete');
  iconDelete.addEventListener('click', () => { console.log('a')})
  
  card.addEventListener('click', () => { openTask( task ) })
  currentFolder.addTask( task )
}

function deleteTask(){
  console.log('aaaaaaaa')
  currentFolder.removeTask();
}