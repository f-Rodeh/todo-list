import { makeElement } from "./dom-utility";
export { loadPage }

const header = makeElement({
  type: 'header'
});

const logoImg = makeElement({
  type: 'img', 
  src: 'https://img.logoipsum.com/246.svg'
});

const logoTxt = makeElement({
  type: 'span', 
  textContent: 'TO DEW'
});

header.append(logoImg, logoTxt);

const loadPage = () => {
  document.body.append(
    header,
  )
}
