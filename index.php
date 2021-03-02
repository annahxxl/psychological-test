<!DOCTYPE html>
<html lang="en" class="main">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>호그와트 기숙사 배정 테스트</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <!-- Header -->
    <header>
      <a href="index.php" class="title"><img src="img/hogwarts.png" alt="Hogwarts Logo" class="logo"></a>
      <div class="title">HOGWARTS HOUSE</div>
    </header>

    <!-- Test -->
    <section class="test">
      <div class="question-container">
        호그와트 마법학교 기숙사 배정 테스트입니다.<br />
        당신의 이름을 입력하고 시작하세요!
      </div>
      <div class="answer-container">
        <form action="start.php" method="POST">
          <input
            type="text"
            name="user"
            placeholder="이름을 입력하세요."
            class="input-box"
            autofocus
          />
          <input type="submit" value="시작하기" class="btn" />
        </form>
      </div>
    </section>

    <!-- Footer -->
    <footer></footer>
  </body>
</html>
