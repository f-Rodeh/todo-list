import { makeElement } from "./dom-utility"

export { makeDashboard }

function makeDashboard( folders ){
  const main = makeElement({type: 'main'})
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
    textContent: folder.title,
  })
  output.classList.add('folder-card')
  output.dataset.uid = folder.uid
  return output
}