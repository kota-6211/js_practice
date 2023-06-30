const kiyo_quiz = [
    {
      question: '身長はどれくらいでしょうか？',
      answer: [
        "177 cm",
        "172 cm",
        "182 cm",
        "185 cm",
        ],
      correct: "182 cm"
    },{
      question: 'キヨさんの活動はいつ始まりましたか？',
      answer: [
        "2009年",
        "2011年",
        "2014年",
        "2016年",
        ],
      correct: "2014年"
    },{
      question: '出身地はどこでしょうか？',
      answer: [
        "東京",
        "大阪",
        "青森",
        "北海道",
        ],
      correct: "北海道"
    },{
      question: '血液型は何型でしょうか？',
      answer: [
        " A型",
        " B型",
        " O型",
        " AB型",
        ],
      correct: "B型"
    },{
      question: '本名について、最も可能性が高いものはどれでしょうか？？',
      answer: [
        " 非公表",
        " キヨカワ",
        " 拓哉",
        " 全て",
        ],
      correct: "全て"
    }
  ]
let quiz_length = kiyo_quiz.length;
let quiz_index = 0;

console.log();

const $button = document.getElementsByTagName('button');

let answer_length = kiyo_quiz[quiz_index].answer.length;
let answer_index = 0;

const quizFormat = () => {
  document.getElementById('js-question').textContent = kiyo_quiz[quiz_index].question;

  for(let answer_index = 0; answer_index < answer_length; answer_index++) {
    $button[answer_index].textContent = kiyo_quiz[quiz_index].answer[answer_index];
  }
}

quizFormat();

const clicked = (e) => {
  if(e.target.textContent === kiyo_quiz[quiz_index].correct) {
    window.alert("正解！");
  }else{
    window.alert("ぶっぶー");
  }
  quiz_index++;
  if(quiz_index < quiz_length){
    quizFormat();
  }else{
    window.alert("終わり");
  }

}

let click_index = 0

for(let click_index = 0; click_index < answer_length; click_index++) {
  $button[click_index].addEventListener('click', (e) => {
    clicked(e);
  });
}

