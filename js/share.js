const shareBtn = document.querySelector(".share");

shareBtn.addEventListener("click", () => {
  // SDK를 초기화 합니다. 사용할 앱의 JavaScript 키를 설정해 주세요.
  Kakao.init("43034a6b7311143fa266824a73b4003d");
  // SDK 초기화 여부를 판단합니다.
  console.log(Kakao.isInitialized());

  Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
      title: "호그와트 기숙사 배정 테스트",
      description: "당신과 잘 어울리는 기숙사는 어디인가요?",
      imageUrl: "",
      link: {
        mobileWebUrl: "http://127.0.0.1",
      },
    },
    buttons: [
      {
        title: "테스트하러 가기",
        link: {
          mobileWebUrl: "http://127.0.0.1",
        },
      },
    ],
  });
});
