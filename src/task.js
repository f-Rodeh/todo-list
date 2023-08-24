export { Task } 

const Task = ( title, description = '', dueDate, priority = 0 ) => {

  let commentManager = CommentManager()

  const dateManager = DateManager()
  dateManager.setDueDate( dueDate )

  let isDone = false;

  return Object.assign({
    title,
    description,
    isDone,
    priority
    },
    commentManager,
    dateManager
  )
}

function CommentManager() {
  let comments = [];

  function getComments(){
    return comments
  }

  function addComment( comment ){
    comments.push( comment )
  }

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
    } else console.error('Date not set: Invalid date');
  }
  
  function getDueDate(){
    return dueDate
  }

  function dateIsValid( input ){
    return !isNaN( input );
  }

  return {
    setDueDate,
    getDueDate
  }
}