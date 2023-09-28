import { makeElement } from "./dom-utility";
export { loadPage, setPageContent }

const header = makeElement({type: 'header'})

const logoContainer = document.createElement('div')
logoContainer.classList.add('logo-container')
logoContainer.addEventListener('click', () => location.reload()) // TODO: change dom to home instead of reloading everything

logoContainer.append(
  makeElement({
    type: 'img',
    src: 'https://img.logoipsum.com/246.svg'
  }),
  makeElement({
    type: 'span', 
    textContent: 'TO DEW'
  })
)

header.append(logoContainer)

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
