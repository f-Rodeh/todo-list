import { Modal } from "./dom-utility";

export { TextInput, DateInput, NumberInput, promptQuestionnaire, InputForm }

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

function TextInput( label, id ) {
  function ask(){
    const answer = prompt(label);
    return answer
  }

  function build(){
    return Input('text', label, id)
  }

  return {
    ask,
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

function promptQuestionnaire( questionnaire ){
  let answers = {}
  for (const key in questionnaire) {
    if (!questionnaire.hasOwnProperty(key)) return

    const question = questionnaire[key];
    answers[key] = question.ask();
  }
  return answers
}

function InputForm( questionnaire ){
  const modal = Modal();

  for (const key in questionnaire) {
    if (!questionnaire.hasOwnProperty(key)) return
    const question = questionnaire[key];
    const input = question.build();
    modal.content.append(input)
    //TODO: Add id to bind label
    //TODO: Add name to read it on the object
  }

  return modal
}

function getFormObject( element ){
  // create empty output object
  // get all inputs in the element
  // for each input, add the the "name || id" as key and "value" as value to the output
  // return output
}