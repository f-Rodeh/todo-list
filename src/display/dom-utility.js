export { makeElement, makeIcon }

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

function makeIcon( name ){
  if(!name) throw new Error('No icon name provided')

  const output = document.createElement('ion-icon');
  output.classList.add('md','hydrated')
  output.setAttribute('role', 'img')
  output.setAttribute('name', name)

  return output
}