import { Folder } from "./logic/folder";
import { Task } from "./logic/task";

const exampleTask = Task('Task', 'This is an example task', '2023-09-09');
const exampleTask2 = Task('Task 2', 'This is another example task', '2023-12-09');
const exampleTask3 = Task('Task 3', 'Yet another example task', '2023-12-25');
const exampleFolder = Folder('Folder');
exampleFolder.addTask(exampleTask)
exampleFolder.addTask(exampleTask2)
exampleFolder.addTask(exampleTask3)

console.log( 'example folder: ', exampleFolder )
console.log( 'example tasks: ', exampleFolder.getTasks() )

exampleFolder.removeTask(exampleTask2.uid)
console.log( 'tasks after deletion: ', exampleFolder.getTasks() )
