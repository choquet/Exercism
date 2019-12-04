const ANSWERS = {
  question: "Sure.",
  yell: "Whoa, chill out!",
  yellQuestion: "Calm down, I know what I'm doing!",
  addressHim: "Fine. Be that way!",
  else: "Whatever."
}

export const hey = (message) => {

  message = message.trim()

  const question = message.endsWith("?")
  const yell = (message == message.toUpperCase()) && (/[a-zA-Z]+/.test(message))
  const silence = (message.length == 0)

  if (yell && question) return ANSWERS.yellQuestion
  if (yell) return ANSWERS.yell
  if (question) return ANSWERS.question
  if (silence) return ANSWERS.addressHim
  return ANSWERS.else
  
};
