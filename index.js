// Your code here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = (activity = "go to the office") => {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(outerParam = "*") {
  return (innerParam = "special") => {
    return `You are ${outerParam}${innerParam}${outerParam}!`
  }
}

const Calculator = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  multiply: (a, b) => {
    return a * b;
  },
  divide: (a, b) => {
    return a / b;
  }
}

function actionApplyer(startInt, funcArr) {
  let answer = startInt;
  if (funcArr.length > 0) {
    for (const element of funcArr) {
      answer = element(answer)
    };
  }
  return answer;
}