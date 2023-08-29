import { Folder } from "./logic/folder";
import { Task } from "./logic/task";
import { loadPage, setPageContent } from "./display/home";
import { makeDashboard } from "./display/dashboard";

loadPage()

const folder1 = Folder('Example');
const folder2 = Folder('Example 2');
const element = makeDashboard([folder1, folder2])
setPageContent( element )