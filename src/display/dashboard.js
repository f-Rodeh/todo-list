import { makeElement, makeIcon } from "./dom-utility"

export { makeDashboard, FolderCard, buttonNewFolder }

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
    const card = FolderCard( item )
    main.append( card )
  });

  return main
}

function FolderCard( folder ){
  const output = makeElement({
    type: 'div',
    classList: ['folder card']
  })
  
  output.dataset.uid = folder.uid
  let itemCount = folder.getTasks().length

  const icons = document.createElement('div');
  icons.classList.add('icons');

  const trashIcon = makeIcon('trash-outline');
  icons.append(trashIcon)

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
    }),
    icons
  )
  return output
}

function formatItemCount( count ){
  const suffix = count === 1 ? 'task' : 'tasks'
  return `${count} ${suffix}`
}