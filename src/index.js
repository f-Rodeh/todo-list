import { Folder } from "./logic/folder";
import { Task } from "./logic/task";
import { loadPage, setPageContent } from "./display/home";
import { makeDashboard } from "./display/dashboard";

loadPage()

const task1 = Task('Task 1');
const folder1 = Folder('Example 1');
const folder2 = Folder('Example 2');
folder1.addTask(task1)
const dashboard = makeDashboard([folder1, folder2])
setPageContent( dashboard )