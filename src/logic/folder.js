export { Folder }

const Folder = (title) => {

  let tasks = []

  function addTask(task) {
    tasks.push(task)
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