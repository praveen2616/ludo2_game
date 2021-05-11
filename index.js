var p=Math.floor(Math.random() * 6) +1;
var q=Math.floor(Math.random() * 6) +1;
if(p==q)
{
	var pic1="dice"+p+".png";
	var pic2="dice"+q+".png";
	document.querySelectorAll("img")[0].setAttribute("src",pic1);
	document.querySelectorAll("img")[1].setAttribute("src",pic2);
	document.querySelector("h1").innerHTML="Draw";
}
else if(p>q)
{
	var pic1="dice"+p+".png";
	var pic2="dice"+q+".png";
	document.querySelectorAll("img")[0].setAttribute("src",pic1);
	document.querySelectorAll("img")[1].setAttribute("src",pic2);
	document.querySelector("h1").innerHTML="Player 1 Wins";
}
else
{
	var pic1="dice"+p+".png";
	var pic2="dice"+q+".png";
	document.querySelectorAll("img")[0].setAttribute("src",pic1);
	document.querySelectorAll("img")[1].setAttribute("src",pic2);
	document.querySelector("h1").innerHTML="Player 2 Wins";
}