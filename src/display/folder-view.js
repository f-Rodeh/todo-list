import { makeElement } from "./dom-utility"

export { makeFolderView }

function makeFolderView( folder ){
  const main = makeElement({
    type: 'main',
    textContent: `Hello ${folder.title}`
  })
  return main
}