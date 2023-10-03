import { Page } from "./page-container";

export { addTab }

// Just works to assign tabIndex, replace with a counter;
let navigationHistory = [];

function addTab( textContent, domReference ){
  const navigationBar = document.querySelector('nav');

  const tab = document.createElement('span')
  tab.textContent = textContent
  tab.dataset.tabIndex = navigationHistory.length

  tab.addEventListener('click', () => {
    Page.setContent( domReference )
    clearHistoryAfter( tab.dataset.tabIndex )
    clearNavBarAfter( tab.dataset.tabIndex )
  })

  navigationBar.append( tab )
  navigationHistory.push( domReference )
}

function clearHistoryAfter( index ){
  navigationHistory = navigationHistory.slice(0, index+1);
}

function clearNavBarAfter( index ){
  const navigationTabs = document.querySelector('nav').childNodes;
  const lastIndex = navigationTabs.length -1;

  for(let i = lastIndex; i > index; i--){
    const element = navigationTabs[i];
    element.remove()
  }
}