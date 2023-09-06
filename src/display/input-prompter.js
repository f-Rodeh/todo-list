export { TextInput, DateInput, NumberInput, promptQuestionnaire }

function TextInput( label ) {
  function ask(){
    const answer = prompt(label);
    return answer
  }

  return {
    ask,
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