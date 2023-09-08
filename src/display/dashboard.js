import { makeElement, makeIcon } from "./dom-utility"

export { makeDashboard, makeFolderCard, buttonNewFolder }

const buttonNewFolder = makeElement({
  type: 'div',
  classList: ['new-folder card']
})

buttonNewFolder.append(
  makeIcon('add-outline'),
  makeElement({
    type: 'span',
    textContent: 'New Folder',
    classList: ['subtitle']
  }),
)

const main = makeElement({type: 'main'})
main.classList.add('dashboard')
main.append( buttonNewFolder )

function makeDashboard( folders ){
  if (!folders) return main

  folders.forEach( item => {
    const card = makeFolderCard( item )
    main.append( card )
  });

  return main
}

function addFolder( folder ){
  if(!folder) throw new Error('No folder provided');
  const card = makeFolderCard( folder )
  main.append( card )
}

function makeFolderCard( folder ){
  const output = makeElement({
    type: 'div',
    classList: ['folder card']
  })
  
  output.dataset.uid = folder.uid
  let itemCount = folder.getTasks().length

  output.append(
    makeElement({
      type: 'h3',
      textContent: folder.title,
      classList: ['title']
    }),
    makeElement({
      type: 'span',
      classList: ['subtitle'],
      textContent: formatItemCount(itemCount)
    })
  )
  return output
}

function formatItemCount( count ){
  const suffix = count === 1 ? 'task' : 'tasks'
  return `${count} ${suffix}`
}