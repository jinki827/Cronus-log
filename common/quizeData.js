// [初期化]クイズの進行状況

const INITIAL_QUIZ_PROGRESS = {
  floor6: {
    "f6-q1": { unlock: false, cleared: false },
    "f6-q2": { unlock: false, cleared: false },
    "f6-q3": { unlock: false, cleared: false },
    "f6-boss": { unlock: false, cleared: false },
  },
  floor5: {
    "f5-q1": { unlock: false, cleared: false },
    "f5-q2": { unlock: false, cleared: false },
    "f5-q3": { unlock: false, cleared: false },
    "f5-boss": { unlock: false, cleared: false },
  },
  floor4: {
    "f4-q1": { unlock: false, cleared: false },
    "f4-q2": { unlock: false, cleared: false },
    "f4-q3": { unlock: false, cleared: false },
    "f4-boss": { unlock: false, cleared: false },
  }
}

// クイズの答え
const QUIZ_ANSWERS = {
  floor6: {
    "f6-q1": "aaa",
    "f6-q2": "bbb",
    "f6-q3": "ccc",
    "f6-boss":"boss"
  },
  floor5: {
    "f5-q1": "aaa",
    "f5-q2": "bbb",
    "f5-q3": "ccc",
    "f5-boss":"boss"
  },
  floor4: {
    "f4-q1": "aaa",
    "f4-q2": "bbb",
    "f4-q3": "ccc",
    "f4-boss":"boss"
  }
}
