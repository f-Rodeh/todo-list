import { Div, Img, Span, makeElement } from "./dom-utility";
export { Page }

const Logo = Div('logo-container')
Logo.addEventListener('click', () => location.reload())
Logo.append(
  Img('https://img.Logoipsum.com/246.svg'),
  Span('TO DEW')
)

const header = makeElement({type: 'header'})
header.append(Logo)

const navBar = makeElement({type: 'nav'});

let main = makeElement({type: 'main'});

function build() {
  document.body.append(
    header,
    navBar,
    main
  )
}

function setContent( element ) {
  main.replaceWith( element )
  main = element
}

const Page = {
  build,
  setContent
}