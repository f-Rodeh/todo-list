import { makeElement, makeIcon } from "./dom-utility"

export { makeDashboard }

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

function makeDashboard( folders ){
  const main = makeElement({type: 'main'})
  main.classList.add('dashboard')
  main.append( buttonNewFolder )

  if (!folders) return main

  folders.forEach( item => {
    const card = makeFolderCard( item )
    main.append( card )
  });

  return main
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