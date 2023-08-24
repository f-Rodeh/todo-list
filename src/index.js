import { Task } from "./task";

const exampleTask = Task('Example', 'This is an example task')

console.log( 'comments: ', exampleTask.getComments() )
exampleTask.addComment('WOW!')
console.log( 'comments: ', exampleTask.getComments() )

