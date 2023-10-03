export { makeElement, Icon, Modal, Div, Img, Span }

function makeElement( obj ){
  if(!obj.hasOwnProperty('type')) return
  const output = document.createElement( obj.type )

  for (const key in obj) {
    if ( key === 'type' ) continue
    if (!Object.hasOwnProperty.call(obj, key)) continue
    output[key] = obj[key];
  }

  return output
}

function Div( classList ){
  const output = document.createElement('div');
  output.classList = classList;
  return output
}

function Img( src ){
  const output = document.createElement('img');
  output.src = src;
  return output
}

function Span( textContent ){
  const output = document.createElement('span');
  output.textContent = textContent;
  return output
}

function Icon( name ){
  if(!name) throw new Error('No icon name provided')

  const output = document.createElement('ion-icon');
  output.classList.add('md','hydrated')
  output.setAttribute('role', 'img')
  output.setAttribute('name', name)

  return output
}

function Modal(){
  const background = makeElement({type: 'div', classList: ['modal background']})
  const modal = makeElement({type: 'div', classList: ['modal foreground']})
  const content = document.createElement('div')
  content.classList.add('content')

  const actions = ModalActions();
  actions.setCancelAction( dismiss )
  
  modal.append(content, actions.root)
  background.append(modal)
  document.body.append(background)

  background.addEventListener('click', (e) => {
    if(e.target === background) dismiss()
  })

  function dismiss(){
    background.remove()
  }

  const setMainAction = ( onclick ) => {
    actions.setMainAction( onclick )
  }

  return {
    content,
    setMainAction,
    dismiss
  }
}

function ModalActions(){
  const root = document.createElement('div')
  root.classList.add('actions')

  const cancel = makeElement({type: 'button', textContent: 'Cancel'})
  cancel.classList.add('cancel', 'outlined')
  const confirm = makeElement({type: 'button', textContent: 'Okay!'})
  confirm.classList.add('confirm', 'filled')

  root.append(cancel, confirm)

  const setMainAction = ( onclick ) => {
    confirm.addEventListener('click', onclick)
  }

  const setCancelAction = ( onClick ) => {
    cancel.addEventListener('click', onClick)
  }

  return {
    root,
    setMainAction,
    setCancelAction
  }
}