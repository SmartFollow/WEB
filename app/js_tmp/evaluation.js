$(document).ready(function()
{
	$(".options-list").on('click', '.option-block', function(e)
	{
		e.preventDefault();

		var list = $(this).closest(".options-list");

		if (list.attr('data-reverse') == "true")
		{
			list.find(".option-block").each(function () {
				$(this).removeClass('active');
			});
			$(this).addClass('active');
		}
		else
		{
			list.find(".option-block").each(function () {
				$(this).addClass('inactive');
			});
			$(this).removeClass('inactive');
		}
	});
});
