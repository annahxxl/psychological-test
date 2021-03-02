<?php
  $user_name = $_POST['user'];
  $pattern = "/[ #\&\+\-%@=\/\\\:;,\.'\"\^`~\_|\!\?\*$#<>()\[\]\{\}0-9]/u";
  // $pattern = "/[a-zA-z가-힣]+$/";
  if (empty($user_name) || preg_match($pattern, $user_name)){
    echo '<script>alert("이름을 올바르게 입력해 주세요."); location.href="index.php";</script>';
  }
?>
<!DOCTYPE html>
<html lang="en" class="main">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>호그와트 기숙사 배정 테스트 - START</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  </head>
  <body>
    <!-- Header -->
    <header>
      <a href="index.php"><img src="img/sortingHat.png" alt="Logo" class="hat"/></a>
    </header>

    <!-- Section -->
    <section class="test">
      <div class="question-container">
        <br>
        친애하는 <?php echo $user_name; ?>씨에게,<br>
        귀하가 호그와트 마법학교에 입학하게 되었다는 걸 알려드리게 되어 기쁩니다.<br>
        기숙사는 모자 배정 테스트를 통해 정해집니다.<br><br>
        당신은 여러 기숙사에 부합할 수도 있으나<br>
        그중 가장 어울리는 기숙사를 배정 모자가 배정시켜 줄 것입니다.<br>
        다음의 각 문항에 대해 본인의 행동과 더 가깝다고 생각하는 답변을 선택해 주세요.<br>
      </div>
      <div class="answer-container">
        <form action="takeTest.php">
          <input type="submit" value="기숙사 배정 받기" class="btn"/>
        </form>
      </div>
    </section>

    <!-- Footer -->
    <footer></footer>
  </body>
</html>
