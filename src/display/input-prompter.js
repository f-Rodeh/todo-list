import { Modal } from "./dom-utility";

export { TextInput, DateInput, NumberInput, promptQuestionnaire, InputForm }

function TextInput( label ) {
  function ask(){
    const answer = prompt(label);
    return answer
  }

  function build(){
    const div = document.createElement('div')
    const elementLabel = document.createElement('label')
    const element = document.createElement('input')
    elementLabel.textContent = label;
    element.type = 'text'
    div.append(elementLabel, element)
    return div
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
  }

  return modal
}