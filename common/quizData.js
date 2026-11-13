// クイズの答え（ハッシュ化済み）
const QUIZ_ANSWERS = {
  "f6-q1": "wy9l",
  "f6-q2": "10cla",
  "f6-q3": "wbc0",
  "f6-boss": "1aoldhi",
  "f5-q1": "17l",
  "f5-q2": "18j",
  "f5-q3": "1vemuvx",
  "f5-boss": "14uv1u",
  "f4-q1": "7bant",
  "f4-q2": "7ay8k",
  "f4-q3": "cs6r9",
  "f4-boss": "wyv3"
};

// クイズの解放パスワード（キーをハッシュ化済み）
const QUIZ_PASS = {
  "eocivp": {
    quizId: "f6-q1",
    floor: "f6",
    title: "6階の問題Q1"
  },
  "r34ugv": {
    quizId: "f6-q2",
    floor: "f6",
    title: "6階の問題Q2"
  },
  "1xpbpxu": {
    quizId: "f6-q3",
    floor: "f6",
    title: "6階の問題Q3"
  },
  "1pgjca7": {
    quizId: "f6-boss",
    floor: "f6",
    title: "6階のボス問"
  },
  "1xvjjh5": {
    quizId: "f5-q1",
    floor: "f5",
    title: "5階の問題Q1"
  },
  "1ypk5b8": {
    quizId: "f5-q2",
    floor: "f5",
    title: "5階の問題Q2"
  },
  "hxlfmz": {
    quizId: "f5-q3",
    floor: "f5",
    title: "5階の問題Q3"
  },
  "1it6r1y": {
    quizId: "f5-boss",
    floor: "f5",
    title: "5階のボス問"
  },
  "4mspx5": {
    quizId: "f4-q1",
    floor: "f4",
    title: "4階の問題Q1"
  },
  "bc3g4i": {
    quizId: "f4-q2",
    floor: "f4",
    title: "4階の問題Q2"
  },
  "9vvi42": {
    quizId: "f4-q3",
    floor: "f4",
    title: "4階の問題Q3"
  },
  "1oatuz6": {
    quizId: "f4-boss",
    floor: "f4",
    title: "4階のボス問"
  }
};


// [初期化]クイズの進行状況
// const INITIAL_QUIZ_PROGRESS = {
//   f6: {
//     "f6-q1": { unlock: false, cleared: false },
//     "f6-q2": { unlock: false, cleared: false },
//     "f6-q3": { unlock: false, cleared: false },
//     "f6-boss": { unlock: false, cleared: false },
//   },
//   f5: {
//     "f5-q1": { unlock: false, cleared: false },
//     "f5-q2": { unlock: false, cleared: false },
//     "f5-q3": { unlock: false, cleared: false },
//     "f5-boss": { unlock: false, cleared: false },
//   },
//   f4: {
//     "f4-q1": { unlock: false, cleared: false },
//     "f4-q2": { unlock: false, cleared: false },
//     "f4-q3": { unlock: false, cleared: false },
//     "f4-boss": { unlock: false, cleared: false },
//   }
// }

const INITIAL_QUIZ_PROGRESS = {
  f6: {
    "f6-q1": { unlock: true, cleared: false },
    "f6-q2": { unlock: true, cleared: false },
    "f6-q3": { unlock: true, cleared: false },
    "f6-boss": { unlock: true, cleared: false },
  },
  f5: {
    "f5-q1": { unlock: true, cleared: false },
    "f5-q2": { unlock: true, cleared: false },
    "f5-q3": { unlock: true, cleared: false },
    "f5-boss": { unlock: true, cleared: false },
  },
  f4: {
    "f4-q1": { unlock: true, cleared: false },
    "f4-q2": { unlock: true, cleared: false },
    "f4-q3": { unlock: true, cleared: false },
    "f4-boss": { unlock: true, cleared: false },
  }
}

