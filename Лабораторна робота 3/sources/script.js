var change = false;

function changeBackground()
{
	if (change == false)
	{
		document.body.style.backgroundColor = "green";
		document.getElementById("but").innerHTML = "Default background";
		change = true;
	}
	else
	{
		document.body.style.backgroundColor = "#992";
		document.getElementById("but").innerHTML = "Green background";
		change = false;
	}
}