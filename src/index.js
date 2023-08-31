import { Folder } from "./logic/folder";
import { Task } from "./logic/task";
import { loadPage, setPageContent } from "./display/home";
import { makeDashboard } from "./display/dashboard";
import { makeFolderView } from "./display/folder-view";
import { makeElement } from "./display/dom-utility";

loadPage()

// hardcoded tasks/folders
const task1 = Task('Task 1', '', '2023-5-9');
const task2 = Task('Task 2', 'This is a very long text that resembles a description')
const folder1 = Folder('Example 1');
const folder2 = Folder('Example 2');
folder1.addTask(task1)
folder1.addTask(task2)
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