const question = document.querySelector(".question-container");
const answerBox1 = document.querySelector(".answer-box1");
const answerBox2 = document.querySelector(".answer-box2");

// data
const questionList = [
  "Q1.\n\n호그와트로 가는 급행열차에 탑승한 나는",
  "Q2.\n\n열차에 착석한 당신.\n얼마 지나지 않아 새로운 사람이 같은 칸으로 들어왔다.\n알고 보니 그 유명한 '해리 포터'란다! 그때 나의 반응은?",
  "Q3.\n\n같은 칸 사람들과 대화를 나누던 중\n한 친구가 해리에게 계속해서 무례한 질문을 한다.\n본인은 무례한 질문인지 잘 모르는 것 같다. 이때 나는",
  "Q4.\n\n호그와트에 도착한 첫날.\n당신은 비밀의 방과 통로들에 관한 이야기를 들었다.\n그러나 알아낸 것 이외에도 엄청난 비밀이 숨어있는 것 같다.",
  "Q5.\n\n교장 선생님의 훈화 말씀 중\n금지된 숲과 3층 복도 끝에는 접근하지 말라고 신신당부를 하셨다.\n그러나 가지 말라고 하면 더 궁금한 법.",
  "Q6.\n\n마법 약 수업에서 실습을 하던 중,\n물려받은 교과서에 적혀있는 제조법에는 까맣게 두 줄이 그어져있고\n옆에 수정된 레시피가 적혀있는 것을 보았다. 그럴 때 나는",
  "Q7.\n\n친한 친구가 출전하는 퀴디치 경기 날이다.\n그런데 경기 중 친구의 빗자루가 말을 듣지 않는다!\n친구는 하늘에서 바닥으로 떨어지기 직전이고 친구의 빗자루는 마법에 걸린 거 같다.\n관중을 살펴보니 스네이프 교수가 중얼거리고 있다.",
  "Q8.\n\n마법 약 이론 수업 시간. 오늘까지인 과제가 있었고\n친구는 어젯밤 열이 심하게 나 과제를 마무리하지 못했다고 한다.\n스네이프 교수에게 심한 말을 들으며 혼난 친구는 기가 상당히 죽어있다.\n이때 나는",
  "Q9.\n\n비행술 수업 시간.\n교수님이 잠깐 자리를 비운 사이\n다른 기숙사 학생이 친구의 소중한 물건을 빼앗아 빗자루를 타고 도망을 가고 있다.\n친구는 몸싸움 중 다리를 다친 상태.\n계속 가만히 있다간 물건이 곧 망가질 것 같다. 보다 못한 나는",
  "Q10.\n\n각 학교 대표 마법사들의 실력을 겨루는 시합인 트라이 위저드 시합에\n챔피언으로 뽑혀 출전하게 된 당신은\n첫 시험으로 다른 특징을 가진 네 마리의 험악한 용 중\n한 마리를 상대로 황금 알을 가져와야 한다.\n용은 경기 당일 제비뽑기로 정해진다.",
  "Q11.\n\n전 시험에서 무사히 통과한 당신은\n검은 호수에서 소중한 것을 되찾아 오라는 새로운 임무를 받는다.\n물속에 들어갔더니 당신과 가장 친한 친구 2명이 잠이 든 채 발이 묶여있다.\n두 명 모두 데려가고 싶으나 호수의 인어들이 한 명만 데려가라며 목에 창을 들이민다.",
  "Q12.\n\n내가 둘 중 하나의 동아리에 들어가게 된다면?",
];
const answerList = [
  {
    first:
      "간식을 나누어 먹고 있고 서로 들떠 보이는 아이들이\n있는 칸에 들어가 합석하자 한다.",
    second:
      "한 명은 자고 있고 한 명은 책을 읽고 있는 칸에 들어가 합석하자 한다.",
  },
  {
    first: "그 유명한 해리? 너무 신기하다. 먼저 말을 걸어본다.",
    second:
      "그 유명한 해리? 너무 신기하다. 쳐다보지 않으려 하지만 자꾸 눈길이 간다.",
  },
  {
    first: "지금 하고 있는 말이 끝나면 질문이 무례한 것 같다고 말한다.",
    second: "기분이 나쁘면 해리가 알아서 이야기 할 것이다. 그냥 무시한다.",
  },
  {
    first: "마법학교이니 그런 것쯤은 당연하다고 생각한다.",
    second: "무슨 비밀이 있는 건지 이미 온갖 상상을 하느라 바쁘다.",
  },
  {
    first:
      "위험하다 하니 일단은 가지 말고 좀 더 강해지면 조사 후 들어가 보도록 한다.",
    second: "들어가긴 무서우나 궁금하다. 일단은 뭐가 있을지 멀리서라도 본다.",
  },
  {
    first: "어떤 것을 보고 실습해야 할지 고민하다 교수님이 오시면 여쭤본다.",
    second:
      "빨리 끝내고 싶으니 일단 느낌상 맞는거 같은 레시피를 일단 먼저해본다.\n틀리면 다시 해야지 뭐..",
  },
  {
    first: "친구가 떨어질까 걱정은 되지만 확실한 건 아니니 괜히 나서지 않는다.",
    second:
      "중얼거리는 모습이 누가 봐도 스네이프 교수가 마법을 걸고 있는 것 같다.\n아무도 모르게 옷에 불을 붙여 그만두게 한다.",
  },
  {
    first: "다음에 이런 일이 있으면 과제를 도와줄 테니 미리 말해달라 한다.",
    second:
      "아팠다고 말을 하지 그랬냐며\n교수 욕을 하며 대체 얼마나 아픈 거였냐고 물어본다.",
  },
  {
    first:
      "가만히 지켜보다가 망가지면 새로 구매해 선물로 주기로 하고\n교수님이 오시면 바로 고자질한다.",
    second:
      "친구가 평소에 목숨처럼 생각하던 물건이다.\n물건은 망가지기 직전이고 물건을 빼앗아간 학생을 이길 수 있을 것 같으니\n일단 빗자루를 타고 쫓아가 물건을 되찾아온다.",
  },
  {
    first: "각 네 마리 용을 이길 수 있는 방법에 대해 미리 정보를 구해본다.",
    second:
      "내가 상대할 용이 결정되면 경기 직전\n도움이 될만한 사람에게 조언을 구해본다.",
  },
  {
    first:
      "시간이 촉박하나\n인어들의 수가 너무 많아 혼자서 두 친구를 구하는 데는 역부족이다.\n일단 한 명을 올려보내고 신속하게 다시 돌아와 마저 구해보도록 한다.",
    second:
      "이렇게 시간만 끌다가는 시합에서도 지고\n친구들의 상태를 보아하니 곧 친구들도 잃게 생겼다.\n어떤 방법을 써서든 인어들을 내쫓고 둘 다 데려가도록 해본다.",
  },
  {
    first:
      "< 기숙사 퀴디치 팀 >\n기숙사 점수에 큰 기여를 할 수 있다.\n체계적이고 동아리 모임이 있는 날 시간만 잘 비워둔다면\n무리 없이 즐겁게 할 수 있을 것 같다.",
    second:
      "< 덤블도어의 군대 >\n생긴지 얼마 되지 않은 신생 동아리.\n주로 어둠의 마법 방어술을 다루기 때문에\n5학년 때 치를 표준 마법사 시험에도 아주 큰 도움이 될 것이다.\n그러나 전투는 예고 없이 일어나기 때문에\n상황에 따라 갑자기 훈련에 임해야 할 때도 있다.",
  },
];

// function
let qnaNum = 0;
let type1 = 0;
let type2 = 0;
let type3 = 0;
let type4 = 0;

function finalResult(userMbtiToString) {
  switch (userMbtiToString) {
    case "ESFJ":
    case "ESFP":
    case "ENFJ":
    case "ISFJ":
      location.href = "result/gryffindor.php";
      break;
    case "ISTP":
    case "ISFP":
    case "INFP":
    case "ENFP":
      location.href = "result/hufflepuff.php";
      break;
    case "ISTJ":
    case "INFJ":
    case "INTP":
    case "INTJ":
      location.href = "result/ravenclaw.php";
      break;
    case "ESTJ":
    case "ESTP":
    case "ENTP":
    case "ENTJ":
      location.href = "result/slytherin.php";
      break;
  }
}

function calcType() {
  type1 >= 2 ? (type1 = "E") : (type1 = "I");
  type2 >= 2 ? (type2 = "S") : (type2 = "N");
  type3 >= 2 ? (type3 = "T") : (type3 = "F");
  type4 >= 2 ? (type4 = "J") : (type4 = "P");
  let userMbti = [type1, type2, type3, type4];
  let userMbtiToString = "";
  userMbtiToString = userMbti.join("");
  finalResult(userMbtiToString);
}

function printQna() {
  if (qnaNum == 12) {
    calcType();
  } else {
    question.innerText = questionList[qnaNum];
    answerBox1.innerText = answerList[qnaNum].first;
    answerBox2.innerText = answerList[qnaNum].second;
  }
}

function givePointToBox1() {
  if (qnaNum < 3) {
    type1++;
  } else if (qnaNum < 6) {
    type2++;
  } else if (qnaNum < 9) {
    type3++;
  } else {
    type4++;
  }
  qnaNum++;
  printQna();
}

function givePointToBox2() {
  qnaNum++;
  printQna();
}

function init() {
  printQna();
  answerBox1.addEventListener("click", givePointToBox1);
  answerBox2.addEventListener("click", givePointToBox2);
}

init();
