export { Task } 

const STATUS_INITIAL = 0;
const STATUS_IN_PROGRESS = 1;
const STATUS_DONE = 2;

const Task = (title, description = '', dueDate, priority) => {

  let commentManager = CommentManager()
  let status = STATUS_INITIAL;

  return Object.assign({
    title,
    description
    },
    commentManager
  )
}

function CommentManager() {
  let comments = ['Hello'];

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


