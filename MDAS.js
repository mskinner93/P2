var playerScore;

function curScore()
{
  playerScore = getCookie();
}

function MDAS()
{
  var answer;
  answer = document.getElementById("num2").value;

  if(isNaN(answer))
  {
    document.getElementById("message").innerHTML = "Enter numbers only!";
  }
  else if(answer != 10.14)
  {
    document.getElementById("message").innerHTML = "Sorry, that is incorrect!";

  }
  else
  {
    document.getElementById("message").innerHTML = "You are correct!";
    addScore();
  }
}
