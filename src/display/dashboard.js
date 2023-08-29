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
  main.append( buttonNewFolder )

  if (!folders) return main

  folders.forEach( item => {
    const element = makeFolder( item )
    main.append( element )
  });

  return main
}

function makeFolder( folder ){
  const output = makeElement({
    type: 'div',
    classList: ['folder card']
  })
  
  output.dataset.uid = folder.uid
  const itemCount = `${folder.getTasks.length} items`

  output.append(
    makeElement({
      type: 'h3',
      textContent: folder.title,
      classList: ['title']
    }),
    makeElement({
      type: 'span',
      classList: ['subtitle'],
      textContent: itemCount
    })
  )
  return output
}