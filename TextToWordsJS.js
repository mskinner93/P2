var playerScore;

function curScore()
{
  playerScore = getCookie("myScore");
  Number(playerScore);
}

function wordsToNum()
{
    var answer;
    answer = document.getElementById("num1").value;

    if(isNaN(answer))
    {
      document.getElementById("message").innerHTML = "Enter numbers only!";
    }
    else if(answer != "31545" )
    {
      document.getElementById("message").innerHTML = "Sorry, that is incorrect!";
    }
    else
    {
      document.getElementById("message").innerHTML = "You are correct!";
      addScore();
    }

}
