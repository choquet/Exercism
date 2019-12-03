const ANSWERS = {
  question: "Sure.",
  yell: "Whoa, chill out!",
  yellQuestion: "Calm down, I know what I'm doing!",
  addressHim: "Fine. Be that way!",
  else: "Whatever."
}

export const hey = (message) => {

  message = message.trim()

  let question = message.endsWith("?")
  let yell = (message == message.toUpperCase()) && (/[a-zA-Z]+/.test(message))
  let silence = (message.length == 0)

  if (yell && question) {
    return ANSWERS.yellQuestion
  } else if (yell) {
    return ANSWERS.yell
  } else if (question) {
    return ANSWERS.question
  } else if (silence) {
    return ANSWERS.addressHim
  } else {
    return ANSWERS.else
  }
};
