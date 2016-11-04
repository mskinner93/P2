var playerScore;

function curScore()
{
  playerScore = getCookie();
}

function power()
{
  var answer;
  answer = document.getElementById("num3").value;

  if(isNaN(answer))
  {
    document.getElementById("message").innerHTML = "Enter numbers only!";
  }
  else if(answer != 3125)
  {
    document.getElementById("message").innerHTML = "Sorry, that is incorrect!";
  }
  else
  {
    document.getElementById("message").innerHTML = "You are correct!";
    addScore();

  }
}
