import { loadPage, setPageContent } from "./display_utility/home";
import { buttonNewFolder, makeDashboard, FolderCard } from "./pages/dashboard";
import { FolderView, TaskCard, buttonNewTask } from "./pages/folder";
import { makeTaskView } from "./pages/task";
import { addTab } from "./display_utility/tab-navigator";
import { DateInput, InputForm, NumberInput, TextInput, getFormObject } from "./display_utility/input-prompter";
import { AppStorage } from "./logic/storage";
import { Folder, Task } from "./logic/models";

loadPage()

let folders = AppStorage.getFolders()
let currentFolder;

const dashboard = makeDashboard(folders)
setPageContent( dashboard )
addTab( 'My Folders', dashboard )

const folderCards = document.querySelectorAll('.folder');
folderCards.forEach((folder) => {
  addFolderListener( folder )
})

function setTaskCardListeners(){
  let taskCards = document.querySelectorAll('.task');
  taskCards.forEach((card) => addTaskListener( card ))
}

function addTaskListener( taskCard ){
  taskCard.addEventListener('click', () => {
    const _task = findTaskById( taskCard.dataset.uid )
    openTaskView( _task )
  })
}

function addFolderListener( folderCard ){
  folderCard.addEventListener('click', () => {
    const id = folderCard.dataset.uid
    currentFolder = findFolderById(id)
    openFolderView( currentFolder )
  })
}

function openFolderView( folder ){
  const folderView = FolderView( folder );
  setPageContent( folderView )
  addTab(folder.title, folderView);

  setTaskCardListeners();
}

function openTaskView( task ){
  const taskView = makeTaskView( task );
  setPageContent( taskView )
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

const FolderForm = {title: TextInput('Title')}
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
    const card = FolderCard(folder)
    folders.push(folder)
    dashboard.append(card)
    addFolderListener(card)
    form.dismiss();
  })
}

function makeNewTask(){
  const form = InputForm( TaskForm );

  form.setMainAction(() => {
    const answers = getFormObject(form.content)
    const list = document.querySelector('#task-list')
    const task = Task( answers.title, answers.description, answers.dueDate, answers.priority );
    currentFolder.addTask( task )
    const card = TaskCard( task );
    list.append( card )
    addTaskListener( card )
    form.dismiss()
  })
}