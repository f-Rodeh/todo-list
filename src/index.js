import { Folder } from "./logic/folder";
import { Task } from "./logic/task";
import { loadPage, setPageContent } from "./display/home";
import { makeDashboard } from "./display/dashboard";
import { makeFolderView } from "./display/folder-view";
import { makeElement } from "./display/dom-utility";

loadPage()

// hardcoded tasks/folders
const task1 = Task('Task 1', '');
const task2 = Task('Task 2', '', '2023-5-9');
const task3 = Task('Task 3', '', '2023-8-31');
const task4 = Task('Task 4', '', '2023-09-1');
const task5 = Task('Task 5', '', '2023-12-11');
const folder1 = Folder('Example 1');
const folder2 = Folder('Example 2');
folder1.addTask(task1)
folder1.addTask(task2)
folder1.addTask(task3)
folder1.addTask(task4)
folder1.addTask(task5)
let folders = [folder1, folder2];

const navBar = document.querySelector('nav')

const dashboard = makeDashboard([folder1, folder2])
setPageContent( dashboard )

const folderCards = document.querySelectorAll('.folder');
folderCards.forEach((folder) => {
  folder.addEventListener('click', () => {
    const id = folder.dataset.uid
    const _folder = findFolderById(id)
    openFolderView( _folder )
  })
})

function openFolderView( folder ){
  const navTab = document.createElement('span')
  navTab.textContent = folder.title
  navTab.dataset.uid = folder.uid

  navBar.append( navTab )
  const folderView = makeFolderView( folder );
  setPageContent( folderView )
}

function findFolderById( id ){
  return folders.find((element) => element.uid === id)
}