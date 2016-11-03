var playerScore = document.getElementsByTagName("playerScore");

function wordsToNum()
{
    var answer;
    answer = document.getElementById("num1").value;

    if(isNaN(answer))
    {
      document.getElementById("message").innerHTML = "Enter numbers only!";
    }
    else if(answer != "10,1,22,1,19,3,18,9,16,20" || answer != "1012211931891620" )
    {
      document.getElementById("message").innerHTML = "Sorry, that is incorrect!";
    }
    else
    {
      document.getElementById("message").innerHTML = "You are correct!";
      addScore();
    }

}
