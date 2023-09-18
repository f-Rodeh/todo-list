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

function TextInput( label ) {
  function build(id){
    return Input('text', label, id)
  }

  return {
    build
  }
}

function DateInput( label ) {
  function ask(){
    const answer = prompt(label);
    return answer
  }

  return {
    ask,
  }
}

function NumberInput( label ) {
  function ask(){
    const answer = prompt(label);
    return answer
  }

  return {
    ask,
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