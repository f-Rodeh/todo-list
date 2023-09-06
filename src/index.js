import { Folder } from "./logic/folder";
import { Task } from "./logic/task";
import { loadPage, setPageContent } from "./display/home";
import { addFolder, buttonNewFolder, makeDashboard } from "./display/dashboard";
import { FolderView, buttonNewTask } from "./display/folder-view";
import { makeTaskView } from "./display/task-view";
import { addTab } from "./display/tab-navigator";
import { DateInput, NumberInput, TextInput, promptQuestionnaire } from "./display/input-prompter";

loadPage()

// hardcoded tasks/folders
const task1 = Task('This is a super long title that should be', 'Short description', '', 2);
const task2 = Task('Task 2', 'This is a super long description that should be cropped', '2023-5-9', 1);
const task3 = Task('Task 3', '', '2023-9-4', 2);
const task4 = Task('Task 4', '', '2023-09-6');
const task5 = Task('Task 5', '', '2023-12-11');
const folder1 = Folder('Example 1');
const folder2 = Folder('Example 2');
folder1.addTask(task1)
folder1.addTask(task2)
folder1.addTask(task3)
folder1.addTask(task4)
folder1.addTask(task5)
let folders = [folder1, folder2];
let currentFolder;

const dashboard = makeDashboard(folders)
setPageContent( dashboard )
addTab( 'My Folders', dashboard )

const folderCards = document.querySelectorAll('.folder');
folderCards.forEach((folder) => {
  folder.addEventListener('click', () => {
    const id = folder.dataset.uid
    currentFolder = findFolderById(id)
    openFolderView( currentFolder )
  })
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
  title: TextInput('Title'),
  subtitle: TextInput('Subtitle'),
  dueDate: DateInput('Due Date'),
  priority: NumberInput('Priority')
}

buttonNewFolder.addEventListener('click', makeNewFolder)
buttonNewTask.addEventListener('click', makeNewTask)

function makeNewFolder(){
  const info = promptQuestionnaire( FolderQuestionnaire );
  const folder = Folder(info.title);
  folders.push(folder);
  addFolder(folder)
}

function makeNewTask(){
  console.log(promptQuestionnaire( TaskQuestionnaire ))
}