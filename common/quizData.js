// クイズの答え（ハッシュ化済み）
const QUIZ_ANSWERS = {
  "f6-q1": "22bl",   // "aaa"
  "f6-q2": "2336",   // "bbb"
  "f6-q3": "23ur",   // "ccc"
  "f6-boss": "1sxv1", // "boss"
  "f5-q1": "22bl",   // "aaa"
  "f5-q2": "2336",   // "bbb"
  "f5-q3": "23ur",   // "ccc"
  "f5-boss": "1sxv1", // "boss"
  "f4-q1": "22bl",   // "aaa"
  "f4-q2": "2336",   // "bbb"
  "f4-q3": "23ur",   // "ccc"
  "f4-boss": "1sxv1"  // "boss"
};

// クイズの解放パスワード（キーをハッシュ化済み）
const QUIZ_PASS = {
  "10jm3": { // "6aaa"
    quizId: "f6-q1",
    floor: "f6",
    title: "6階の問題Q1"
  },
  "10kdo": { // "6bbb"
    quizId: "f6-q2",
    floor: "f6",
    title: "6階の問題Q2"
  },
  "10l59": { // "6ccc"
    quizId: "f6-q3",
    floor: "f6",
    title: "6階の問題Q3"
  },
  "vhtwj": { // "6boss"
    quizId: "f6-boss",
    floor: "f6",
    title: "6階のボス問"
  },
  "zwmk": { // "5aaa"
    quizId: "f5-q1",
    floor: "f5",
    title: "5階の問題Q1"
  },
  "zxe5": { // "5bbb"
    quizId: "f5-q2",
    floor: "f5",
    title: "5階の問題Q2"
  },
  "zy5q": { // "5ccc"
    quizId: "f5-q3",
    floor: "f5",
    title: "5階の問題Q3"
  },
  "uy1b6": { // "5boss"
    quizId: "f5-boss",
    floor: "f5",
    title: "5階のボス問"
  },
  "z9n1": { // "4aaa"
    quizId: "f4-q1",
    floor: "f4",
    title: "4階の問題Q1"
  },
  "zaem": { // "4bbb"
    quizId: "f4-q2",
    floor: "f4",
    title: "4階の問題Q2"
  },
  "zb67": { // "4ccc"
    quizId: "f4-q3",
    floor: "f4",
    title: "4階の問題Q3"
  },
  "ue8pt": { // "4boss"
    quizId: "f4-boss",
    floor: "f4",
    title: "4階のボス問"
  }
};


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

