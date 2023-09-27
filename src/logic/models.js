import { AppStorage } from "./storage";

export { Folder, StoredFolder, Task }

const StoredFolder = ( folder ) => {
  return Object.assign(folder, TaskManager())
}

const Folder = (title, color = null, icon = null) => {
  const uid = generateUid()
  const folder = { title, color, icon, uid } 
  localStorage.setItem(`FOLDER_${uid}`, JSON.stringify( folder ))

  return Object.assign( folder, TaskManager() )
}

const Task = ( title, description = '', dueDate, priority = 0 ) => {
  const uid = generateUid()
  const task = { title, description, isDone:false, priority, uid }
  localStorage.setItem(`TASK_${uid}`, JSON.stringify( task ))

  const dateManager = DateManager()
  dateManager.setDueDate( dueDate )

  return Object.assign(
    task,
    dateManager,
    CommentManager()
  )
}

function TaskManager(){
  let tasks = [];

  function getTasks(){ return tasks }

  function addTask( task ){
    const uid = generateUid( tasks )
    tasks.push( task )
    task.uid = uid
  }

  function removeTask(){}

  return {
    getTasks,
    addTask
  }
}

function CommentManager() {
  let comments = [];

  function getComments(){ return comments }

  function addComment( comment ){ comments.push( comment ) }

  return {
    getComments,
    addComment
  }
}

function DateManager(){
  let dueDate = null;

  function setDueDate( input ){
    const newDate = new Date( input );

    if( dateIsValid(newDate) ) {
      dueDate = newDate
    } else console.warn('Date not set: Invalid date');
  }
  
  function getDueDate(){ return dueDate }

  function dateIsValid( input ){ return !isNaN( input ); }

  return {
    setDueDate,
    getDueDate
  }
}

function generateUid(){
  const id = 'i' + randomString(6);

  if( !AppStorage.getIdList().includes(id) ){
    return id
  } else {
    generateUid( idArray )
  }
}

function randomString( length ){
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let output = '';

  for (let i = 0; i < length; i++) {
    const random = Math.random() * (characters.length-1) ;
    const index = random.toFixed();
    output += characters[index]
  }

  return output
}