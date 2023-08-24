export { Task } 

const Task = ( title, description = '', dueDate, priority = 0 ) => {

  let commentManager = CommentManager()
  let isDone = false;

  return Object.assign({
    title,
    description,
    isDone,
    priority
    },
    commentManager
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