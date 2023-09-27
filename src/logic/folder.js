export { Folder, StoredFolder }

function taskManager(){
  let tasks = [];

  function getTasks(){ return tasks }

  function addTask( task ){
    const uid = generateUid( tasks )
    tasks.push( uid )
    task.uid = uid
  }

  function removeTask(){}

  return {
    getTasks,
    addTask
  }
}

const StoredFolder = ( folder ) => {
  return Object.assign(folder, taskManager())
}

const Folder = (title, color = null, icon = null) => {
  const uid = generateUid()
  const folder = { title, color, icon, uid} 
  localStorage.setItem(`FOLDER_${uid}`, JSON.stringify( folder ))
  
  return Object.assign( folder, taskManager() )
}

function isIdAvailable( array, id ){
  if (!array) return true
  return array.every((task) => task.id !== id );
}

function generateUid( idArray ){
  let output = 'i'
  output+= randomString(6);

  if( isIdAvailable(idArray, output) ){
    return output
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