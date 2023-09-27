export { findLocalItems, AppStorage }

function getFolders(){
  return findLocalItems( 'FOLDER_' )
}

function getIdList(){
  let list = []
  for (const key in localStorage) {
    if (!localStorage.hasOwnProperty(key)) continue;
    list.push( key.replace( /(FOLDER_)|(TASK_)/i, '') )
  }
  return list
}

function findLocalItems( query ){
  let results = [];
  for (const key in localStorage) {
    if (!localStorage.hasOwnProperty(key)) continue;
    if( key.includes( query )) results.push( localStorage[key] )
  }
  return results;
}


const AppStorage = {
  getFolders,
  getIdList,
  findLocalItems,
}