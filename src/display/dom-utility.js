export { makeElement }

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