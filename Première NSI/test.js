$(document).ready(function() {
	$("input[type=radio]").click(function() {
		if($(this).hasClass("ok")
			&& parseInt($(this).attr("name").substr(4)) > 0)
		{
		    $(".reponse"+$(this).attr("name").substr(4)).text("Bonne réponse").css("color","green");
		}
		else
		{
		    $(".reponse"+$(this).attr("name").substr(4)).text("Mauvaise réponse").css("color","red");
		}
	});
});
