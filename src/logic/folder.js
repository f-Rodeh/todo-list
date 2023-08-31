export { Folder }

const Folder = (title, color = null, icon = null) => {

  let tasks = []
  const uid = generateUid()

  function addTask(task) {
    const uid = generateUid( tasks );
    task.uid = uid;
    tasks.push(task);
  }

  function removeTask( taskUid ){
    const isTarget = (task) =>  task.uid === taskUid;
    const index = tasks.findIndex( isTarget )
    console.log({index})
    if (index >= 0) tasks.splice(index, 1)
  }

  function getTasks(){
    return tasks
  }

  return {
    title,
    color,
    icon,
    uid,
    addTask,
    getTasks,
    removeTask
  }
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