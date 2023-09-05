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
