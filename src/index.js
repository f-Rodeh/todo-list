import { loadPage, setPageContent } from "./display/home";
import { buttonNewFolder, makeDashboard, FolderCard } from "./display/dashboard";
import { FolderView, TaskCard, buttonNewTask } from "./display/folder-view";
import { makeTaskView } from "./display/task-view";
import { addTab } from "./display/tab-navigator";
import { DateInput, InputForm, NumberInput, TextInput, getFormObject } from "./display/input-prompter";
import { AppStorage, findLocalItems } from "./logic/storage";
import { Folder, StoredFolder, Task } from "./logic/models";

loadPage()

// hardcoded tasks/folders
const task1 = Task('This is a super long title that should be', 'Short description', '', 2);
const task2 = Task('Task 2', 'This is a super long des  cription that should be cropped', '2023-5-9', 1);
const task3 = Task('Task 3', '', '2023-9-4', 2);
const task4 = Task('Task 4', '', '2023-09-6');
const task5 = Task('Task 5', '', '2023-12-11');

let folders = getLocalFolders();
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

const FolderQuestionnaire = {title: TextInput('Title')}
const TaskQuestionnaire = {
  title: TextInput('Title', 32),
  description: TextInput('Description', 280),
  dueDate: DateInput('Due Date'),
  priority: NumberInput('Priority', 0, 0, 3) // TODO: replace with star rating
}

buttonNewFolder.addEventListener('click', makeNewFolder)
buttonNewTask.addEventListener('click', makeNewTask)

function makeNewFolder(){
  const form = InputForm( FolderQuestionnaire );

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
  const form = InputForm( TaskQuestionnaire );

  form.setMainAction(() => {
    const answers = getFormObject(form.content)
    const list = document.querySelector('#task-list')
    const task = Task( answers.title, answers.description, answers.dueDate, answers.priority );
    currentFolder.addTask( task ) // Assigns uid so goes before card
    const card = TaskCard( task );
    list.append( card )
    addTaskListener( card )
    form.dismiss()
  })
}

function getLocalFolders(){
  let output = []
  const local = findLocalItems('FOLDER_');

  local.forEach( _folder => {
    const obj = JSON.parse( _folder );
    const folder = StoredFolder( obj )
    output.push( folder )
  })

  return output
}