import { Modal } from "./dom-utility";

export { TextInput, DateInput, NumberInput, InputForm, getFormObject }

function Input( type, label, id ){
  const _label = document.createElement('label')
  _label.textContent = label;
  _label.setAttribute('for', id)
  
  const _input = document.createElement('input')
  _input.id = id;
  _input.type = type;

  const div = document.createElement('div')
  div.append(_label, _input)
  return div
}

function TextInput( label, maxlength) {
  function build(id){
    const element = Input('text', label, id)
    const input = element.querySelector('input')
    input.maxLength = maxlength;
    return element;
  }

  return {
    build
  }
}

function DateInput( label ) {
  function build(id){
    return Input('date', label, id)
  }

  return {
    build
  }
}

function NumberInput( label, defaultValue, min, max ) {
  function build(id){
    const element = Input('number', label, id);
    const input = element.querySelector('input')
    input.defaultValue = defaultValue;
    input.min = min;
    input.max = max;
    return element
  }

  return {
    build
  }
}

function InputForm( questionnaire ){
  const modal = Modal();

  for (const key in questionnaire) {
    if (!questionnaire.hasOwnProperty(key)) return
    const question = questionnaire[key];
    const input = question.build(key);
    modal.content.append(input)
  }

  return modal
}

function getFormObject( element ){
  let output = {}
  const inputs = element.querySelectorAll('input');
  inputs.forEach(input => {
    output[input.id] = input.value
  });
  return output
}