import { makeDashboard } from "./dashboard";
import { makeElement } from "./dom-utility";
export { loadPage, setPageContent }

const header = makeElement({type: 'header'});
header.append(
  makeElement({
    type: 'img', 
    src: 'https://img.logoipsum.com/246.svg'
  }),
  makeElement({
    type: 'span', 
    textContent: 'TO DEW'
  })
)

const navBar = makeElement({type: 'nav'});
navBar.append(
  makeElement({
    type: 'span',
    textContent: 'My Folders'
  }),
  makeElement({
    type: 'span',
    textContent: 'Personal'
  }),
  makeElement({
    type: 'span',
    textContent: 'Do the dishes'
  })
)

let main = makeElement({type: 'main'});

function loadPage() {
  document.body.append(
    header,
    navBar,
    main
  )
}

function setPageContent( element ) {
  main.replaceWith( element )
  main = element
}
