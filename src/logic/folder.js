export { Folder }

const Folder = (title) => {

  let tasks = []

  function addTask(task) {
    const uid = generateUid( tasks );
    task.uid = uid;
    tasks.push(task);
  }

  function getTasks(){
    return tasks
  }

  return {
    title,
    addTask,
    getTasks
  }
}

function isIdAvailable( array, id ){
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