jQuery(document).ready(function($)
{
	$('.notification-block').on('click', function(e)
	{
		e.preventDefault();

		var details = $(this).find('.notification-details');
		if (details.is(':hidden'))
			details.slideDown('fast');
		else
			details.slideUp('fast');
	});
});