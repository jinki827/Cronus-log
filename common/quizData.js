// クイズの答え
const QUIZ_ANSWERS = {
  "f6-q1": "aaa",
  "f6-q2": "bbb",
  "f6-q3": "ccc",
  "f6-boss":"boss",
  "f5-q1": "aaa",
  "f5-q2": "bbb",
  "f5-q3": "ccc",
  "f5-boss":"boss",
  "f4-q1": "aaa",
  "f4-q2": "bbb",
  "f4-q3": "ccc",
  "f4-boss":"boss"
}

// クイズの解放パスワード
const QUIZ_PASS = {
  "6aaa": {
    quizId: "f6-q1",
    floor: "f6",
    title: "6階の問題Q1"
  },
  "6bbb": {
    quizId: "f6-q2",
    floor: "f6",
    title: "6階の問題Q2"
  },
  "6ccc": {
    quizId:"f6-q3",
    floor: "f6",
    title: "6階の問題Q3"
  },
  "6boss": {
    quizId: "f6-boss",
    floor: "f6",
    title: "6階のボス問"
  },
  "5aaa": {
    quizId: "f5-q1",
    floor: "f5",
    title: "5階の問題Q1"
  },
  "5bbb": {
    quizId: "f5-q2",
    floor: "f5",
    title: "5階の問題Q2"
  },
  "5ccc": {
    quizId: "f5-q3",
    floor: "f5",
    title: "5階の問題Q3"
  },
  "5boss":{
    quizId: "f5-boss",
    floor: "f5",
    title: "5階のボス問"
  },
  "4aaa": {
    quizId: "f4-q1",
    floor: "f4",
    title: "4階の問題Q1"
  },
  "4bbb": {
    quizId: "f4-q2",
    floor: "f4",
    title: "4階の問題Q2"
  },
  "4ccc": {
    quizId: "f4-q3",
    floor: "f4",
    title: "4階の問題Q3"
  },
  "4boss": {
    quizId: "f4-boss",
    floor: "f4",
    title: "4階のボス問"
  }
}


// [初期化]クイズの進行状況
const INITIAL_QUIZ_PROGRESS = {
  f6: {
    "f6-q1": { unlock: false, cleared: false },
    "f6-q2": { unlock: false, cleared: false },
    "f6-q3": { unlock: false, cleared: false },
    "f6-boss": { unlock: false, cleared: false },
  },
  f5: {
    "f5-q1": { unlock: false, cleared: false },
    "f5-q2": { unlock: false, cleared: false },
    "f5-q3": { unlock: false, cleared: false },
    "f5-boss": { unlock: false, cleared: false },
  },
  f4: {
    "f4-q1": { unlock: false, cleared: false },
    "f4-q2": { unlock: false, cleared: false },
    "f4-q3": { unlock: false, cleared: false },
    "f4-boss": { unlock: false, cleared: false },
  }
}

